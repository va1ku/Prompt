"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[842],{3842:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var i=r(8683),s=r(5987),a=r(5705),o={wrapper:"Login_wrapper__6kgbh",loginWrapper:"Login_loginWrapper__bVWxg",loginInputWrapper:"Login_loginInputWrapper__QUXdP",submitWrapper:"Login_submitWrapper__aGddh",loginInput:"Login_loginInput__R1PXj",checkbox:"Login_checkbox__+jZE+",errors:"Login_errors__ec8uP"},t=r(6871),p=r(5304),l=r(184),c=["field"],u=function(n){var e=function(n){var e=n.field,r=(0,s.Z)(n,c);return(0,l.jsxs)("div",{className:o.loginInputWrapper,children:[(0,l.jsx)("input",(0,i.Z)((0,i.Z)({type:"text"},e),r)),(0,l.jsx)(a.Bc,{name:e.name})]})};return n.isAuth?(0,l.jsx)(t.Fg,{to:"/profile"}):(0,l.jsx)("div",{className:o.wrapper,children:(0,l.jsxs)("div",{className:o.loginWrapper,children:[(0,l.jsx)("h1",{children:"Sign In "}),(0,l.jsx)(a.J9,{onSubmit:function(e,r){var i=e.login,s=e.password,a=e.remember;n.login(i,s,a),r.setSubmitting(!1)},initialValues:{login:"",password:"",remember:!1},children:function(r){var i=r.touched,s=r.errors,t=r.handleChange,c=r.values,u=r.isSubmitting;return(0,l.jsxs)(a.l0,{children:[(0,l.jsx)("h2",{children:"login:"}),(0,l.jsx)(a.gN,{name:"login",className:"".concat(o.loginInput," ").concat(i.login&&s.login?o.errors:""),onChange:t,value:c.login,component:e,validate:(0,p._)()}),(0,l.jsx)("h2",{children:"password:"}),(0,l.jsx)(a.gN,{className:"".concat(o.loginInput," ").concat(i.password&&s.password?o.errors:""),name:"password",type:"password",onChange:t,value:c.password,component:e,validate:(0,p._)()}),(0,l.jsx)("div",{children:n.LoginErrors}),(0,l.jsx)(a.gN,{className:o.checkbox,name:"remember",type:"checkbox",checked:c.remember,onChange:t,component:"input"}),(0,l.jsx)("span",{style:{margin:"0 10px"},children:"remember me"}),(0,l.jsx)("div",{className:o.submitWrapper,children:(0,l.jsx)("button",{type:"submit",className:o.SubmitButton,disabled:u,children:"Sign In"})})]})}})]})})},g=r(8687),d=r(554),m=(0,g.$j)((function(n){return{isAuth:n.auth.isAuth,LoginErrors:n.auth.LoginErrors}}),{login:d.x4})(u)}}]);
//# sourceMappingURL=842.6396f776.chunk.js.map