import{a7 as t,a8 as o,a9 as n}from"./BHJITWWH.js";const r="darkModeEnable";function s(){const e=localStorage.getItem(r);return e!==null?e==="true":(window==null?void 0:window.matchMedia)===void 0?!1:!!window.matchMedia("(prefers-color-scheme: dark)").matches}const a=t(s()),i=o(a);function l(){const e=!n(a);localStorage.setItem(r,String(e)),a.set(e)}export{i,l as t};
