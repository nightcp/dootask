import{m as r}from"./vuex.cc7cb26e.js";import{n as a}from"./app.013f399e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.befa8c62.js";import"./@babel.49d8906a.js";import"./dayjs.9becbe0b.js";import"./localforage.c153f039.js";import"./markdown-it.f75bb98e.js";import"./entities.48a44fec.js";import"./linkify-it.c76d7176.js";import"./punycode.js.4b3f125a.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.d2045547.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var s=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"page-invite"},[i("PageTitle",{attrs:{title:t.$L("\u52A0\u5165\u9879\u76EE")}}),t.loadIng>0?i("div",{staticClass:"invite-load"},[i("Loading")],1):i("div",{staticClass:"invite-warp"},[t.project.id>0?i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.project.name))]),t.project.desc?i("div",{staticClass:"invite-desc"},[t._v(t._s(t.project.desc))]):i("div",[t._v(t._s(t.$L("\u6682\u65E0\u4ECB\u7ECD")))]),i("div",{staticClass:"invite-footer"},[t.already?i("Button",{attrs:{type:"success",icon:"ios-checkmark-circle-outline"},on:{click:t.goProject}},[t._v(t._s(t.$L("\u5DF2\u52A0\u5165")))]):i("Button",{attrs:{type:"primary",loading:t.joinLoad>0},on:{click:t.joinProject}},[t._v(t._s(t.$L("\u52A0\u5165\u9879\u76EE")))])],1)]):i("Card",[i("p",[t._v(t._s(t.$L("\u9080\u8BF7\u5730\u5740\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u5220\u9664\uFF01")))])])],1)],1)},n=[];const c={data(){return{loadIng:0,joinLoad:0,already:!1,project:{}}},computed:{...r(["dialogId","windowPortrait"])},watch:{$route:{handler(t){if(t.name=="manage-project-invite"){if(!$A.Electron&&!$A.isEEUiApp&&navigator.userAgent.indexOf("MicroMessenger")===-1&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))try{/Android/i.test(navigator.userAgent)?window.open("dootask://"+t.fullPath):window.location.href="dootask://"+t.fullPath}catch{}this.windowPortrait&&this.dialogId>0&&this.$store.dispatch("openDialog",0),this.code=t.query?t.query.code:"",this.getData()}},immediate:!0}},methods:{getData(){this.loadIng++,this.$store.dispatch("call",{url:"project/invite/info",data:{code:this.code}}).then(({data:t})=>{this.already=t.already,this.project=t.project}).catch(()=>{this.project={}}).finally(t=>{this.loadIng--})},joinProject(){this.joinLoad++,this.$store.dispatch("call",{url:"project/invite/join",data:{code:this.code}}).then(({data:t})=>{this.already=t.already,this.project=t.project,this.goProject()}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.joinLoad--})},goProject(){this.$nextTick(()=>{$A.goForward({name:"manage-project",params:{projectId:this.project.id}})})}}},e={};var p=a(c,s,n,!1,d,"935768d6",null,null);function d(t){for(let o in e)this[o]=e[o]}var J=function(){return p.exports}();export{J as default};
