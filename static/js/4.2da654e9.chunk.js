(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{292:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__D3LPs",dialogsItems:"Dialogs_dialogsItems__2i4IO",active:"Dialogs_active__oETkc",messages:"Dialogs_messages__3dpm6",message:"Dialogs_message__66Nj0"}},297:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),i=s(292),m=s.n(i),l=s(11),o=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:m.a.dialog+" "+m.a.active},n.a.createElement(l.b,{to:a}," ",e.name))},c=s(94),r=s(25),g=s(37),d=s(55),u=s(87),E=s(125),b=Object(d.a)(50),f=Object(E.a)({form:"dialogAddMassageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(u.a,{component:g.b,validate:[d.b,b],name:"newMessageBody",placeholder:"Enter your message"})),n.a.createElement("div",null,n.a.createElement("button",null,"Send")))})),p=function(e){return n.a.createElement("div",{className:m.a.dialogs},e.message)},v=function(e){var a=e.messagePage,s=a.dialogs.map((function(e){return n.a.createElement(o,{name:e.name,key:e.id,id:e.id})})),t=a.messages.map((function(e){return n.a.createElement(p,{message:e.message,key:e.id})}));a.newMessageBody;return e.isAuth?n.a.createElement("div",{className:m.a.dialogs},n.a.createElement("div",{className:m.a.dialogsItems},s),n.a.createElement("div",{className:m.a.messages},n.a.createElement("div",null,t)),n.a.createElement(f,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):n.a.createElement(r.a,{to:"/login"})},_=s(12),y=s(138),h=s(7);a.default=Object(h.d)(Object(_.b)((function(e){return{messagePage:e.messagePage}}),(function(e){return{sendMessage:function(a){e(Object(c.b)(a))}}})),y.a)(v)}}]);
//# sourceMappingURL=4.2da654e9.chunk.js.map