import{t as w,e as y,a as _}from"../chunks/BCv-PhoZ.js";import"../chunks/B_iCwUiu.js";import{p as D,a as j,c as s,s as u,r as t,D as v}from"../chunks/BHJITWWH.js";import{s as g,c as h}from"../chunks/1ww8kltg.js";import{i as A}from"../chunks/sEuScinW.js";import{g as E}from"../chunks/BlL8gr9j.js";import{i as L,A as N}from"../chunks/D-zHGvuz.js";import{c as R,a as U}from"../chunks/D08HmYVE.js";import{L as F}from"../chunks/BxOkwtCs.js";function i(e,r){U({text:r,position:"bottom-right",removeAfter:5e3,type:e})}async function P(e){R();try{const r=new FormData(e.target);await L.postForm("/users/register/",r)}catch(r){if(!(r instanceof N)||r.response===void 0)throw r;S(r.response);return}i("success","Registration successful!"),await E("/login")}function S({status:e,data:r}){if(e===401){i("error","Error: Username or password doesn't match.");return}const{username:a,password:o}=r;o&&i("error","Password error: "+o.join(`
`)),a&&i("error","Username error: "+a.join(`
`))}var C=w('<main class="flex h-screen max-h-screen items-center justify-center bg-gray-50"><div class="m-10 flex rounded-xl border bg-white p-8 shadow"><div class="mr-8 space-y-2 border-r pr-8"><div class="flex h-16 items-center space-x-4"><!></div> <h1 class="text-2xl font-bold">Login</h1> <p>Register your account</p></div> <form class="my-3 flex flex-col space-y-4"><input type="text" placeholder="Username" name="username"> <input type="password" placeholder="Password" name="password"> <div class="ml-auto"><button class="rounded-full bg-red-600 p-2 px-5 pb-[0.44rem] text-white hover:bg-red-500" type="submit">Register</button></div></form></div></main>');function M(e,r){D(r,!1);function a(l){l.preventDefault(),P(l)}const o="rounded border bg-gray-50 p-2 px-3";A();var n=C(),p=s(n),c=s(p),d=s(c),x=s(d);F(x),t(d),v(4),t(c);var m=u(c,2),f=s(m);g(f,1,h(o));var b=u(f,2);g(b,1,h(o)),v(2),t(m),t(p),t(n),y("submit",m,a),_(e,n),j()}export{M as component};
