(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5,7],{38:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},39:function(e,t,c){"use strict";c.r(t);var s=c(38),n=c.n(s),o=c(11),i=c(1);t.default=function(){return Object(i.jsxs)("div",{className:n.a.noquotes,children:[Object(i.jsx)("p",{children:"No quotes found!"}),Object(i.jsx)(o.a,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})}},52:function(e,t,c){e.exports={item:"QuoteItem_item__2dOvb"}},53:function(e,t,c){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},56:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(52),o=c.n(n),i=c(11),r=c(1),a=function(e){return Object(r.jsxs)("li",{className:o.a.item,children:[Object(r.jsxs)("figure",{children:[Object(r.jsx)("blockquote",{children:Object(r.jsx)("p",{children:e.text})}),Object(r.jsx)("figcaption",{children:e.author})]}),Object(r.jsx)(i.a,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},u=c(53),d=c.n(u),j=c(15),l=function(e){var t=Object(j.useHistory)(),c=Object(j.useLocation)();console.log(c);var n,o,i="asc"===new URLSearchParams(c.search).get("sort"),u=(n=e.quotes,o=i,n.sort((function(e,t){return o?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)("div",{className:d.a.sorting,children:Object(r.jsxs)("button",{onClick:function(){t.push("".concat(c.pathname,"?sort=").concat(i?"desc":"asc"))},children:["Sort ",i?"Ascending":"Descending"]})}),Object(r.jsx)("ul",{className:d.a.list,children:u.map((function(e){return Object(r.jsx)(a,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(36),h=c(37),x=c(16),O=c(39);t.default=function(){var e=Object(b.a)(h.d,!0),t=e.sendRequest,c=e.status,n=e.data,o=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(x.a,{})}):o?Object(r.jsx)("p",{className:"centered focused",children:o}):"completed"!==c||n&&0!==n.length?Object(r.jsx)(l,{quotes:n}):Object(r.jsx)(O.default,{})}}}]);
//# sourceMappingURL=5.c1c38e80.chunk.js.map