const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/Dl7HPaJs.js","../chunks/BoHy3GCG.js","../chunks/BHJITWWH.js","../chunks/BCv-PhoZ.js","../chunks/DD66ZWTu.js","../chunks/B_iCwUiu.js","../chunks/09-kDerc.js","../chunks/1ww8kltg.js","../chunks/sEuScinW.js","../chunks/C-2eXo6w.js","../assets/index.BNtHauYy.css"])))=>i.map(i=>d[i]);
import{e as _e}from"../chunks/DNSHY1Ls.js";import{i as se,A as he}from"../chunks/D-zHGvuz.js";import{c as we,M as ye}from"../chunks/BnXywDYA.js";import{t as k,e as ae,a as y,d as ie,s as xe}from"../chunks/BCv-PhoZ.js";import{p as X,c as o,r as a,s as m,a as H,t as A,J as u,a1 as ke,af as R,ag as x,a5 as re,f as Ce,at as De}from"../chunks/BHJITWWH.js";import{s as S,h as Ne}from"../chunks/09-kDerc.js";import{s as f,c as h}from"../chunks/1ww8kltg.js";import"../chunks/B_iCwUiu.js";import{t as p}from"../chunks/AdmevC4f.js";import{p as te,i as G,a as U,s as Ee,b as Pe}from"../chunks/DD66ZWTu.js";import{i as ze}from"../chunks/sEuScinW.js";import{g as ne}from"../chunks/Danp5lzO.js";import{I as V,a as je,T as Ie,b as de,X as Le}from"../chunks/BYcPjXOD.js";import{i as Ae,b as Se,u as Be}from"../chunks/C3JyOOO9.js";import{_ as $e}from"../chunks/BoHy3GCG.js";import{a as Me}from"../chunks/Mi9Mf9hk.js";import{c as Te}from"../chunks/CguKUr5H.js";import{t as q,a as le,f as oe}from"../chunks/BN3J5Hla.js";import{g as Oe,l as Fe}from"../chunks/Cj-Uaf48.js";import{a as Re}from"../chunks/D08HmYVE.js";import{e as Ue,i as Ve}from"../chunks/yNc1Uh6E.js";import{L as Xe}from"../chunks/mSpJNEW8.js";const He=async({params:i})=>{var t;const{id:e}=i;try{const[r,d]=await Promise.all([se.get(`problems/${e}`),we()]);return{problem:r.data,carta:d}}catch(r){throw r instanceof he&&((t=r.response)==null?void 0:t.status)===404&&_e(404,`Problem with id "${e}" not found.`),r}},$r=Object.freeze(Object.defineProperty({__proto__:null,load:He},Symbol.toStringTag,{value:"Module"}));var Je=k('<div class="flex h-full space-x-2"><button title="Edit problem"><!></button> <button title="Delete Problem"><!></button></div>');function We(i,e){X(e,!1);let t=te(e,"problemId",8);async function r(){await ne(`/admin/edit/${t()}`)}async function d(){}const l=p("flex w-[2.3rem] items-center justify-center rounded","transition-colors duration-200","dark:border-gray-500"),c=p(l,"border bg-yellow-50 hover:bg-yellow-100","dark:bg-yellow-900 dark:hover:bg-yellow-800"),C=p(l,"bg-red-500 text-white hover:bg-red-600","dark:border dark:bg-red-800 dark:hover:bg-red-700");ze();var v=Je(),n=o(v);f(n,1,h(c));var _=o(n);V(_,{src:je,class:"size-5"}),a(n);var b=m(n,2);f(b,1,h(C));var D=o(b);V(D,{src:Ie,class:"size-5"}),a(b),a(v),ae("click",n,r),ae("click",b,d),y(i,v),H()}async function qe(i,e,t){try{if(t===void 0)throw new Error("Please choose a language to continue");if(!await Ae())throw new Error("Please sign in to perform this actions");const[r,d]=await Promise.all([Oe(t.compiler),Se()]),l={problem:i,language:t.compiler,version:r,source:e},c=await se.post("submissions/",l,d);await ne(`/submissions/${c.data.viewId}`)}catch(r){if(!(r instanceof Error))throw r;Re({type:"error",text:r.message,removeAfter:4e3,position:"bottom-center"})}}function Ge(i,e){e(!e())}var Ke=k('<span class="text-gray-600">Choose a language.</span>'),Qe=(i,e,t)=>e(u(t)),Ye=k('<button><p class="ms-1"> </p></button>'),Ze=k("<div></div>"),er=k('<div class="relative flex grow"><button><!> <div><!></div></button> <!></div>');function rr(i,e){X(e,!0);let t=te(e,"showDropDown",15),r=te(e,"targetLanguage",15);function d(s){t(!1),r(s)}const l=p("flex w-[190px] items-center justify-between rounded border px-2","transition-colors duration-200","bg-gray-50 hover:bg-gray-100","dark:border-gray-500 dark:bg-gray-900 dark:hover:bg-gray-800"),c=p("absolute top-14 flex w-full flex-col rounded-lg border bg-white p-2 shadow","dark:border-gray-500 dark:bg-gray-900"),C=p("m-[1px] rounded text-start hover:bg-gray-100","dark:hover:bg-gray-800");var v=er(),n=o(v);f(n,1,h(l)),n.__click=[Ge,t];var _=o(n);{var b=s=>{var g=Ke();y(s,g)},D=s=>{var g=xe();A(()=>S(g,r().name)),y(s,g)};G(_,s=>{r()===void 0?s(b):s(D,!1)})}var N=m(_,2);let E;var j=o(N);V(j,{src:de}),a(N),a(n);var L=m(n,2);{var P=s=>{var g=Ze();f(g,1,h(c)),Ue(g,21,()=>Fe,Ve,(K,B)=>{var I=Ye();f(I,1,h(C)),I.__click=[Qe,d,B];var $=o(I),Q=o($,!0);a($),a(I),A(()=>S(Q,u(B).name)),y(K,I)}),a(g),q(3,g,()=>le,()=>({duration:200,y:-20})),y(s,g)};G(L,s=>{t()&&s(P)})}a(v),A(s=>E=f(N,1,"ml-1 size-5 duration-200",null,E,s),[()=>({"rotate-180":t()})]),y(i,v),H()}ie(["click"]);function tr(i,e,t){x(e,!u(e)),x(t,!1)}async function ar(i,e,t,r){qe(e.problem,u(t),u(r))}async function or(i,e,t,r,d){const l=i.target.files.item(0);x(e,U(await l.text())),x(t,U(l.name)),x(r,!1),x(d,!0)}var sr=(i,e)=>x(e,!1),ir=k('<div class="h-full w-full"><!></div>'),nr=k('<div class="flex h-full w-full items-center justify-center"><!></div>'),dr=k('<div dir="rtl"><div class="m-1 flex items-center justify-between" dir="ltr"><p class="ml-2 truncate"> </p> <button><!></button></div> <div dir="ltr" class="h-full w-full overflow-hidden border-t border-inherit"><!></div></div>'),lr=k('<div><div class="content flex grow space-x-2"><!> <button title="Toggle editor"><div><!></div></button> <label for="file-uploader">Choose a file.</label> <button type="submit">Submit</button></div> <input type="file" id="file-uploader" class="svelte-1kuhunj"> <!></div>');function cr(i,e){X(e,!0);let t=R(!1),r=R(!1),d=R(""),l=R(void 0),c=R(void 0);const C=re(()=>{var w;return(w=u(c))==null?void 0:w.compiler});ke(()=>{u(t)&&x(r,!1)});const v="select-none transition-colors duration-200 dark:border-gray-500",n=p(v,"rounded bg-red-500 px-2 text-white hover:bg-red-600","dark:border dark:bg-red-800 dark:hover:bg-red-700"),_=p(v,"justify-center rounded border bg-white px-[0.4rem] hover:bg-gray-50","dark:bg-gray-800 dark:hover:bg-gray-700"),b=p(v,"rounded p-[0.1rem] hover:bg-red-500 hover:text-white","dark:hover:bg-red-700"),D=p("flex flex-col","z-[100] h-[300px] min-h-[100px] w-full min-w-[150px] resize","rounded-lg rounded-bl-none","absolute right-0 top-14","overflow-hidden border bg-white shadow","dark:bg-gray-900 dark:text-white dark:border-gray-500"),N=p("min-w-fit cursor-pointer rounded border p-1 px-2","border-red-200 bg-red-100 hover:bg-red-200","dark:border-gray-500 dark:bg-red-950 dark:hover:bg-red-900");var E=lr(),j=o(E),L=o(j);rr(L,{get showDropDown(){return u(t)},set showDropDown(w){x(t,U(w))},get targetLanguage(){return u(c)},set targetLanguage(w){x(c,U(w))}});var P=m(L,2);f(P,1,h(_)),P.__click=[tr,r,t];var s=o(P);let g;var K=o(s);V(K,{src:de}),a(s),a(P);var B=m(P,2);f(B,1,h(N));var I=m(B,2);f(I,1,h(n)),I.__click=[ar,e,d,c],a(j);var $=m(j,2);$.__change=[or,d,l,t,r];var Q=m($,2);{var ce=w=>{var z=dr();f(z,1,h(D));var M=o(z),Y=o(M),ve=o(Y);a(Y);var J=m(Y,2);f(J,1,h(b)),J.__click=[sr,r];var ue=o(J);V(ue,{src:Le,class:"size-6"}),a(J),a(M);var T=m(M,2),ge=o(T);Me(ge,()=>$e(()=>import("../chunks/Dl7HPaJs.js").then(O=>O.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),O=>{var F=nr(),Z=o(F);Xe(Z,{class:"size-10"}),a(F),y(O,F)},(O,F)=>{var Z=re(()=>{var{default:ee}=u(F);return{CodeEditor:ee}}),me=re(()=>u(Z).CodeEditor),W=ir(),fe=o(W);Te(fe,()=>u(me),(ee,be)=>{be(ee,{get language(){return u(C)},get source(){return u(d)},set source(pe){x(d,U(pe))}})}),a(W),q(3,W,()=>oe,()=>({duration:200})),y(O,W)}),a(T),a(z),A(()=>{S(ve,`File name: ${u(l)||"[unknown]"}`),M.dir=M.dir,T.dir=T.dir,z.dir=z.dir}),q(3,T,()=>oe,()=>({duration:200})),q(3,z,()=>le,()=>({duration:200,y:-20})),y(w,z)};G(Q,w=>{u(r)&&w(ce)})}a(E),A((w,z)=>{f(E,1,w),g=f(s,1,"size-5 duration-200",null,g,z)},[()=>h(p(e.class,"relative")),()=>({"rotate-180":u(r)})]),y(i,E),H()}ie(["click","change"]);var vr=k('<header><div class="mt-2 flex grow items-center space-x-5"><div class="flex grow justify-between text-lg"><p><span class="font-bold"> </span> </p> <p> </p></div> <!> <!></div></header>');function ur(i,e){X(e,!0);const[t,r]=Ee(),d=()=>Pe(Be,"$userInfo",t),l=p("bg-white dark:border-gray-500 dark:bg-gray-900 dark:text-white","sticky top-0 z-30 flex border-b px-10 py-3 shadow");var c=vr();f(c,1,h(l));var C=o(c),v=o(C),n=o(v),_=o(n),b=o(_,!0);a(_);var D=m(_);a(n);var N=m(n,2),E=o(N);a(N),a(v);var j=m(v,2);{var L=s=>{We(s,{get problemId(){return e.id}})};G(j,s=>{var g;(g=d())!=null&&g.is_staff&&s(L)})}var P=m(j,2);cr(P,{get problem(){return e.id},class:"w-fit"}),a(C),a(c),A(()=>{S(b,e.id),S(D,` - ${e.title??""}`),S(E,`Level: ${e.level??""}`)}),y(i,c),H(),r()}var gr=k('<!> <article><div class="prose dark:prose-invert m-[1.25rem] max-w-full text-justify"><!></div></article>',1);function Mr(i,e){X(e,!0);const{carta:t,problem:r}=e.data,{id:d,title:l,description:c,level:C}=r,v=p("m-10 grow rounded-lg border bg-white shadow","dark:border-gray-500 dark:bg-gray-800 dark:shadow-none");var n=gr();Ne(E=>{De.title=`${d} - ${l}`});var _=Ce(n);ur(_,{id:d,title:l,level:C});var b=m(_,2);f(b,1,h(v));var D=o(b),N=o(D);ye(N,{carta:t,value:c}),a(D),a(b),y(i,n),H()}export{Mr as component,$r as universal};
