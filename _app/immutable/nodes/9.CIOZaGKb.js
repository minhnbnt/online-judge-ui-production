import{d as A,t as k,a as u,c as U}from"../chunks/BCv-PhoZ.js";import{p as D,c as s,s as m,r,t as M,a as N,J as _,f as S,at as V,a5 as W}from"../chunks/BHJITWWH.js";import{s as J,h as X}from"../chunks/09-kDerc.js";import{a as Y}from"../chunks/Mi9Mf9hk.js";import{i as T,s as Z,b as tt}from"../chunks/DD66ZWTu.js";import{s as n,c as i}from"../chunks/1ww8kltg.js";import{t as et,f as rt}from"../chunks/BN3J5Hla.js";import{g as q}from"../chunks/Danp5lzO.js";import{I as at,P as ot}from"../chunks/BYcPjXOD.js";import{u as st}from"../chunks/C3JyOOO9.js";import{e as nt,i as it}from"../chunks/yNc1Uh6E.js";import{t as l}from"../chunks/AdmevC4f.js";import{f as lt}from"../chunks/BrP5ifZ5.js";import{L as dt}from"../chunks/mSpJNEW8.js";const ct=async({url:g})=>{const a=g.searchParams.get("page");let c=1;return a!==null&&(c=parseInt(a)),{activePage:c}},Mt=Object.freeze(Object.defineProperty({__proto__:null,load:ct},Symbol.toStringTag,{value:"Module"}));var vt=(g,a)=>q(`/problems/${a()}`),mt=k("<tr><td></td><td> </td><td> </td><td> </td></tr>"),gt=k('<div><table class="w-full table-fixed bg-white px-10 dark:bg-gray-900 dark:text-white"><thead class="bg-gray-50 font-bold dark:bg-gray-800"><tr><th>No.</th><th>ID</th><th>Title</th><th>Level</th></tr></thead><tbody></tbody></table></div>');function bt(g,a){D(a,!0);const c="dark:border-gray-500",d="p-2 px-4",$=l(c,"select-none border-t","transition-colors duration-200","even:bg-gray-50 hover:bg-blue-50","dark:even:bg-gray-800 dark:hover:bg-blue-950"),L=l("m-10 max-w-full overflow-hidden rounded-lg border bg-white shadow",c);var b=gt();n(b,1,i(L));var y=s(b),f=s(y),h=s(f),P=s(h),C=m(P),e=m(C,2);r(h),r(f);var t=m(f);nt(t,21,()=>a.problems,it,(o,v,x)=>{let p=()=>_(v).id,B=()=>_(v).title,E=()=>_(v).level;var w=mt();n(w,1,i($)),w.__click=[vt,p];var j=s(w);j.textContent=x+1;var I=m(j),F=s(I,!0);r(I);var z=m(I),G=s(z,!0);r(z);var O=m(z),H=s(O,!0);r(O),r(w),M((K,Q,R)=>{n(j,1,K),n(I,1,Q),J(F,p()),J(G,B()),n(O,1,R),J(H,E())},[()=>i(l(d,"text-center")),()=>i(l(d,"text-center")),()=>i(l(d,"text-center"))]),u(o,w)}),r(t),r(y),r(b),M((o,v,x)=>{n(P,1,o),n(C,1,v),n(e,1,x)},[()=>i(l(d,"w-[50px]")),()=>i(l(d,"w-[120px]")),()=>i(l(d,"w-[80px]"))]),u(g,b),N()}A(["click"]);var ft=k('<div class="m-10 flex h-12 justify-center"><!></div>'),pt=()=>q("/admin/create"),ut=k('<button title="Create new problem."><!></button>'),_t=k("<!> <!>",1);function St(g,a){D(a,!0);const[c,d]=Z(),$=()=>tt(st,"$userInfo",c);async function L(e){const{results:t}=await lt("/problems",e);return t}let b=W(()=>L(a.activePage));const y=l("absolute bottom-10 right-10 rounded-lg border bg-white p-3 shadow","dark:bg-gray-800 dark:text-white dark:border-gray-500");var f=_t();X(e=>{V.title="Online Judge"});var h=S(f);Y(h,()=>_(b),e=>{var t=ft(),o=s(t);dt(o,{class:"size-12"}),r(t),u(e,t)},(e,t)=>{var o=U(),v=S(o);{var x=p=>{bt(p,{get problems(){return _(t)}})};T(v,p=>{_(t).length>0&&p(x)})}u(e,o)});var P=m(h,2);{var C=e=>{var t=ut();t.__click=[pt],n(t,1,i(y));var o=s(t);at(o,{src:ot,class:"size-8"}),r(t),et(3,t,()=>rt,()=>({duration:200})),u(e,t)};T(P,e=>{var t;(t=$())!=null&&t.is_staff&&e(C)})}u(g,f),N(),d()}A(["click"]);export{St as component,Mt as universal};
