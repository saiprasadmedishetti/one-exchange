(this.webpackJsonpexchange=this.webpackJsonpexchange||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),i=c.n(s),a=(c(12),c(7)),d=c(4),l=c(0),o=new WebSocket("wss://ws-feed.pro.coinbase.com"),j={channels:["full","ticker"],product_ids:["BTC-USD"],type:"subscribe"},b={channels:["full","ticker"],product_ids:["BTC-USD"],type:"unsubscribe"};var h=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(null),i=Object(d.a)(s,2),h=i[0],u=i[1],O=Object(n.useState)({}),f=Object(d.a)(O,2),p=f[0],x=f[1];return Object(n.useEffect)((function(){return fetch("https://api.pro.coinbase.com/products/BTC-USD/trades").then((function(e){return e.json()})).then((function(e){return r(e.splice(0,20))})),function(){r([])}}),[]),Object(n.useEffect)((function(){return o.onopen=function(e){o.send(JSON.stringify(j))},o.onmessage=function(e){var t=JSON.parse(e.data);"ticker"===t.type?u((function(e){return e&&x(e),t})):"match"===t.type&&r((function(e){var c=e.filter((function(e){return e.trade_id!==t.trade_id})),n=[t].concat(Object(a.a)(c));return n.length=e.length,n}))},function(){o.send(JSON.stringify(b))}}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"stream",style:{backgroundColor:p&&h&&p.price>h.price?"#cd5c5c1a":"#edf4ff"},children:h&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h1",{className:"price",style:{color:p.price>h.price?"indianred":"#42a76f"},children:["$ ",Number(h.price).toLocaleString()]}),Object(l.jsxs)("div",{className:"badge",children:["Low 24hr",Object(l.jsxs)("span",{style:{color:p.low_24h>h.low_24h?"indianred":"#42a76f"},children:["$ ",Number(h.low_24h).toLocaleString()]})]}),Object(l.jsxs)("div",{className:"badge",children:["Volume",Object(l.jsx)("span",{style:{color:p.last_size>h.last_size?"indianred":"#42a76f"},children:h.last_size})]}),Object(l.jsxs)("div",{className:"badge",children:["Open 24hr",Object(l.jsxs)("span",{style:{color:p.open_24h>h.open_24h?"indianred":"#42a76f"},children:["$ ",Number(h.open_24h).toLocaleString()]})]})]})}),Object(l.jsx)("div",{className:"scroll",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Trade ID"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"Size"}),Object(l.jsx)("th",{children:"Time"})]})}),Object(l.jsx)("tbody",{children:c&&c.length>0&&c.map((function(e){return Object(l.jsxs)("tr",{style:{color:"sell"===e.side?"indianred":"#42a76f",backgroundColor:"sell"===e.side?"#cd5c5c10":"#edf4ff90"},children:[Object(l.jsx)("td",{children:e.trade_id}),Object(l.jsxs)("td",{children:["$ ",Number(e.price).toLocaleString(4)]}),Object(l.jsx)("td",{children:e.size}),Object(l.jsx)("td",{children:new Date(e.time).toLocaleDateString()})]},e.trade_id)}))})]})})]})};var u=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(h,{})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ec3e3ac8.chunk.js.map