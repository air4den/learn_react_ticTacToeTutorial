(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t(7);t(19);function o(e){let{value:a,onSquareClick:t}=e;return l.a.createElement("button",{className:"square",onClick:t},a)}function u(e){let{xIsNext:a,squares:t,onPlay:n}=e;function c(e){if(t[e]||r(t))return;const l=t.slice();l[e]=a?"X":"O",n(l),console.log("clicked! Button#"+(e+1))}function r(e){const a=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,8],[0,3,6],[1,4,7],[2,5,8]];for(let t=0;t<a.length;t++){const[n,l,c]=a[t];if(e[n]&&e[n]===e[l]&&e[n]===e[c])return e[n]}return null}const u=r(t);let m;return m=u?"Winner: "+u:"Next player: "+(a?"X":"O"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"status"},m),l.a.createElement("div",{className:"board-row"},l.a.createElement(o,{value:t[0],onSquareClick:()=>c(0)}),l.a.createElement(o,{value:t[1],onSquareClick:()=>c(1)}),l.a.createElement(o,{value:t[2],onSquareClick:()=>c(2)})),l.a.createElement("div",{className:"board-row"},l.a.createElement(o,{value:t[3],onSquareClick:()=>c(3)}),l.a.createElement(o,{value:t[4],onSquareClick:()=>c(4)}),l.a.createElement(o,{value:t[5],onSquareClick:()=>c(5)})),l.a.createElement("div",{className:"board-row"},l.a.createElement(o,{value:t[6],onSquareClick:()=>c(6)}),l.a.createElement(o,{value:t[7],onSquareClick:()=>c(7)}),l.a.createElement(o,{value:t[8],onSquareClick:()=>c(8)})))}function m(){const[e,a]=Object(n.useState)([Array(9).fill(null)]),[t,c]=Object(n.useState)(0),r=t%2===0,o=e[t];const m=e.map((e,a)=>{let t;return t=a>0?"Go to move #"+a:"Go to game start",l.a.createElement("li",{key:a},l.a.createElement("button",{onClick:()=>(function(e){c(e)})(a)},t))});return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Hello, welcome to my Tic-Tac-Toe Game! - Josh Forden"),l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(u,{xIsNext:r,squares:o,onPlay:function(n){const l=[...e.slice(0,t+1),n];a(l),c(l.length-1)}})),l.a.createElement("div",{className:"game-info"},l.a.createElement("ol",null,m))))}Object(r.createRoot)(document.getElementById("root")).render(l.a.createElement(n.StrictMode,null,l.a.createElement(c.a,null,l.a.createElement("title",null,"Tic-Tac-Toe Game | Josh Forden")),l.a.createElement(m,null)))},8:function(e,a,t){e.exports=t(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.aa201f5a.chunk.js.map