(this.webpackJsonpbilpay=this.webpackJsonpbilpay||[]).push([[0],{10:function(e,t,n){e.exports={InvoBriefWrapper:"InvoiceBriefWrapper_InvoBriefWrapper__31WuZ",InvoBriefWrapperSec:"InvoiceBriefWrapper_InvoBriefWrapperSec__2DGrq"}},15:function(e){e.exports=JSON.parse('[{"invoice-number":"INV-001","invoice-date":"March 20,2021","client":"John Doe","company-name":"FexGroup","company-address":"Kota Kemuning","service-name":"Upgrade System","service-details":"programming","due-date":"April 19-2021","subtotal":"$349","status":"paid","discount":false,"dicount-amount":0},{"invoice-number":"INV-002","invoice-date":"March 20,2021","client":"Zaiful Bahri","company-name":"Pogo Solutions","company-address":"Kota Kemuning","service-name":"Lighting Control","service-details":"Integration","due-date":"April 19-2021","subtotal":"$520","status":"unpaid","discount":true,"dicount-amount":10}]')},24:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(12),i=n.n(r),a=(n(24),n(25),n(2)),o=n(6),s=n(17),u=n(10),l=n.n(u),j=n(13),d=n(0),p=function(e){var t=e.precentage,n=e.number,c=e.title,r=e.color;return Object(d.jsx)(j.a,{sm:12,md:3,children:Object(d.jsxs)("div",{className:l.a.InvoBriefWrapper,children:[Object(d.jsxs)("div",{className:l.a.InvoBriefWrapperSec,children:[Object(d.jsx)(s.a,{color:r,size:"25px"}),Object(d.jsx)("span",{children:n}),Object(d.jsx)("p",{children:c})]}),Object(d.jsxs)("div",{style:{color:r,fontWeight:600},children:[t," %"]})]})})},b=n(18),v=n(15),O=n(19),f=Object(c.createContext)(),h=function(e){var t=Object(c.useState)(v),n=Object(o.a)(t,2),r=n[0],i=n[1],s=r.filter((function(e){return"paid"===e.status})),u=r.filter((function(e){return"unpaid"===e.status}));return Object(d.jsx)(f.Provider,{value:{invoices:r,AddInvoice:function(e){i([].concat(Object(b.a)(r),[Object(a.a)({id:Object(O.a)()},e)]))},GetPaidInvoices:function(){return{number:s.length,precentage:100*s.length/r.length}},GetUnPaidInvoices:function(){return{number:u.length,precentage:100*u.length/r.length}},GetTotalInvoices:function(){return{number:r.length,precentage:100}}},children:e.children})},m=function(){var e=Object(c.useContext)(f),t=e.GetPaidInvoices,n=e.GetUnPaidInvoices,r=e.GetTotalInvoices,i=Object(c.useState)([]),s=Object(o.a)(i,2),u=s[0],l=s[1];return Object(c.useEffect)((function(){l([Object(a.a)(Object(a.a)({},r()),{},{title:"Total Invoices",color:"green"}),Object(a.a)(Object(a.a)({},t()),{},{title:"Paid Invoices",color:"greenyellow"}),Object(a.a)(Object(a.a)({},n()),{},{title:"Unpaid Invoices",color:"red"}),{number:20,precentage:31,title:"Draft Invoices",color:"gray"}])}),[t,n,r]),Object(d.jsx)(d.Fragment,{children:u.map((function(e,t){return Object(d.jsx)(p,{title:e.title,color:e.color,precentage:e.precentage,number:e.number},t)}))})},g=n(16),x=n(11),I=function(){return Object(d.jsxs)(x.a,{children:[Object(d.jsx)(j.a,{lg:2}),Object(d.jsx)(j.a,{lg:10,children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)("h3",{children:"Invoices"}),Object(d.jsx)(x.a,{children:Object(d.jsx)(m,{})})]})})]})};var y=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{children:Object(d.jsx)(I,{})})})};n(27);i.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.5d8b36d1.chunk.js.map