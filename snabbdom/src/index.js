// import h from "./my-snabbdom/h"
// import patch from "./my-snabbdom/patch"
import { h, init } from "./snabbdom.cjs.js"

const patch = init([
  // 通过传入模块初始化 patch 函数
  // classModule, // 开启 classes 功能
  // propsModule, // 支持传入 props
  // styleModule, // 支持内联样式同时支持动画
  // eventListenersModule, // 添加事件监听
])

let container = document.getElementById("container")
let btn = document.getElementById("btn")
let btn1 = document.getElementById("btn1")

// debugger;

const myVnode1 = h("ul", {}, [
  h("li", { key: "D" }, "D"),
  h("li", { key: "C" }, "C"),
  h("li", { key: "B" }, "B"),
  h("li", { key: "A" }, "A"),
])
// 上树
patch(container, myVnode1)

const myVnode2 = h("ul", {}, [
  h("li", { key: "C" }, "C"),
  h("li", { key: "B" }, "B"),
  h("li", { key: "E" }, "E"),
  h("li", { key: "M" }, "M"),
  h("li", { key: "E" }, "E"),
  h("li", { key: "D" }, "D"),
  h("li", { key: "M" }, "M"),
])

const myVnode3 = h("ul", {}, [
  h("li", { key: "C" }, "C"),
  h("li", { key: "B" }, "B"),
  h("li", { key: "E" }, "E"),
])

btn.onclick = function () {
  patch(myVnode1, myVnode2)
}
btn1.onclick = function () {
  patch(myVnode2, myVnode3)
}

// import {
//   init,
//   classModule,
//   propsModule,
//   styleModule,
//   eventListenersModule,
//   h,
// } from "./snabbdom.cjs.js"

// const patch = init([
//   // 通过传入模块初始化 patch 函数
//   classModule, // 开启 classes 功能
//   propsModule, // 支持传入 props
//   styleModule, // 支持内联样式同时支持动画
//   eventListenersModule, // 添加事件监听
// ])

// const container = document.getElementById("container")
// console.log(container)

// // debugger
// const vnode = h(
//   "div#container.two.classes",
//   {
//     on: {
//       click: () => {
//         console.log("click")
//       },
//     },
//   },
//   [
//     h("span", { style: { fontWeight: "bold" } }, "This is bold"),
//     " and this is just normal text",
//     h("a", { props: { href: "/foo" } }, "I'll take you places!"),
//   ]
// )
// // 传入一个空的元素节点 - 将产生副作用（修改该节点）
// patch(container, vnode)

// const newVnode = h("div#container.two.classes", { on: { click: () => {} } }, [
//   h(
//     "span",
//     { style: { fontWeight: "normal", fontStyle: "italic" } },
//     "This is now italic type"
//   ),
//   " and this is still just normal text",
//   h("a", { props: { href: "http://www.baidu.com" } }, "I'll take you places!"),
// ])
// // 再次调用 `patch`
// patch(vnode, newVnode) // 将旧节点更新为新节点
