(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{16:function(e,n,t){e.exports=t(24)},21:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(11),c=t.n(a),i=(t(21),t(2)),u=t(15),d=t(4),l=t(8),s=t(3);function f(){var e=Object(i.a)(["\n    width: 160px;\n    border: 1px solid lightgray;\n    border-radius: 5px;\n    font-size: 18px;\n    :focus {\n        outline: none;\n    }\n"]);return f=function(){return e},e}function p(){var e=Object(i.a)(["\n    font-size: 18px;\n"]);return p=function(){return e},e}function m(){var e=Object(i.a)(["\n    padding: 10px 15px;\n    border: 2px solid ",";\n    color: ",";\n    width: 120px;\n    border-radius: 5px;\n    font-size: 18px;\n    cursor: pointer;\n"]);return m=function(){return e},e}function b(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 20px;\n    width: 300px;\n"]);return b=function(){return e},e}var v={todos:[]},h=function(e,n){return"ADD"===n.type?Object(d.a)(Object(d.a)({},e),{},{todos:[].concat(Object(u.a)(e.todos),[n.todo])}):"REMOVE"===n.type?Object(d.a)(Object(d.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==n.id}))}):e},E=function(e){var n=e.addToDo,t=Object(o.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],u=function(){c&&(n({name:c,id:Math.random()}),i(""))};return r.a.createElement(O,null,r.a.createElement(y,{type:"text",placeholder:"Add your todo...",value:c,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){13==e.charCode&&u()}}),r.a.createElement(j,{add:!0,onClick:function(){return u()}},"Add"))},x=function(e){var n=e.todo,t=e.removeToDo;return r.a.createElement(O,null,r.a.createElement(w,null," ",n.name," "),r.a.createElement(j,{onClick:function(){return t(n.id)}}," Remove "))},O=s.a.div(b()),j=s.a.button(m(),(function(e){return e.add?"#5ec25f":"#c35e6b"}),(function(e){return e.add?"#5ec25f":"#c35e6b"})),w=s.a.span(p()),y=s.a.input(f()),g=function(){var e=Object(o.useReducer)(h,v),n=Object(l.a)(e,2),t=n[0],a=n[1],c=function(e){return a({type:"REMOVE",id:e})};return r.a.createElement("div",{class:"col-xs-1",align:"center"}," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("h1",null," To Do list "),r.a.createElement(E,{addToDo:function(e){return a({type:"ADD",todo:e})}}),t.todos.map((function(e){return r.a.createElement(x,{key:e.id,todo:e,removeToDo:c})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.e4af21e1.chunk.js.map