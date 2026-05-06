import { writeFileSync } from "node:fs";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const tabs = await fetch("http://127.0.0.1:9222/json/list").then((response) => response.json());
const page = tabs.find((tab) => tab.type === "page");

if (!page) {
  throw new Error("No Chrome page found on port 9222");
}

const ws = new WebSocket(page.webSocketDebuggerUrl);
let sequence = 0;
const pending = new Map();

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  }
};

function call(method, params = {}) {
  const id = ++sequence;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve) => pending.set(id, resolve));
}

async function clickAt(x, y) {
  await call("Input.dispatchMouseEvent", { type: "mousePressed", x, y, button: "left", clickCount: 1 });
  await call("Input.dispatchMouseEvent", { type: "mouseReleased", x, y, button: "left", clickCount: 1 });
}

async function evaluate(expression) {
  const result = await call("Runtime.evaluate", { expression, returnByValue: true });
  if (result.result.exceptionDetails) {
    throw new Error(result.result.exceptionDetails.text || "Runtime evaluation failed");
  }
  return result.result.result.value;
}

await new Promise((resolve) => {
  ws.onopen = resolve;
});

await call("Page.enable");
await call("Emulation.setDeviceMetricsOverride", {
  width: 390,
  height: 950,
  deviceScaleFactor: 1,
  mobile: true
});
await call("Page.navigate", { url: "http://localhost:3001" });
await sleep(1300);

const initial = await evaluate(`(() => ({
  mode: document.querySelector(".fig-shell")?.dataset.mode,
  interactive: document.querySelectorAll(".fig-interactive").length,
  menuOpen: document.querySelector(".mobile-menu-panel")?.classList.contains("is-open")
}))()`);

const burgerRect = await evaluate(`(() => {
  const burger = [...document.querySelectorAll("[data-id]")].find((element) => element.dataset.id === "2141:1312");
  const rect = burger.getBoundingClientRect();
  return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
})()`);
await clickAt(burgerRect.x + burgerRect.width / 2, burgerRect.y + burgerRect.height / 2);
await sleep(250);

const menu = await evaluate(`(() => ({
  open: document.querySelector(".mobile-menu-panel")?.classList.contains("is-open"),
  items: [...document.querySelectorAll(".mobile-menu-panel button")].map((button) => button.textContent)
}))()`);

await clickAt(burgerRect.x + burgerRect.width / 2, burgerRect.y + burgerRect.height / 2);
await sleep(250);

const curriculumButtonRect = await evaluate(`(() => {
  const button = [...document.querySelectorAll("[data-id]")].find((element) => element.dataset.id === "2133:11");
  const rect = button.getBoundingClientRect();
  return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
})()`);
await clickAt(
  curriculumButtonRect.x + curriculumButtonRect.width / 2,
  curriculumButtonRect.y + curriculumButtonRect.height / 2
);
await sleep(1300);

const afterButton = await evaluate(`(() => ({ scrollY, reachedCurriculum: scrollY > 3000 }))()`);

await evaluate("scrollTo(0, 0)");
await sleep(1300);
await clickAt(burgerRect.x + burgerRect.width / 2, burgerRect.y + burgerRect.height / 2);
await sleep(200);
const curriculumMenuRect = await evaluate(`(() => {
  const button = [...document.querySelectorAll(".mobile-menu-panel button")].find((element) => element.textContent === "Curriculum");
  const rect = button.getBoundingClientRect();
  return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
})()`);
await clickAt(curriculumMenuRect.x + curriculumMenuRect.width / 2, curriculumMenuRect.y + curriculumMenuRect.height / 2);
await sleep(1300);

const afterMenu = await evaluate(`(() => ({
  scrollY,
  reachedCurriculum: scrollY > 3000,
  menuOpen: document.querySelector(".mobile-menu-panel")?.classList.contains("is-open")
}))()`);

await call("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 1000,
  deviceScaleFactor: 1,
  mobile: false
});
await call("Page.navigate", { url: "http://localhost:3001" });
await sleep(1300);

const desktopInitial = await evaluate(`(() => ({
  mode: document.querySelector(".fig-shell")?.dataset.mode,
  interactive: document.querySelectorAll(".fig-interactive").length
}))()`);

await evaluate(`(() => {
  [...document.querySelectorAll("[data-id]")].find((element) => element.dataset.id === "2015:1725").click();
})()`);
await sleep(1300);

const desktopButton = await evaluate(`(() => ({ scrollY, reachedCurriculum: scrollY > 4300 }))()`);

await evaluate(`(() => {
  [...document.querySelectorAll("[data-id]")].find((element) => element.dataset.id === "2015:2095").click();
})()`);
await sleep(250);

const desktopModuleDialog = await evaluate(`(() => ({
  open: document.querySelector(".site-dialog-backdrop")?.classList.contains("is-open"),
  title: document.querySelector(".site-dialog-title")?.textContent
}))()`);

await evaluate(`document.querySelector(".site-dialog-close")?.click()`);
await sleep(100);

await evaluate(`(() => {
  [...document.querySelectorAll("[data-id]")].find((element) => element.dataset.id === "2015:2426").click();
})()`);
await sleep(250);

const desktopPrivacyDialog = await evaluate(`(() => ({
  open: document.querySelector(".site-dialog-backdrop")?.classList.contains("is-open"),
  title: document.querySelector(".site-dialog-title")?.textContent
}))()`);

const screenshot = await call("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
writeFileSync("/tmp/node-clone-interactions.png", Buffer.from(screenshot.result.data, "base64"));

console.log(
  JSON.stringify(
    {
      mobile: { initial, menu, afterButton, afterMenu },
      desktop: { desktopInitial, desktopButton, desktopModuleDialog, desktopPrivacyDialog }
    },
    null,
    2
  )
);
ws.close();
