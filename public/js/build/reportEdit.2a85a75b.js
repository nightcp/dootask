import{R as o}from"./ReportEdit.f0f5c6a9.js";import{n as p}from"./app.9beb2442.js";import"./openpgp_hi.15f91b1d.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.d5285880.js";import"./@babel.49d8906a.js";import"./dayjs.2a69861a.js";import"./localforage.8bc29c2d.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./vuex.cc7cb26e.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.563cfadb.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"electron-report"},[e("PageTitle",{attrs:{title:t.title}}),e("ReportEdit",{attrs:{id:t.reportEditId},on:{saveSuccess:t.saveSuccess}})],1)},m=[];const n={components:{ReportEdit:o},data(){return{detail:{}}},computed:{reportEditId(){if(/^\d+$/.test(this.detail.id))return parseInt(this.detail.id);const{reportEditId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)},title(){return this.$L(this.reportEditId>0?"\u4FEE\u6539\u62A5\u544A":"\u65B0\u589E\u62A5\u544A")}},methods:{saveSuccess(t){this.detail=t,this.$isSubElectron&&($A.Electron.sendMessage("sendForwardMain",{channel:"reportSaveSuccess",data:t}),window.close())}}},i={};var a=p(n,s,m,!1,d,"807ce0ea",null,null);function d(t){for(let r in i)this[r]=i[r]}var U=function(){return a.exports}();export{U as default};
