import{V as t,d as s,a,b as n,c as l,_ as u,e as _,v as c}from"./@kangc.0e27bf4b.js";import{P as v}from"./prismjs.e9e594e5.js";import{l as o,n as d}from"./app.9beb2442.js";import{p as f}from"./index.40a8e116.js";import"./@babel.49d8906a.js";import"./vue.c448ed56.js";import"./copy-to-clipboard.a53c061d.js";import"./toggle-selection.d2487283.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.d5285880.js";import"./dayjs.2a69861a.js";import"./localforage.8bc29c2d.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.563cfadb.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var h=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{staticClass:"vmpreview-wrapper",on:{click:e.handleClick}},[i("v-md-preview",{attrs:{text:e.value}})],1)},x=[];o==="zh"||o==="zh-CHT"?t.lang.use("zh-CN",s):t.lang.use("en-US",a);t.use(n());t.use(l());t.use(u());t.use(_());const w={mixins:[f],components:{[t.name]:t},created(){t.use(c,{Prism:v,extend(e){}})},methods:{handleClick({target:e}){if(e.nodeName==="IMG"){const r=[...this.$el.querySelectorAll("img").values()].map(p=>p.src);if(r.length===0)return;const i=Math.max(0,r.indexOf(e.src));this.$store.dispatch("previewImage",{index:i,list:r})}}}},m={};var g=d(w,h,x,!1,$,"6ef45f6c",null,null);function $(e){for(let r in m)this[r]=m[r]}var ne=function(){return g.exports}();export{ne as default};
