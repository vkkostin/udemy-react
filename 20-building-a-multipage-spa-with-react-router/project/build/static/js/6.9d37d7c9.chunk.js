(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__1m44e"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},55:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(37),r=c(0),s=c(41),a=c.n(s),u=c(1),i=function(e){return Object(u.jsx)("div",{className:a.a.card,children:e.children})},l=c(15),d=c(42),j=c.n(d),b=function(e){var t=Object(r.useRef)(),c=Object(r.useRef)(),s=Object(r.useState)(!1),a=Object(o.a)(s,2),d=a[0],b=a[1];return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(n.a,{when:d,message:function(e){return console.log(e),"Are you sure you want to leave? All your entered data will be lost."}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){return b(!0)},className:j.a.form,onSubmit:function(n){n.preventDefault();var o=t.current.value,r=c.current.value;e.onAddQuote({author:o,text:r})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){return b(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(35),h=c(36);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,o=Object(n.h)();Object(r.useEffect)((function(){"completed"===c&&o.push("/quotes")}),[c,o]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){return t(e)}})}}}]);
//# sourceMappingURL=6.9d37d7c9.chunk.js.map