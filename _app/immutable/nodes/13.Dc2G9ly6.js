import{e as I}from"../chunks/DNSHY1Ls.js";import{i as J,A as L}from"../chunks/D-zHGvuz.js";import{t as N,a as T}from"../chunks/BCv-PhoZ.js";import{p as q,af as B,c as e,s as o,t as F,a as G,ag as H,J as K,r}from"../chunks/BHJITWWH.js";import{s as C}from"../chunks/09-kDerc.js";import{c as l,s as f}from"../chunks/1ww8kltg.js";import{a as S}from"../chunks/DD66ZWTu.js";import{t as v}from"../chunks/AdmevC4f.js";import{C as Q}from"../chunks/Dl7HPaJs.js";import{l as U}from"../chunks/Cj-Uaf48.js";const V=async({params:p})=>{var n;const{viewId:a}=p;try{return(await J.get(`submissions/${a}`)).data}catch(t){throw t instanceof L&&((n=t.response)==null?void 0:n.status)===404&&I(404,`Submission with id "${a}" not found.`),t}},it=Object.freeze(Object.defineProperty({__proto__:null,load:V},Symbol.toStringTag,{value:"Module"}));var W=N('<div class="m-10 space-y-5"><div><p></p> <p> </p> <p>Result: <span></span></p> <p> </p></div> <div><!></div></div>');function pt(p,a){q(a,!0);const{source:n,owner:t,judgeResult:d,language:x,version:$,summittedOn:k}=a.data,E=new Date(k),O=U.filter(({compiler:s})=>x===s)[0];function j(){return d==="AC"?"text-green-600":d==="CE"?"text-gray-600":"text-red-600"}const _=v("rounded-lg border bg-white shadow","dark:border-gray-500 dark:bg-gray-800 dark:bg-none dark:text-white");let b=B(S(n));var m=W(),i=e(m),w=e(i);w.textContent=`Submittor: ${t??""}`;var u=o(w,2),A=e(u);r(u);var c=o(u,2),h=o(e(c));h.textContent=d,r(c);var y=o(c,2),R=e(y);r(y),r(i);var g=o(i,2),M=e(g);Q(M,{language:x,get source(){return K(b)},set source(s){H(b,S(s))}}),r(g),r(m),F((s,P,z,D)=>{f(i,1,s),C(A,`Submitted on: ${P??""}`),f(h,1,z),C(R,`Language: ${O.name??""} - ${$??""}`),f(g,1,D)},[()=>l(v(_,"w-fit p-2 px-3")),()=>E.toString(),()=>l(j()),()=>l(v(_,"flex h-[500px] overflow-hidden"))]),T(p,m),G()}export{pt as component,it as universal};
