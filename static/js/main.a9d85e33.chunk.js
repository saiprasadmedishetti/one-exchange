(this.webpackJsonpexchange=this.webpackJsonpexchange||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),i=c.n(r),a=(c(9),c(2)),d=c(0),j=new WebSocket("wss://ws-feed.pro.coinbase.com"),l={channels:["ticker"],product_ids:["BTC-USD"],type:"subscribe"},o={channels:["ticker"],product_ids:["BTC-USD"],type:"unsubscribe"};var b=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(null),i=Object(a.a)(r,2),b=i[0],h=i[1],u=Object(n.useState)({}),O=Object(a.a)(u,2),x=O[0],m=O[1];return Object(n.useEffect)((function(){return fetch("https://api.pro.coinbase.com/products/BTC-USD/trades").then((function(e){return e.json()})).then((function(e){return s(e)})),function(){s([])}}),[]),Object(n.useEffect)((function(){return j.onopen=function(e){j.send(JSON.stringify(l))},j.onmessage=function(e){var t=JSON.parse(e.data);"ticker"===t.type&&h((function(e){return e&&m(e),t}))},function(){j.send(JSON.stringify(o))}}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"stream",children:b&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h1",{className:"price",style:{color:x.price>b.price?"indianred":"mediumseagreen"},children:["$ ",Number(b.price).toLocaleString()]}),Object(d.jsxs)("div",{className:"badge",children:["Low 24hr",Object(d.jsxs)("span",{style:{color:x.low_24h>b.low_24h?"indianred":"mediumseagreen"},children:["$ ",b.low_24h]})]}),Object(d.jsxs)("div",{className:"badge",children:["Volume",Object(d.jsx)("span",{style:{color:x.last_size>b.last_size?"indianred":"mediumseagreen"},children:b.last_size})]}),Object(d.jsxs)("div",{className:"badge",children:["Open 24hr",Object(d.jsxs)("span",{children:["$ ",b.open_24h]})]})]})}),Object(d.jsx)("div",{className:"scroll",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Trade ID"}),Object(d.jsx)("th",{children:"Price"}),Object(d.jsx)("th",{children:"Size"}),Object(d.jsx)("th",{children:"Time"})]})}),Object(d.jsx)("tbody",{children:c&&c.length>0&&c.map((function(e){return Object(d.jsxs)("tr",{style:{color:"sell"===e.side?"indianred":"mediumseagreen"},children:[Object(d.jsx)("td",{children:e.trade_id}),Object(d.jsxs)("td",{children:["$ ",Number(e.price).toFixed(3).toLocaleString()]}),Object(d.jsx)("td",{children:e.size}),Object(d.jsx)("td",{children:new Date(e.time).toDateString()})]},e.trade_id)}))})]})})]})};var h=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(b,{})})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.a9d85e33.chunk.js.map