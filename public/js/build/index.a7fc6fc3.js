import{n,l as o}from"./app.b0dff2c2.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.bf5bd7d3.js";import"./@babel.49d8906a.js";import"./dayjs.a3409154.js";import"./localforage.d4780693.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.563cfadb.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div")},a=[];const m={data(){return{}},mounted(){if(/^https*:/i.test(window.location.protocol)){let t=null;if(this.$router.mode==="hash"?$A.stringLength(window.location.pathname)>2&&(t=`${window.location.origin}/#${window.location.pathname}${window.location.search}`):this.$router.mode==="history"&&$A.strExists(window.location.href,"/#/")&&(t=window.location.href.replace("/#/","/")),t)throw this.$store.dispatch("userUrl",t).then(i=>{window.location.href=i}),SyntaxError()}},activated(){this.start()},methods:{start(){if(this.$isSoftware){this.goNext();return}this.$store.dispatch("showSpinner",1e3),this.$store.dispatch("needHome").then(t=>{this.goIndex()}).catch(t=>{this.goNext()}).finally(t=>{this.$store.dispatch("hiddenSpinner")})},goIndex(){o==="zh"||o==="zh-CHT"?window.location.href=$A.mainUrl("site/zh/index.html"):window.location.href=$A.mainUrl("site/en/index.html")},goNext(){this.userId>0?this.goForward({name:"manage-dashboard"},!0):this.goForward({name:"login"},!0)}}},r={};var p=n(m,s,a,!1,h,null,null,null);function h(t){for(let i in r)this[i]=r[i]}var P=function(){return p.exports}();export{P as default};
