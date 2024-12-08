import{c as Q}from"./@babel.49d8906a.js";import{r as Z}from"./vue.c448ed56.js";var k={exports:{}};/*!
 * vue-virtual-scroll-list v2.3.5-13
 * open source under the MIT license
 * https://github.com/tangbc/vue-virtual-scroll-list#readme
 */(function($,tt){(function(h,m){$.exports=m(Z)})(Q,function(h){h=h&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h;function m(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?m=function(e){return typeof e}:m=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(r)}function w(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function C(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function D(r,e,t){return e&&C(r.prototype,e),t&&C(r,t),r}function M(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function x(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,i)}return t}function _(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?x(Object(t),!0).forEach(function(i){M(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function A(r){return N(r)||j(r)||q(r)||H()}function N(r){if(Array.isArray(r))return O(r)}function j(r){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(r))return Array.from(r)}function q(r,e){if(!!r){if(typeof r=="string")return O(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(r,e)}}function O(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function H(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var v={FRONT:"FRONT",BEHIND:"BEHIND"},d={INIT:"INIT",FIXED:"FIXED",DYNAMIC:"DYNAMIC"},B=0,L=function(){function r(e,t,i){w(this,r),this.init(e,t,i)}return D(r,[{key:"init",value:function(t,i,s){this.param=t,this.callUpdate=typeof i=="function"?i:function(){},this.callBefore=typeof s=="function"?s:function(){},this.sizes=new Map,this.firstRangeTotalSize=0,this.firstRangeAverageSize=0,this.fixedSizeValue=0,this.calcType=d.INIT,this.temporaryEstimatedSize=0,this.offset=0,this.direction="",this.range=Object.create(null),t&&this.checkRange(0,t.keeps-1)}},{key:"destroy",value:function(){this.init(null,null)}},{key:"getRange",value:function(){var t=Object.create(null);return t.start=this.range.start,t.end=this.range.end,t.padFront=this.range.padFront,t.padBehind=this.range.padBehind,t}},{key:"isBehind",value:function(){return this.direction===v.BEHIND}},{key:"isFront",value:function(){return this.direction===v.FRONT}},{key:"getOffset",value:function(t){return(t<1?0:this.getIndexOffset(t))+this.param.slotHeaderSize}},{key:"updateParam",value:function(t,i){var s=this;this.param&&t in this.param&&(t==="uniqueIds"&&this.sizes.forEach(function(n,o){i.includes(o)||s.sizes.delete(o)}),this.param[t]=i)}},{key:"saveSize",value:function(t,i){this.sizes.set(t,i),this.calcType===d.INIT?(this.fixedSizeValue=i,this.calcType=d.FIXED):this.calcType===d.FIXED&&this.fixedSizeValue!==i&&(this.calcType=d.DYNAMIC,delete this.fixedSizeValue),this.calcType!==d.FIXED&&typeof this.firstRangeTotalSize!="undefined"&&(this.sizes.size<Math.min(this.param.keeps,this.param.uniqueIds.length)?(this.firstRangeTotalSize=A(this.sizes.values()).reduce(function(s,n){return s+n},0),this.firstRangeAverageSize=Math.round(this.firstRangeTotalSize/this.sizes.size)):delete this.firstRangeTotalSize)}},{key:"handleDataSourcesChange",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=this.range.start;this.isFront()?i=i-B:this.isBehind()&&(i=i+B),i=Math.max(i,0),t&&m(t)==="object"&&typeof t.estimateSize=="number"?this.temporaryEstimatedSize=t.estimateSize:this.temporaryEstimatedSize=0,this.updateRange(this.range.start,this.getEndByStart(i))}},{key:"handleSlotSizeChange",value:function(){this.handleDataSourcesChange()}},{key:"handleScroll",value:function(t){this.direction=t<this.offset||t===0?v.FRONT:v.BEHIND,this.offset=t,this.param&&(this.direction===v.FRONT?this.handleFront():this.direction===v.BEHIND&&this.handleBehind())}},{key:"handleFront",value:function(){var t=this.getScrollOvers();if(!(t>this.range.start)){var i=Math.max(t-this.param.buffer,0);this.checkRange(i,this.getEndByStart(i))}}},{key:"handleBehind",value:function(){var t=this.getScrollOvers();t<this.range.start+this.param.buffer||this.checkRange(t,this.getEndByStart(t))}},{key:"getScrollOvers",value:function(){var t=this.offset-this.param.slotHeaderSize;if(t<=0)return 0;if(this.isFixedType())return Math.floor(t/this.fixedSizeValue);for(var i=0,s=0,n=0,o=this.param.uniqueIds.length;i<=o;){if(s=i+Math.floor((o-i)/2),n=this.getIndexOffset(s),n===t)return s;n<t?i=s+1:n>t&&(o=s-1)}return i>0?--i:0}},{key:"getIndexOffset",value:function(t){if(!t)return 0;for(var i=0,s=0,n=0;n<t;n++)s=this.sizes.get(this.param.uniqueIds[n]),i=i+(typeof s=="number"?s:this.getEstimateSize());return i}},{key:"isFixedType",value:function(){return this.calcType===d.FIXED}},{key:"getLastIndex",value:function(){return this.param.uniqueIds.length-1}},{key:"checkRange",value:function(t,i){var s=this.param.keeps,n=this.param.uniqueIds.length;n<=s?(t=0,i=this.getLastIndex()):i-t<s-1&&(t=i-s+1),this.range.start!==t&&this.updateRange(t,i)}},{key:"updateRange",value:function(t,i){this.callBefore(),this.range.start=t,this.range.end=i,this.range.padFront=this.getPadFront(),this.range.padBehind=this.getPadBehind(),this.callUpdate(this.getRange())}},{key:"getEndByStart",value:function(t){var i=t+this.param.keeps-1,s=Math.min(i,this.getLastIndex());return s}},{key:"getPadFront",value:function(){return this.isFixedType()?this.fixedSizeValue*this.range.start:this.getIndexOffset(this.range.start)}},{key:"getPadBehind",value:function(){var t=this.range.end,i=this.getLastIndex();return(i-t)*this.getEstimateSize()}},{key:"getEstimateSize",value:function(){return this.isFixedType()?this.fixedSizeValue:this.temporaryEstimatedSize>0?this.temporaryEstimatedSize:this.param.estimateSize}}]),r}(),K={dataKey:{type:[String,Function],required:!0},dataSources:{type:Array,required:!0},dataComponent:{type:[Object,Function],required:!0},keeps:{type:Number,default:30},extraProps:{type:Object},estimateSize:{type:Number,default:50},direction:{type:String,default:"vertical"},start:{type:Number,default:0},offset:{type:Number,default:0},topThreshold:{type:Number,default:0},bottomThreshold:{type:Number,default:0},pageMode:{type:Boolean,default:!1},rootTag:{type:String,default:"div"},wrapTag:{type:String,default:"div"},wrapClass:{type:String,default:""},wrapStyle:{type:Object},itemTag:{type:String,default:"div"},itemClass:{type:String,default:""},itemClassAdd:{type:Function},itemStyle:{type:Object},headerTag:{type:String,default:"div"},headerClass:{type:String,default:""},headerStyle:{type:Object},footerTag:{type:String,default:"div"},footerClass:{type:String,default:""},footerStyle:{type:Object},itemScopedSlots:{type:Object},disabled:{type:Boolean,default:!1},activePrefix:{type:String,default:""}},V={index:{type:Number},event:{type:String},tag:{type:String},horizontal:{type:Boolean},source:{type:Object},component:{type:[Object,Function]},slotComponent:{type:Function},uniqueKey:{type:[String,Number]},extraProps:{type:Object},scopedSlots:{type:Object}},Y={event:{type:String},uniqueKey:{type:String},tag:{type:String},horizontal:{type:Boolean}},R={created:function(){this.shapeKey=this.horizontal?"offsetWidth":"offsetHeight"},mounted:function(){var e=this;typeof ResizeObserver!="undefined"&&(this.resizeObserver=new ResizeObserver(function(){e.dispatchSizeChange()}),this.resizeObserver.observe(this.$el))},updated:function(){this.dispatchSizeChange()},beforeDestroy:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)},methods:{getCurrentSize:function(){return this.$el?this.$el[this.shapeKey]:0},dispatchSizeChange:function(){this.$parent.$emit(this.event,this.uniqueKey,this.getCurrentSize(),this.hasInitial)}}},U=h.component("virtual-list-item",{mixins:[R],props:V,render:function(e){var t=this.tag,i=this.component,s=this.extraProps,n=s===void 0?{}:s,o=this.index,a=this.source,l=this.scopedSlots,p=l===void 0?{}:l,g=this.uniqueKey,u=this.slotComponent,f=_({},n,{source:a,index:o});return e(t,{key:g,attrs:{role:"listitem"}},[u?u({item:a,index:o,scope:f}):e(i,{props:f,scopedSlots:p})])}}),F=h.component("virtual-list-slot",{mixins:[R],props:Y,render:function(e){var t=this.tag,i=this.uniqueKey;return e(t,{key:i,attrs:{role:i}},this.$slots.default)}}),z={ITEM:"item_resize",SLOT:"slot_resize"},b={HEADER:"thead",FOOTER:"tfoot"},X=h.component("virtual-list",{props:K,data:function(){return{range:null,toBottomTime:null}},watch:{"dataSources.length":function(e){this.virtual.updateParam("uniqueIds",this.getUniqueIdFromDataSources()),this.virtual.handleDataSourcesChange(e>0?this.dataSources[e-1]:null)},estimateSize:function(e){this.virtual.updateParam("estimateSize",e)},keeps:function(e){this.virtual.updateParam("keeps",e),this.virtual.handleSlotSizeChange()},start:function(e){this.scrollToIndex(e)},offset:function(e){this.scrollToOffset(e)}},created:function(){this.isHorizontal=this.direction==="horizontal",this.directionKey=this.isHorizontal?"scrollLeft":"scrollTop",this.installVirtual(),this.$on(z.ITEM,this.onItemResized),(this.$slots.header||this.$slots.footer)&&this.$on(z.SLOT,this.onSlotResized)},activated:function(){this.scrollToOffset(this.virtual.offset),this.pageMode&&document.addEventListener("scroll",this.onScroll,{passive:!1})},deactivated:function(){this.pageMode&&document.removeEventListener("scroll",this.onScroll)},mounted:function(){this.start?this.scrollToIndex(this.start):this.offset&&this.scrollToOffset(this.offset),this.pageMode&&(this.updatePageModeFront(),document.addEventListener("scroll",this.onScroll,{passive:!1}))},beforeDestroy:function(){this.virtual.destroy(),this.pageMode&&document.removeEventListener("scroll",this.onScroll)},methods:{getSize:function(e){return this.virtual.sizes.get(e)},getSizes:function(){return this.virtual.sizes.size},getOffset:function(){if(this.pageMode)return document.documentElement[this.directionKey]||document.body[this.directionKey];var e=this.$refs.root;return e?Math.ceil(e[this.directionKey]):0},getClientSize:function(){var e=this.isHorizontal?"clientWidth":"clientHeight";if(this.pageMode)return document.documentElement[e]||document.body[e];var t=this.$refs.root;return t?Math.ceil(t[e]):0},getScrollSize:function(){var e=this.isHorizontal?"scrollWidth":"scrollHeight";if(this.pageMode)return document.documentElement[e]||document.body[e];var t=this.$refs.root;return t?Math.ceil(t[e]):0},scrollToBehavior:function(e,t,i){if(i){var s={behavior:"smooth"};this.isHorizontal?s.left=t:s.top=t,e.scrollTo(s)}else e[this.directionKey]=t},scrollToOffset:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(this.$emit("activity",!0),this.pageMode)this.scrollToBehavior(document.body,e,i),this.scrollToBehavior(document.documentElement,e,i);else{var s=this.$refs.root;s&&this.scrollToBehavior(s,e,i)}requestAnimationFrame(function(){t.activeEvent(t.$refs.root),t.$emit("activity",!1)})},scrollToIndex:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(e>=this.dataSources.length-1)this.scrollToBottom();else{var i=this.virtual.getOffset(e);t!==0&&(i=Math.max(0,i+t)),this.scrollToOffset(i)}},scrollToBottom:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.$refs.shepherd;if(i){var s=i[this.isHorizontal?"offsetLeft":"offsetTop"];if(this.scrollToOffset(s,t),t)return;this.toBottomTime&&(clearTimeout(this.toBottomTime),this.toBottomTime=null),this.toBottomTime=setTimeout(function(){e.getOffset()+e.getClientSize()+1<e.getScrollSize()&&e.scrollToBottom()},3)}},stopToBottom:function(){this.toBottomTime&&(clearTimeout(this.toBottomTime),this.toBottomTime=null)},scrollStop:function(){this.stopToBottom(),this.scrollToOffset(this.getOffset())},scrollInfo:function(){var e=this.getClientSize(),t=this.getOffset(),i=this.getScrollSize();return{offset:t,scale:t/(i-e),tail:i-e-t}},updatePageModeFront:function(){var e=this.$refs.root;if(e){var t=e.getBoundingClientRect(),i=e.ownerDocument.defaultView,s=this.isHorizontal?t.left+i.pageXOffset:t.top+i.pageYOffset;this.virtual.updateParam("slotHeaderSize",s)}},reset:function(){this.virtual.destroy(),this.scrollToOffset(0),this.installVirtual()},installVirtual:function(){this.virtual=new L({slotHeaderSize:0,slotFooterSize:0,keeps:this.keeps,estimateSize:this.estimateSize,buffer:Math.round(this.keeps/3),uniqueIds:this.getUniqueIdFromDataSources()},this.onRangeChanged,this.onBeforeChanged),this.range=this.virtual.getRange(),this.$emit("range",this.range)},getUniqueIdFromDataSources:function(){var e=this.dataKey;return this.dataSources.map(function(t){return typeof e=="function"?e(t):t[e]})},onItemResized:function(e,t){this.virtual.saveSize(e,t),this.$emit("resized",e,t)},onSlotResized:function(e,t,i){e===b.HEADER?this.virtual.updateParam("slotHeaderSize",t):e===b.FOOTER&&this.virtual.updateParam("slotFooterSize",t),i&&this.virtual.handleSlotSizeChange()},onBeforeChanged:function(){this.$emit("activity",!0)},onRangeChanged:function(e){var t=this;this.range=e,this.$emit("range",this.range),requestAnimationFrame(function(){t.activeEvent(t.$refs.root),t.$emit("activity",!1)})},onScroll:function(e){if(!this.disabled){var t=this.getOffset(),i=this.getClientSize(),s=this.getScrollSize();t<0||t+i>s+1||!s||(this.virtual.handleScroll(t),this.activeEvent(e.target),this.emitEvent(t,i,s,e))}},activeEvent:function(e){var t=this;if(!(!this.activePrefix||!e)){var i=e.getBoundingClientRect(),s=e.querySelectorAll('div[role="listitem"]');s.forEach(function(n,o){var a=n.getBoundingClientRect();if(a.top<i.bottom&&a.bottom>i.top&&a.left<i.right&&a.right>i.left?n.classList.remove(t.activePrefix+"-leave"):n.classList.add(t.activePrefix+"-leave"),t.isHorizontal){var l=Math.min(100,a.width/2),p=a.left+l,g=a.right-l;g<i.left||p>i.right?n.classList.remove(t.activePrefix+"-enter"):n.classList.add(t.activePrefix+"-enter")}else{var u=Math.min(100,a.height/2),f=a.top+u,y=a.bottom-u;y<i.top||f>i.bottom?n.classList.remove(t.activePrefix+"-enter"):n.classList.add(t.activePrefix+"-enter")}})}},emitEvent:function(e,t,i,s){this.$emit("scroll",s,this.virtual.getRange()),this.virtual.isFront()&&!!this.dataSources.length&&e-this.topThreshold<=0?this.$emit("totop"):this.virtual.isBehind()&&e+t+this.bottomThreshold>=i&&this.$emit("tobottom")},getRenderSlots:function(e){for(var t=[],i=this.range,s=i.start,n=i.end,o=this.dataSources,a=this.dataKey,l=this.itemClass,p=this.itemTag,g=this.itemStyle,u=this.isHorizontal,f=this.extraProps,y=this.dataComponent,E=this.itemScopedSlots,I=this.$scopedSlots&&this.$scopedSlots.item,c=s;c<=n;c++){var S=o[c];if(S){var T=typeof a=="function"?a(S):S[a];typeof T=="string"||typeof T=="number"?t.push(e(U,{props:{index:c,tag:p,event:z.ITEM,horizontal:u,uniqueKey:T,source:S,extraProps:f,component:y,slotComponent:I,scopedSlots:E},style:g,class:[l,this.itemClassAdd?this.itemClassAdd(c):null]})):console.warn("Cannot get the data-key '".concat(a,"' from data-sources."))}else console.warn("Cannot get the index '".concat(c,"' from data-sources."))}return t}},render:function(e){var t=this.$slots,i=t.header,s=t.footer,n=this.range,o=n.padFront,a=n.padBehind,l=this.isHorizontal,p=this.pageMode,g=this.rootTag,u=this.wrapTag,f=this.wrapClass,y=this.wrapStyle,E=this.headerTag,I=this.headerClass,c=this.headerStyle,S=this.footerTag,T=this.footerClass,W=this.footerStyle,G=this.disabled,P={padding:l?"0px ".concat(a,"px 0px ").concat(o,"px"):"".concat(o,"px 0px ").concat(a,"px")},J=y?Object.assign({},y,P):P;return e(g,{ref:"root",style:G?{overflow:"hidden"}:null,on:{"&scroll":!p&&this.onScroll}},[i?e(F,{class:I,style:c,props:{tag:E,event:z.SLOT,uniqueKey:b.HEADER}},i):null,e(u,{class:f,attrs:{role:"group"},style:J},this.getRenderSlots(e)),s?e(F,{class:T,style:W,props:{tag:S,event:z.SLOT,uniqueKey:b.FOOTER}},s):null,e("div",{ref:"shepherd",style:{width:l?"0px":"100%",height:l?"100%":"0px"}})])}});return X})})(k);var rt=k.exports;export{rt as V};
