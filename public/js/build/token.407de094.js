import{n as i}from"./app.013f399e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.befa8c62.js";import"./@babel.49d8906a.js";import"./dayjs.9becbe0b.js";import"./localforage.c153f039.js";import"./markdown-it.f75bb98e.js";import"./entities.48a44fec.js";import"./linkify-it.c76d7176.js";import"./punycode.js.4b3f125a.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.d2045547.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var m=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"token-transfer"},[r("Loading")],1)},n=[];const p={mounted(){this.goNext1()},methods:{goNext1(){const t=$A.urlParameterAll();t.token&&this.$store.dispatch("call",{url:"users/info",header:{token:t.token}}).then(o=>{this.$store.dispatch("saveUserInfo",o.data),this.goNext2()}).catch(o=>{this.goForward({name:"login"},!0)})},goNext2(){let t=decodeURIComponent($A.getObject(this.$route.query,"from"));t?window.location.replace(t):this.goForward({name:"manage-dashboard"},!0)}}},e={};var a=i(p,m,n,!1,s,"5df16c44",null,null);function s(t){for(let o in e)this[o]=e[o]}var H=function(){return a.exports}();export{H as default};
