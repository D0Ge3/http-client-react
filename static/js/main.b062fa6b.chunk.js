(this["webpackJsonphttp-client-react"]=this["webpackJsonphttp-client-react"]||[]).push([[0],{11:function(e,t,a){e.exports={history:"History_history__2nlMm",historyItem:"History_historyItem__1SD1u",method:"History_method__3vLaq",method_green:"History_method_green__xmga_",method_red:"History_method_red__2WPWy",method_yellow:"History_method_yellow__y0RPB",url:"History_url__MUd7G"}},12:function(e,t,a){e.exports={wrap:"Response_wrap__srrzz",tabWrap:"Response_tabWrap__1hW3y",tabPanel:"Response_tabPanel__1XUNO",status_good:"Response_status_good__2bYoX",status_bad:"Response_status_bad__1iPPi"}},13:function(e,t,a){e.exports={mainParams:"Request_mainParams__3ifqU",urlWrap:"Request_urlWrap__3WoIy",urlWrap_error:"Request_urlWrap_error__3awz1",tabs:"Request_tabs__2WCPi",tabWrap:"Request_tabWrap__2ke1y"}},20:function(e,t,a){e.exports={table:"Headers_table__RVOQF",input:"Headers_input__Ed2Ad",close:"Headers_close__1VUGX"}},24:function(e,t,a){e.exports={tabPanel:"TabsPanel_tabPanel__2WqT0",tab:"TabsPanel_tab__3PvIk",tab_active:"TabsPanel_tab_active__3fpUw"}},25:function(e,t,a){e.exports={layout:"App_layout__1DIBs",mainWrap:"App_mainWrap__1Dojp",main:"App_main__aDOxM"}},29:function(e,t,a){e.exports={select:"Select_select__3R6Mx",selectWrapper:"Select_selectWrapper__cifUA"}},43:function(e,t,a){e.exports={button:"Button_button__2sj8o"}},44:function(e,t,a){e.exports={url:"UrlInput_url__20fuH"}},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n,r,c=a(1),s=a.n(c),o=a(21),u=a.n(o),i=a(6),l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},d=a(14),b=a(3),j=a(9),h=a(8),O=a.n(h),p=a(10),_=a(17),f=a(4),x=a(15),m=Object(f.b)("SET_URL"),v=Object(f.b)("SET_METHOD"),y=Object(f.b)("SET_BODY"),g=Object(f.b)("SET_IS_LOADING"),T=Object(f.b)("SET_REQ_HEADERS"),S=Object(f.b)("SET_STATUS"),w=Object(f.b)("SET_DATA"),E=Object(f.b)("SET_RES_HEADERS"),N=Object(f.b)("SET_QUERY"),C=Object(f.b)("SET_HISTORY"),H=Object(f.b)("PUSH_HISTORY"),P=function(e,t){return function(){var a=Object(_.a)(O.a.mark((function a(n){var r,c,s;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r={id:Object(x.a)(),request:e,response:t},n(H(r));try{(c=localStorage.getItem("history"))?(s=JSON.parse(c),localStorage.setItem("history",JSON.stringify([r].concat(Object(p.a)(s))))):localStorage.setItem("history",JSON.stringify([r]))}catch(o){}case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},W=a(11),k=a.n(W),q=a(0),R=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.history}));Object(c.useEffect)((function(){e(function(){var e=Object(_.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=localStorage.getItem("history"))&&t(C(JSON.parse(a)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var a=function(e){var t;return j(k.a.method,(t={},Object(b.a)(t,k.a.method_green,"GET"===e||"PUT"===e||"PATCH"===e),Object(b.a)(t,k.a.method_red,"DELETE"===e),Object(b.a)(t,k.a.method_yellow,"POST"===e),t))};return Object(q.jsxs)("div",{className:k.a.history,children:[Object(q.jsx)("h3",{children:"History"}),Object(q.jsx)(d.Scrollbars,{style:{height:"calc(100vh - 65px)"},children:t.map((function(t){return Object(q.jsxs)("div",{className:k.a.historyItem,onClick:function(){return e((a=t.id,function(){var e=Object(_.a)(O.a.mark((function e(t,n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n().history.filter((function(e){return e.id===a}))[0],t(N(r));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));var a},children:[Object(q.jsx)("span",{className:a(t.request.method),children:t.request.method}),Object(q.jsx)("span",{className:k.a.url,title:t.request.url,children:t.request.url.length>60?"".concat(t.request.url.slice(0,60),"..."):t.request.url})]},t.id)}))})]})},I=a(18),A=a(23),D=(a(33),a(7)),L=a(16),U=a(29),z=a.n(U),B=function(e){var t=e.options,a=e.name,n=e.onChange,r=e.value,c=Object(L.a)(e,["options","name","onChange","value"]);return Object(q.jsx)("div",{className:z.a.selectWrapper,children:Object(q.jsx)("select",Object(D.a)(Object(D.a)({className:z.a.select,name:a,value:r,onChange:n},c),{},{children:t.map((function(e){return Object(q.jsx)("option",{value:e,children:e},e)}))}))})},M=a(43),G=a.n(M),F=function(e){var t=e.children,a=e.onClick,n=Object(L.a)(e,["children","onClick"]);return Object(q.jsx)("button",Object(D.a)(Object(D.a)({className:G.a.button,onClick:a},n),{},{children:t}))},J=a(44),Y=a.n(J),V=function(e){var t=e.value,a=e.onChange,n=e.name,r=e.placeholder,c=Object(L.a)(e,["value","onChange","name","placeholder"]);return Object(q.jsx)("input",Object(D.a)({className:Y.a.url,type:"text",name:n,value:t,onChange:a,placeholder:r},c))},Q=a(24),X=a.n(Q),Z=function(e){var t=e.activeTab,a=e.tabs,n=e.changeTab,r=e.className,c=function(e){var t;return j((t={},Object(b.a)(t,X.a.tab,!0),Object(b.a)(t,X.a.tab_active,e),Object(b.a)(t,r,r),t))};return Object(q.jsx)("div",{className:X.a.tabPanel,children:a.map((function(e,a){return Object(q.jsx)("div",{onClick:function(){return n(a)},className:c(a===t),children:Object(q.jsx)("span",{children:e})},e)}))})},K=a(20),$=a.n(K),ee=function(){return Object(q.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(q.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(q.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})]})},te=function(e){var t=e.onClick;return Object(q.jsxs)("svg",{onClick:t,style:{cursor:"pointer"},xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(q.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(q.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})]})},ae=function(e){var t=e.headers,a=e.setHeaders,n=e.readOnly,r=function(e,n){a(Object(p.a)(t.map((function(t){return t.id===e?Object(D.a)(Object(D.a)({},t),{},Object(b.a)({},n.target.name,n.target.value)):t}))))};return Object(q.jsxs)(d.Scrollbars,{children:[Object(q.jsxs)("table",{className:$.a.table,children:[t.length>0&&Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("td",{children:"Key"}),Object(q.jsx)("td",{children:"Value"}),!n&&Object(q.jsx)("td",{})]})}),Object(q.jsx)("tbody",{children:t.map((function(e){return Object(q.jsxs)("tr",{children:[Object(q.jsx)("td",{children:Object(q.jsx)("input",{className:$.a.input,type:"text",name:"name",value:e.name,onChange:function(t){return r(e.id,t)},disabled:n})}),Object(q.jsx)("td",{children:Object(q.jsx)("input",{className:$.a.input,type:"text",name:"value",disabled:n,value:e.value,onChange:function(t){return r(e.id,t)}})}),!n&&Object(q.jsx)("td",{className:$.a.close,onClick:function(){return n=e.id,a(Object(p.a)(t.filter((function(e){return e.id!==n}))));var n},children:Object(q.jsx)(ee,{})})]},e.id)}))})]}),!n&&Object(q.jsx)(te,{onClick:function(){return a([].concat(Object(p.a)(t),[{id:Object(x.a)(),name:"",value:""}]))}})]})},ne=a(30),re=a.n(ne),ce=function(e){var t={};return e.forEach((function(e){return t[e.name]=e.value})),t},se=a(13),oe=a.n(se),ue=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.current.isLoading})),a=Object(i.c)((function(e){return e.current.request})),n=a.url,r=a.method,s=a.headers,o=a.body,u=Object(c.useState)(0),l=Object(I.a)(u,2),d=l[0],h=l[1],p=Object(c.useState)(!1),f=Object(I.a)(p,2),x=f[0],N=f[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("div",{className:oe.a.mainParams,children:[Object(q.jsxs)("div",{className:j(oe.a.urlWrap,Object(b.a)({},oe.a.urlWrap_error,x)),children:[Object(q.jsx)(B,{name:"method",options:["GET","POST","DELETE","PUT","PATCH"],value:r,onChange:function(t){"GET"===t.target.value&&1===d&&h(0),e(v(t.target.value))}}),Object(q.jsx)(V,{name:"url",placeholder:"Type a url...",value:n,onChange:function(t){x&&N(!1),e(m(t.target.value))}})]}),Object(q.jsx)(F,{disabled:t,onClick:function(){new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/).test(n)?e(function(){var e=Object(_.a)(O.a.mark((function e(t,a){var n,r,c,s,o,u,i,l,d;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a().current.request,r=n.method,c=n.headers,s=n.url,o=n.body,u={},i={},e.prev=3,t(g(!0)),u={url:s,method:r,headers:c,body:o},"GET"!==r){e.next=16;break}return e.next=9,re.a.get(s,{headers:ce(c)});case 9:l=e.sent,i={headers:l.headers,data:l.data,status:{code:l.status,text:l.statusText}},t(E(i.headers)),t(w(i.data)),t(S(i.status)),e.next=23;break;case 16:return e.next=18,re.a[r.toLowerCase()](s,o,{headers:ce(c)});case 18:d=e.sent,i={headers:d.headers,data:d.data,status:{code:d.status,text:d.statusText}},t(E(i.headers)),t(w(i.data)),t(S(i.status));case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(3),e.t0.response?(i={headers:e.t0.response.headers,data:e.t0.response.data,status:{code:e.t0.response.status,text:e.t0.response.statusText}},t(E(i.headers)),t(S(i.status)),t(w(i.data))):(t(E((i={headers:[],data:null,status:{code:1,text:"Network error"}}).headers)),t(S(i.status)),t(w(i.data)));case 28:t(P(u,i)),t(g(!1));case 30:case"end":return e.stop()}}),e,null,[[3,25]])})));return function(t,a){return e.apply(this,arguments)}}()):N(!0)},children:"Send"})]}),Object(q.jsxs)("div",{className:oe.a.tabs,children:[Object(q.jsx)(Z,{tabs:"GET"===r?["Headers"]:["Headers","Body"],activeTab:d,changeTab:function(e){return h(e)}}),function(){switch(d){case 0:return Object(q.jsx)("div",{className:oe.a.tabWrap,children:Object(q.jsx)(ae,{headers:s,setHeaders:function(t){return e(T(t))}})});case 1:return Object(q.jsx)("div",{className:oe.a.tabWrap,children:Object(q.jsx)(A.a,{mode:"code",value:o,onChange:function(t){return e(y(t))}})})}}()]})]})},ie=a(12),le=a.n(ie),de=function(){var e=Object(c.useRef)(),t=Object(i.c)((function(e){return e.current.response})),a=t.status,n=t.data,r=t.headers,s=Object(i.c)((function(e){return e.current.isLoading})),o=Object(c.useState)(0),u=Object(I.a)(o,2),l=u[0],d=u[1],h=Object(c.useState)([]),O=Object(I.a)(h,2),p=O[0],_=O[1];Object(c.useEffect)((function(){var e=[];if(r){for(var t in r)e.push({id:Object(x.a)(),name:t,value:r[t]});_(e)}}),[r]),Object(c.useEffect)((function(){var t=e&&e.current&&e.current.jsonEditor;t&&n&&t.update(n)}),[e,n]);console.log("render");return Object(q.jsxs)("div",{className:le.a.wrap,children:[Object(q.jsx)(Z,{tabs:["Body","Headers"],activeTab:l,changeTab:function(e){return d(e)},className:le.a.tabPanel}),!s&&a.code&&Object(q.jsxs)("span",{children:["Status:"," ",Object(q.jsxs)("span",{className:function(e){var t;return j(le.a.status,(t={},Object(b.a)(t,le.a.status_good,e>=200&&e<=299),Object(b.a)(t,le.a.status_bad,e>299||e<200),t))}(a.code),children:[1===a.code?"":a.code," ",a.text]})]}),!s&&function(){switch(l){case 0:return Object(q.jsx)("div",{className:le.a.tabWrap,children:n?Object(q.jsx)(A.a,{ref:e,mode:"preview",value:n}):Object(q.jsx)(q.Fragment,{})});case 1:return Object(q.jsx)("div",{className:le.a.tabWrap,children:Object(q.jsx)(ae,{headers:p,readOnly:!0})});default:return Object(q.jsx)(q.Fragment,{})}}()]})},be=a(25),je=a.n(be),he=function(){return Object(q.jsxs)("div",{className:je.a.layout,children:[Object(q.jsx)(R,{}),Object(q.jsx)("div",{className:je.a.mainWrap,children:Object(q.jsx)(d.Scrollbars,{children:Object(q.jsxs)("div",{className:je.a.main,children:[Object(q.jsx)(ue,{}),Object(q.jsx)(de,{})]})})})]})},Oe=(a(88),Object(f.c)({request:{url:"",method:"GET",headers:[],body:null},response:{headers:[],data:null,status:{code:null,text:""}},isLoading:!1},(n={},Object(b.a)(n,g,(function(e,t){e.isLoading=t.payload})),Object(b.a)(n,m,(function(e,t){e.request.url=t.payload})),Object(b.a)(n,v,(function(e,t){e.request.method=t.payload})),Object(b.a)(n,y,(function(e,t){e.request.body=t.payload})),Object(b.a)(n,T,(function(e,t){e.request.headers=t.payload})),Object(b.a)(n,S,(function(e,t){e.response.status=t.payload})),Object(b.a)(n,w,(function(e,t){e.response.data=t.payload})),Object(b.a)(n,E,(function(e,t){e.response.headers=t.payload})),Object(b.a)(n,N,(function(e,t){e.request=t.payload.request,e.response=t.payload.response})),n))),pe=Object(f.c)([],(r={},Object(b.a)(r,H,(function(e,t){return[t.payload].concat(Object(p.a)(e))})),Object(b.a)(r,C,(function(e,t){return t.payload})),r)),_e=Object(f.d)({immutableCheck:!1,serializableCheck:!1,thunk:!0}),fe=Object(f.a)({reducer:{current:Oe,history:pe},middleware:_e,devTools:!1});u.a.render(Object(q.jsx)(s.a.StrictMode,{children:Object(q.jsx)(i.a,{store:fe,children:Object(q.jsx)(he,{})})}),document.getElementById("root")),l()}},[[89,1,2]]]);
//# sourceMappingURL=main.b062fa6b.chunk.js.map