import{m as c}from"./vuex.cc7cb26e.js";import{l as d}from"./le5le-store.b40f9152.js";import{a,l as n,e as h,n as p}from"./app.879f8ead.js";import{i as g}from"./@chenfengyuan.dfd1ecb7.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.8b0d6caa.js";import"./@babel.49d8906a.js";import"./dayjs.b7f7bb8e.js";import"./localforage.ec5c12b8.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.d2045547.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var m=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"page-login"},[t("PageTitle",{attrs:{title:e.$L("\u767B\u5F55")}}),t("div",{staticClass:"login-body"},[t("div",{staticClass:"login-logo no-dark-content",class:{"can-click":e.needStartHome},on:{click:e.goHome}}),t("div",{staticClass:"login-box"},[t("div",{staticClass:"login-mode-switch"},[t("div",{staticClass:"login-mode-switch-box"},[t("ETooltip",{attrs:{disabled:e.$isEEUiApp||e.windowTouch,content:e.$L(e.loginMode=="qrcode"?"\u5E10\u53F7\u767B\u5F55":"\u626B\u7801\u767B\u5F55"),placement:"left"}},[t("span",{staticClass:"login-mode-switch-icon",on:{click:e.switchLoginMode}},[e.loginMode=="qrcode"?t("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-icon":"PcOutlined"}},[t("path",{attrs:{d:"M23 16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12ZM21 4H3v9h18V4ZM3 15v1h18v-1H3Zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z",fill:"currentColor"}})]):t("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-icon":"QrOutlined"}},[t("path",{attrs:{d:"M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1Z",fill:"currentColor"}}),t("path",{attrs:{d:"M4.5 2.5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2h-7Zm0 2h7v7h-7v-7ZM11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm0 3.5a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-7.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm3.5 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM15 17c0-1.1.9-2 2-2h2.5c1.1 0 2 .9 2 2v2.5c0 1.1-.9 2-2 2H17c-1.1 0-2-.9-2-2V17Zm4.5 0H17v2.5h2.5V17Zm-15-2c-1.1 0-2 .9-2 2v2.5c0 1.1.9 2 2 2H7c1.1 0 2-.9 2-2V17c0-1.1-.9-2-2-2H4.5Zm0 2H7v2.5H4.5V17ZM15 4.5c0-1.1.9-2 2-2h2.5c1.1 0 2 .9 2 2V7c0 1.1-.9 2-2 2H17c-1.1 0-2-.9-2-2V4.5Zm4.5 0H17V7h2.5V4.5Z",fill:"currentColor"}})])])])],1)]),t("div",{staticClass:"login-title"},[e._v(e._s(e.welcomeTitle))]),t("div",{staticClass:"login-subtitle"},[e._v(e._s(e.$L(e.subTitle)))]),t("transition",{attrs:{name:"login-mode"}},[e.loginMode=="qrcode"?t("div",{staticClass:"login-qrcode",on:{click:e.qrcodeRefresh}},[t("VueQrcode",{attrs:{value:e.qrcodeUrl,options:{width:200,margin:2}}})],1):e._e()]),t("transition",{attrs:{name:"login-mode"}},[e.loginMode=="access"?t("div",{staticClass:"login-access"},[e.$isSoftware&&e.cacheServerUrl?t("Input",{attrs:{value:e.$A.getDomain(e.cacheServerUrl),prefix:"ios-globe-outline",size:"large",readonly:"",clearable:""},on:{"on-clear":function(i){return e.setServerUrl("")}}}):e._e(),t("Input",{ref:"email",attrs:{prefix:"ios-mail-outline",placeholder:e.$L("\u8F93\u5165\u60A8\u7684\u7535\u5B50\u90AE\u4EF6"),type:"email",size:"large",clearable:""},on:{"on-enter":e.onLogin,"on-blur":e.onBlur},model:{value:e.email,callback:function(i){e.email=i},expression:"email"}}),t("Input",{ref:"password",attrs:{prefix:"ios-lock-outline",placeholder:e.$L("\u8F93\u5165\u60A8\u7684\u5BC6\u7801"),type:"password",size:"large",clearable:""},on:{"on-enter":e.onLogin},model:{value:e.password,callback:function(i){e.password=i},expression:"password"}}),e.loginType=="reg"?t("Input",{ref:"password2",attrs:{prefix:"ios-lock-outline",placeholder:e.$L("\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"),type:"password",size:"large",clearable:""},on:{"on-enter":e.onLogin},model:{value:e.password2,callback:function(i){e.password2=i},expression:"password2"}}):e._e(),e.loginType=="reg"&&e.needInvite?t("Input",{ref:"invite",staticClass:"login-code",attrs:{placeholder:e.$L("\u8BF7\u8F93\u5165\u6CE8\u518C\u9080\u8BF7\u7801"),type:"text",size:"large",clearable:""},on:{"on-enter":e.onLogin},model:{value:e.invite,callback:function(i){e.invite=i},expression:"invite"}},[t("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("\xA0"+e._s(e.$L("\u9080\u8BF7\u7801"))+"\xA0")])]):e._e(),e.loginType=="login"&&e.codeNeed?t("Input",{ref:"code",staticClass:"login-code",attrs:{placeholder:e.$L("\u8F93\u5165\u56FE\u5F62\u9A8C\u8BC1\u7801"),type:"text",size:"large",clearable:""},on:{"on-enter":e.onLogin},model:{value:e.code,callback:function(i){e.code=i},expression:"code"}},[t("Icon",{staticClass:"login-icon",attrs:{slot:"prepend",type:"ios-checkmark-circle-outline"},slot:"prepend"}),t("div",{staticClass:"login-code-end",attrs:{slot:"append"},on:{click:e.refreshCode},slot:"append"},[e.codeLoad>0?t("div",{staticClass:"code-load"},[t("Loading")],1):e.codeUrl==="error"?t("span",{staticClass:"code-error"},[e._v(e._s(e.$L("\u52A0\u8F7D\u5931\u8D25")))]):t("img",{attrs:{src:e.codeUrl}})])],1):e._e(),t("Button",{attrs:{type:"primary",loading:e.loadIng>0||e.loginJump,size:"large",long:""},on:{click:e.onLogin}},[e._v(e._s(e.$L(e.loginText)))]),e.loginType=="reg"?t("div",{staticClass:"login-switch"},[e._v(e._s(e.$L("\u5DF2\u7ECF\u6709\u5E10\u53F7\uFF1F"))+" "),t("a",{attrs:{href:"javascript:void(0)"},on:{click:function(i){e.loginType="login"}}},[e._v(e._s(e.$L("\u767B\u5F55\u5E10\u53F7")))])]):t("div",{staticClass:"login-switch"},[e._v(e._s(e.$L("\u8FD8\u6CA1\u6709\u5E10\u53F7\uFF1F"))+" "),t("a",{attrs:{href:"javascript:void(0)"},on:{click:function(i){e.loginType="reg"}}},[e._v(e._s(e.$L("\u6CE8\u518C\u5E10\u53F7")))])])],1):e._e()])],1),t("div",{staticClass:"login-bottom"},[t("Dropdown",{attrs:{trigger:"click",placement:"bottom-start"}},[t("div",{staticClass:"login-setting"},[e._v(" "+e._s(e.$L("\u8BBE\u7F6E"))+" "),t("i",{staticClass:"taskfont"},[e._v("\uE689")])]),t("DropdownMenu",{staticClass:"login-setting-menu",attrs:{slot:"list"},slot:"list"},[t("Dropdown",{attrs:{placement:"right-start",transfer:""},on:{"on-click":e.setTheme}},[t("DropdownItem",[t("div",{staticClass:"login-setting-item"},[e._v(" "+e._s(e.$L("\u4E3B\u9898\u76AE\u80A4"))+" "),t("Icon",{attrs:{type:"ios-arrow-forward"}})],1)]),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},e._l(e.themeList,function(i,o){return t("DropdownItem",{key:o,attrs:{name:i.value,selected:e.themeConf===i.value}},[e._v(e._s(e.$L(i.name)))])}),1)],1),t("Dropdown",{attrs:{placement:"right-start",transfer:""},on:{"on-click":e.onLanguage}},[t("DropdownItem",{attrs:{divided:""}},[t("div",{staticClass:"login-setting-item"},[e._v(" "+e._s(e.currentLanguage)+" "),t("Icon",{attrs:{type:"ios-arrow-forward"}})],1)]),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},e._l(e.languageList,function(i,o){return t("DropdownItem",{key:o,attrs:{name:o,selected:e.languageName===o}},[e._v(e._s(i))])}),1)],1)],1)],1),t("div",{staticClass:"login-forgot"},[e._v(e._s(e.$L("\u5FD8\u8BB0\u5BC6\u7801\u4E86\uFF1F"))+" "),t("a",{attrs:{href:"javascript:void(0)"},on:{click:e.forgotPassword}},[e._v(e._s(e.$L("\u91CD\u7F6E\u5BC6\u7801")))])])],1)]),t("Modal",{attrs:{title:e.$L("\u9690\u79C1\u534F\u8BAE"),"mask-closable":!1},model:{value:e.privacyShow,callback:function(i){e.privacyShow=i},expression:"privacyShow"}},[t("div",{staticClass:"privacy-content"},[t("div",[e._v(e._s(e.$L("\u6B22\u8FCE\u4F7F\u7528\u672C\u8F6F\u4EF6\uFF01")))]),t("p",[e._v(e._s(e.$L("\u5728\u60A8\u4F7F\u7528\u672C\u8F6F\u4EF6\u524D\uFF0C\u8BF7\u60A8\u8BA4\u771F\u9605\u8BFB\u5E76\u4E86\u89E3\u76F8\u5E94\u7684"))),t("a",{attrs:{target:"_blank",href:e.$A.apiUrl("privacy")}},[e._v("\u300A"+e._s(e.$L("\u9690\u79C1\u653F\u7B56"))+"\u300B")]),e._v(", "+e._s(e.$L("\u4EE5\u4E86\u89E3\u6211\u4EEC\u7684\u670D\u52A1\u5185\u5BB9\u548C\u60A8\u76F8\u5173\u4E2A\u4EBA\u4FE1\u606F\u7684\u5904\u7406\u89C4\u5219\u3002"))+e._s(e.$L("\u6211\u4EEC\u5C06\u4E25\u683C\u7684\u6309\u7167\u9690\u79C1\u670D\u52A1\u534F\u8BAE\u4E3A\u60A8\u63D0\u4F9B\u670D\u52A1\uFF0C\u4FDD\u62A4\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002")))])]),t("div",{staticClass:"adaption",attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"default"},on:{click:function(i){return e.onPrivacy(!1)}}},[e._v(e._s(e.$L("\u4E0D\u540C\u610F")))]),t("Button",{attrs:{type:"primary"},on:{click:function(i){return e.onPrivacy(!0)}}},[e._v(e._s(e.$L("\u540C\u610F")))])],1)])],1)},u=[];const v={components:{VueQrcode:g},data(){return{loadIng:0,languageList:a,languageName:n,qrcodeVal:"",qrcodeTimer:null,qrcodeLoad:!1,codeNeed:!1,codeLoad:0,codeKey:"",codeUrl:"",loginMode:"access",loginType:"login",loginJump:!1,email:"",password:"",password2:"",code:"",invite:"",needStartHome:!1,needInvite:!1,subscribe:null,privacyShow:!1}},async mounted(){this.privacyShow=!!this.$isEEUiApp&&await $A.IDBString("cachePrivacyShow")!=="no",this.email=await $A.IDBString("cacheLoginEmail")||"",this.$isSoftware?this.chackServerUrl().catch(e=>{}):this.setServerUrl("").catch(e=>{}),this.qrcodeTimer=setInterval(this.qrcodeStatus,2e3),this.subscribe=d.Store.subscribe("useSSOLogin",()=>{this.inputServerUrl()})},beforeDestroy(){clearInterval(this.qrcodeTimer),this.subscribe&&(this.subscribe.unsubscribe(),this.subscribe=null)},activated(){this.loginType=this.$route.query.type==="reg"?"reg":"login",this.getDemoAccount(),this.getNeedStartHome(),this.$Electron&&(this.$Electron.sendMessage("webTabDestroyAll"),this.$Electron.sendMessage("childWindowDestroyAll"))},deactivated(){this.loginJump=!1,this.password="",this.password2="",this.code="",this.invite=""},computed:{...c(["cacheServerUrl","themeConf","themeList"]),currentLanguage(){return a[n]||"Language"},welcomeTitle(){if(this.loginMode=="qrcode")return this.$L("\u626B\u7801\u767B\u5F55");const e=window.systemInfo.title||"DooTask";return"Welcome "+e},subTitle(){const e=window.systemInfo.title||"DooTask";return this.loginMode=="qrcode"?this.$L(`\u8BF7\u4F7F\u7528${e}\u79FB\u52A8\u7AEF\u626B\u63CF\u4E8C\u7EF4\u7801\u3002`):this.loginType=="reg"?this.$L("\u8F93\u5165\u60A8\u7684\u4FE1\u606F\u4EE5\u521B\u5EFA\u5E10\u6237\u3002"):this.$L("\u8F93\u5165\u60A8\u7684\u51ED\u8BC1\u4EE5\u8BBF\u95EE\u60A8\u7684\u5E10\u6237\u3002")},loginText(){let e=this.loginType=="login"?"\u767B\u5F55":"\u6CE8\u518C";return this.loginJump&&(e+="\u6210\u529F..."),e},qrcodeUrl(){return $A.mainUrl("login?qrcode="+this.qrcodeVal)}},watch:{$route({query:e}){e.type=="reg"&&this.$nextTick(()=>{this.loginType="reg"})},loginMode(){this.qrcodeRefresh()},loginType(e){e=="reg"&&this.getNeedInvite()}},methods:{goHome(){this.needStartHome&&this.goForward("index")},setTheme(e){this.$store.dispatch("setTheme",e)},getDemoAccount(){this.isNotServer()||this.$store.dispatch("call",{url:"system/demo"}).then(({data:e})=>{e.account&&(this.email=e.account,this.password=e.password)}).catch(e=>{})},getNeedStartHome(){this.isNotServer()||this.$store.dispatch("needHome").then(e=>{this.needStartHome=!0}).catch(e=>{this.needStartHome=!1})},getNeedInvite(){this.$store.dispatch("call",{url:"users/reg/needinvite"}).then(({data:e})=>{this.needInvite=!!e.need}).catch(e=>{this.needInvite=!1})},switchLoginMode(){this.chackServerUrl(!0).then(()=>{this.loginMode==="qrcode"?this.loginMode="access":this.loginMode="qrcode"})},qrcodeRefresh(){this.loginMode=="qrcode"&&(this.qrcodeVal=$A.randomString(32))},qrcodeStatus(){this.$route.name!=="login"||this.loginMode!="qrcode"||this.qrcodeLoad||(this.qrcodeLoad=!0,this.$store.dispatch("call",{url:"users/login/qrcode?code="+this.qrcodeVal}).then(({data:e})=>{this.$store.dispatch("handleClearCache",e).then(this.goNext)}).catch(e=>{}).finally(e=>{this.qrcodeLoad=!1}))},forgotPassword(){$A.modalWarning("\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\uFF01")},refreshCode(){this.codeLoad>0||(setTimeout(e=>{this.codeLoad++},600),this.$store.dispatch("call",{url:"users/login/codejson"}).then(({data:e})=>{this.codeKey=e.key,this.codeUrl=e.img}).catch(e=>{this.codeUrl="error"}).finally(e=>{this.codeLoad--}))},inputServerUrl(){if(this.privacyShow)return;let e=$A.rightDelete(this.cacheServerUrl,"/api/");e=$A.leftDelete(e,"http://"),$A.modalInput({title:"\u4F7F\u7528 SSO \u767B\u5F55",value:e,placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u5730\u5740",onOk:s=>s?this.inputServerChack($A.trim(s)):"\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u5730\u5740"})},inputServerChack(e){return new Promise((s,t)=>{let i=e;/\/api\/$/.test(i)||(i=i+($A.rightExists(i,"/")?"api/":"/api/")),/^https*:\/\//i.test(i)||(i=`https://${i}`),this.$store.dispatch("call",{url:`${i}system/setting`,checkNetwork:!1}).then(async({data:o})=>{typeof o.server_version=="undefined"&&typeof o.all_group_mute=="undefined"?t(`\u670D\u52A1\u5668\uFF08${$A.getDomain(e)}\uFF09\u7248\u672C\u8FC7\u4F4E`):(await this.setServerUrl(i),s())}).catch(({ret:o,msg:r})=>{if(o===-1001){if(!/^https*:\/\//i.test(e)){this.inputServerChack(`http://${e}`).then(s).catch(t);return}r="\u670D\u52A1\u5668\u5730\u5740\u65E0\u6548"}t(r)})})},chackServerUrl(e){return new Promise((s,t)=>{this.isNotServer()?(this.inputServerUrl(),e===!0&&this.$nextTick(i=>$A.messageWarning("\u8BF7\u8BBE\u7F6E\u670D\u52A1\u5668")),t()):s()})},async setServerUrl(e){await $A.IDBSet("cachePrivacyShow",e?"no":"yes"),e!=this.cacheServerUrl&&(await $A.IDBSet("cacheServerUrl",e),$A.reloadUrl())},isNotServer(){let e=$A.getDomain(window.systemInfo.apiUrl);return this.$isSoftware&&(e==""||e=="public")},onBlur(){if(this.loginType!="login"||!this.email){this.codeNeed=!1;return}this.loadIng++,this.$store.dispatch("call",{url:"users/login/needcode",data:{email:this.email}}).then(()=>{this.refreshCode(),this.codeNeed=!0}).catch(e=>{this.codeNeed=!1}).finally(e=>{this.loadIng--})},onPrivacy(e){e?(this.privacyShow=!1,this.chackServerUrl().catch(s=>{})):$A.eeuiAppGoDesktop()},onLogin(){this.chackServerUrl(!0).then(()=>{if(this.email=$A.trim(this.email),this.password=$A.trim(this.password),this.password2=$A.trim(this.password2),this.code=$A.trim(this.code),this.invite=$A.trim(this.invite),!$A.isEmail(this.email)){$A.messageWarning("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740"),this.$refs.email.focus();return}if(!this.password){$A.messageWarning("\u8BF7\u8F93\u5165\u5BC6\u7801"),this.$refs.password.focus();return}if(this.loginType=="reg"&&this.password!=this.password2){$A.messageWarning("\u786E\u8BA4\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"),this.$refs.password2.focus();return}this.loadIng++,this.$store.dispatch("call",{url:"users/login",data:{type:this.loginType,email:this.email,password:this.password,code:this.code,code_key:this.codeKey,invite:this.invite}}).then(({data:e})=>{$A.IDBSave("cacheLoginEmail",this.email),this.codeNeed=!1,this.loadIng++,this.$store.dispatch("handleClearCache",e).then(this.goNext).finally(s=>{this.loadIng--})}).catch(({data:e,msg:s})=>{e.code==="email"?(this.loginType="login",$A.modalWarning(s)):$A.modalError({content:s,onOk:t=>{var i;(i=this.$refs.code)==null||i.focus()}}),e.code==="need"&&(this.refreshCode(),this.codeNeed=!0)}).finally(e=>{this.loadIng--})})},goNext(){this.loginJump=!0;const e=decodeURIComponent($A.getObject(this.$route.query,"from"));e?$A.IDBSet("clearCache","login").then(s=>{window.location.replace(e)}):this.goForward({name:"manage-dashboard"},!0)},onLanguage(e){h(e)}}},l={};var f=p(v,m,u,!1,$,null,null,null);function $(e){for(let s in l)this[s]=l[s]}var ie=function(){return f.exports}();export{ie as default};
