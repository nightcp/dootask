import{i as h,r as c,o as r,a as l}from"./element-sea.e89b014c.js";import{n as u}from"./app.013f399e.js";import"./vue.c448ed56.js";import"./@babel.49d8906a.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.befa8c62.js";import"./dayjs.9becbe0b.js";import"./localforage.c153f039.js";import"./markdown-it.f75bb98e.js";import"./entities.48a44fec.js";import"./linkify-it.c76d7176.js";import"./punycode.js.4b3f125a.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.d2045547.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";var f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{ref:"view",staticClass:"common-preview-image"},[t("div",{staticClass:"common-preview-view no-dark-content"},[e.isSingle?e._e():[t("div",{staticClass:"preview-view-prev",class:{"is-disabled":!e.infinite&&e.isFirst},on:{click:e.prev}},[t("i",{staticClass:"taskfont"},[e._v("\uE72D")])]),t("div",{staticClass:"preview-view-next",class:{"is-disabled":!e.infinite&&e.isLast},on:{click:e.next}},[t("i",{staticClass:"taskfont"},[e._v("\uE733")])])],t("div",{staticClass:"preview-view-actions"},[t("div",{staticClass:"actions-inner"},[t("i",{staticClass:"taskfont",on:{click:function(n){return e.handleActions("zoomOut")}}},[e._v("\uE7A2")]),t("i",{staticClass:"taskfont",on:{click:function(n){return e.handleActions("zoomIn")}}},[e._v("\uE79F")]),t("i",{staticClass:"actions-divider"}),t("i",{staticClass:"taskfont",domProps:{innerHTML:e._s(e.mode.icon)},on:{click:e.toggleMode}}),t("i",{staticClass:"actions-divider"}),t("i",{staticClass:"taskfont",on:{click:function(n){return e.handleActions("anticlocelise")}}},[e._v("\uE7A7")]),t("i",{staticClass:"taskfont",on:{click:function(n){return e.handleActions("clocelise")}}},[e._v("\uE7A6")])])]),t("div",{staticClass:"preview-view-canvas"},e._l(e.urlList,function(n,o){return o===e.index?t("img",{key:o,ref:"img",refInFor:!0,staticClass:"preview-view-img",style:e.imgStyle,attrs:{src:e.currentImg},on:{load:e.handleImgLoad,error:e.handleImgError,mousedown:e.handleMouseDown}}):e._e()}),0)],2)])},p=[];const a={CONTAIN:{name:"contain",icon:"&#xe79e;"},ORIGINAL:{name:"original",icon:"&#xe79d;"}},d=h()?"DOMMouseScroll":"mousewheel",v={props:{urlList:{type:Array,default:()=>[]},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!1},onSwitch:{type:Function,default:()=>{}}},data(){return{index:this.initialIndex,loading:!1,mode:a.CONTAIN,transform:{scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}},mounted(){this.deviceSupportInstall(),this.$refs.view.focus()},beforeDestroy(){this.deviceSupportUninstall()},computed:{isSingle(){return this.urlList.length<=1},isFirst(){return this.index===0},isLast(){return this.index===this.urlList.length-1},currentImg(){let e=this.urlList[this.index];return $A.isJson(e)&&(e=e.src),e},imgStyle(){const{scale:e,deg:s,offsetX:t,offsetY:n,enableTransition:o}=this.transform,i={transform:`scale(${e}) rotate(${s}deg)`,transition:o?"transform .3s":"","margin-left":`${t}px`,"margin-top":`${n}px`};return this.mode===a.CONTAIN&&(i.maxWidth=i.maxHeight="100%"),i}},watch:{index:{handler:function(e){this.reset(),this.onSwitch(e)}},initialIndex(e){this.index=e},currentImg(){this.$nextTick(e=>{this.$refs.img[0].complete||(this.loading=!0)})}},methods:{deviceSupportInstall(){this._keyDownHandler=e=>{switch(e.stopPropagation(),e.keyCode){case 32:this.toggleMode();break;case 37:this.prev();break;case 38:this.handleActions("zoomIn");break;case 39:this.next();break;case 40:this.handleActions("zoomOut");break}},this._mouseWheelHandler=c(e=>{(e.wheelDelta?e.wheelDelta:-e.detail)>0?this.handleActions("zoomIn",{zoomRate:.015,enableTransition:!1}):this.handleActions("zoomOut",{zoomRate:.015,enableTransition:!1})}),r(document,"keydown",this._keyDownHandler),r(document,d,this._mouseWheelHandler)},deviceSupportUninstall(){l(document,"keydown",this._keyDownHandler),l(document,d,this._mouseWheelHandler),this._keyDownHandler=null,this._mouseWheelHandler=null},handleImgLoad(e){this.loading=!1},handleImgError(e){this.loading=!1,e.target.alt="\u52A0\u8F7D\u5931\u8D25"},handleMouseDown(e){if(this.loading||e.button!==0)return;const{offsetX:s,offsetY:t}=this.transform,n=e.pageX,o=e.pageY;this._dragHandler=c(i=>{this.transform.offsetX=s+i.pageX-n,this.transform.offsetY=t+i.pageY-o}),r(document,"mousemove",this._dragHandler),r(document,"mouseup",i=>{l(document,"mousemove",this._dragHandler)}),e.preventDefault()},reset(){this.transform={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}},toggleMode(){if(this.loading)return;const e=Object.keys(a),n=(Object.values(a).indexOf(this.mode)+1)%e.length;this.mode=a[e[n]],this.reset()},prev(){if(this.isFirst&&!this.infinite)return;const e=this.urlList.length;this.index=(this.index-1+e)%e},next(){if(this.isLast&&!this.infinite)return;const e=this.urlList.length;this.index=(this.index+1)%e},handleActions(e,s={}){if(this.loading)return;const{zoomRate:t,rotateDeg:n,enableTransition:o}={zoomRate:.2,rotateDeg:90,enableTransition:!0,...s},{transform:i}=this;switch(e){case"zoomOut":i.scale>.2&&(i.scale=parseFloat((i.scale-t).toFixed(3)));break;case"zoomIn":i.scale=parseFloat((i.scale+t).toFixed(3));break;case"clocelise":i.deg+=n;break;case"anticlocelise":i.deg-=n;break}i.enableTransition=o}}},m={};var g=u(v,f,p,!1,_,"a643e882",null,null);function _(e){for(let s in m)this[s]=m[s]}var Z=function(){return g.exports}();export{Z as default};
