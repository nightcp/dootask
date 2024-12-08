import{n as h}from"./app.013f399e.js";import{I as m}from"./ImgUpload.d07bfe88.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.befa8c62.js";import"./@babel.49d8906a.js";import"./dayjs.9becbe0b.js";import"./localforage.c153f039.js";import"./markdown-it.f75bb98e.js";import"./entities.48a44fec.js";import"./linkify-it.c76d7176.js";import"./punycode.js.4b3f125a.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.d2045547.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkin-calendar"},[a("div",{staticClass:"calendar-header"},[a("div",{staticClass:"calendar-header-menu"},[a("Icon",{staticClass:"month-less",attrs:{type:"ios-arrow-back"},on:{click:t.prevMonth}}),a("h4",[t._v(t._s(t.$L("(*)\u5E74(*)\u6708",t.year,t.month)))]),t.hasNextMonth?a("Icon",{staticClass:"month-add",attrs:{type:"ios-arrow-forward"},on:{click:t.nextMonth}}):t._e()],1),t.hasNextMonth?a("Button",{staticClass:"calendar-header-back",attrs:{size:"small"},on:{click:t.nowMonth}},[t._v(t._s(t.$L("\u8FD4\u56DE\u672C\u6708")))]):t._e()],1),a("table",{staticClass:"check-table"},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$L("\u65E5")))]),a("th",[t._v(t._s(t.$L("\u4E00")))]),a("th",[t._v(t._s(t.$L("\u4E8C")))]),a("th",[t._v(t._s(t.$L("\u4E09")))]),a("th",[t._v(t._s(t.$L("\u56DB")))]),a("th",[t._v(t._s(t.$L("\u4E94")))]),a("th",[t._v(t._s(t.$L("\u516D")))])])]),a("tbody",t._l(t.dateArray,function(s){return a("tr",[t._l(s,function(i){return[i.month?a("td",{class:{today:i.today,checkin:t.isCheck(i.date)}},[a("ETooltip",{attrs:{"max-width":"auto",disabled:!t.isCheck(i.date)}},[a("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.getTimes(i.date))},slot:"content"}),a("div",{staticClass:"item-day"},[i.today?a("div",[t._v(t._s(t.$L("\u4ECA\u5929")))]):a("div",[t._v(t._s(i.day))]),t.isCheck(i.date)?a("div",{staticClass:"ui-state-down"},[t._v(t._s(t.$L("\u5DF2\u7B7E\u5230")))]):i.today?a("div",{staticClass:"ui-state-default"},[t._v(t._s(t.$L("\u5C1A\u672A\u7B7E\u5230")))]):t._e()])])],1):a("td",{staticClass:"disabled"},[a("div",{staticClass:"item-day"},[a("div",[t._v(t._s(i.day))]),t.isCheck(i.date)?a("div",{staticClass:"ui-state-down"},[t._v(t._s(t.$L("\u5DF2\u7B7E\u5230")))]):t._e()])])]})],2)}),0)]),t.loadIng?a("div",{staticClass:"calendar-loading"},[a("Loading")],1):t._e()])},u=[];const _={name:"CheckinCalendar",props:{checkin:{type:Array},loadIng:{type:Boolean,default:!1}},data(){return{year:"",month:"",startTime:"",endTime:"",dateArray:[],historys:[]}},created(){const t=$A.daytz();this.year=t.year(),this.month=t.month()+1,this.generateCalendar()},watch:{checkin:{handler(t){t.some(({date:e,section:a})=>{e=e.replace(/-0?/g,"/");let s=this.historys.findIndex(i=>i.date==e);s>-1?this.historys.splice(s,1,{date:e,section:a}):this.historys.push({date:e,section:a})})},immediate:!0}},computed:{hasNextMonth(){const{year:t,month:e}=this,a=$A.daytz();return parseInt(t)!=a.year()||parseInt(e)<a.month()+1}},methods:{ym(){return this.year+"-"+(this.month<10?"0"+this.month:this.month)},isCheck(t){return!!this.historys.find(e=>e.date==t)},setMonth(t){this.$emit("setMonth",t,[this.startTime,this.endTime])},getTimes(t){const e=this.historys.find(a=>a.date==t);return e==null?void 0:e.section.map(a=>`${a[0]} - ${a[1]||"None"}`).join("<br/>")},generateCalendar(){let t=$A.daytz().startOf("day"),e=$A.dayjs(`${this.year}-${this.month}-1`),a=e.valueOf()-e.day()*86400*1e3,s=[];for(let i=0;i<6;i++){s[i]=[];for(let n=0;n<7;n++){let r=$A.dayjs(a),o=r.month()+1;s[i][n]={day:r.date(),date:`${r.year()}/${o}/${r.date()}`,today:t.unix()==r.unix(),future:t.unix()<r.unix(),month:o==this.month},a+=86400*1e3}}this.dateArray=s,this.startTime=s[0][0].date,this.endTime=s[5][6].date,this.setMonth(this.year+"/"+this.month,[this.startTime,this.endTime])},nextMonth(){this.month==12?(this.year++,this.month=1):this.month++,this.generateCalendar(),this.$emit("changeMonth",this.ym())},prevMonth(){this.month==1?(this.year--,this.month=12):this.month--,this.generateCalendar(),this.$emit("changeMonth",this.ym())},nowMonth(){const t=$A.daytz();this.year=t.year(),this.month=t.month()+1,this.generateCalendar(),this.$emit("changeMonth",this.ym())}}},l={};var f=h(_,d,u,!1,p,null,null,null);function p(t){for(let e in l)this[e]=l[e]}var y=function(){return f.exports}(),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-item"},[a("Form",{ref:"formData",attrs:{"label-width":"auto"},nativeOn:{submit:function(s){s.preventDefault()}}},[a("Divider",{staticStyle:{"margin-top":"0"},attrs:{orientation:"left"}},[t._v(t._s(t.$L("\u7B7E\u5230\u8BB0\u5F55")))]),t.latelyLoad>0?a("div",{staticClass:"setting-checkin-load"},[a("Loading")],1):a("Timeline",{staticClass:"setting-checkin-lately"},t._l(t.latelyData,function(s,i){return a("TimelineItem",{key:i,attrs:{color:s.section.length>0?"blue":"#F29D38"}},[a("Icon",{attrs:{slot:"dot",type:s.section.length>0?"md-checkmark-circle":"md-close-circle"},slot:"dot"}),a("p",{staticClass:"time"},[t._v(t._s(s.date))]),a("p",{staticClass:"content",domProps:{innerHTML:t._s(s.section.length>0?t.latelySection(s.section):t.$L("\u672A\u7B7E\u5230"))}})],1)}),1),a("div",{staticClass:"setting-checkin-button",on:{click:function(s){t.calendarShow=!0}}},[t._v(t._s(t.$L("\u67E5\u770B\u66F4\u591A\u7B7E\u5230\u6570\u636E")))]),a("Divider",{attrs:{orientation:"left"}},[t._v(t._s(t.$L("\u7B7E\u5230\u8BBE\u7F6E")))]),a("div",{staticClass:"setting-checkin-row"},[a("Tabs",{staticStyle:{margin:"0"},model:{value:t.checkinTabs,callback:function(s){t.checkinTabs=s},expression:"checkinTabs"}},[a("TabPane",{attrs:{label:t.$L("\u4EBA\u8138\u7B7E\u5230"),name:"face"}},[a("Row",{staticClass:"setting-template"},[a("Col",{attrs:{span:"24"}},[t._v(t._s(t.$L("\u4EBA\u8138\u56FE\u7247")))])],1),a("Row",{staticClass:"setting-template"},[a("Col",{attrs:{span:"24"}},[a("ImgUpload",{attrs:{num:1,width:512,height:512,whcut:"cover"},model:{value:t.faceimgs,callback:function(s){t.faceimgs=s},expression:"faceimgs"}}),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A500x500")))])],1)],1)],1),a("TabPane",{attrs:{label:t.$L("WiFi\u7B7E\u5230"),name:"mac"}},[a("Alert",{attrs:{type:"success"}},[t._v(" "+t._s(t.$L("\u8BBE\u5907\u8FDE\u63A5\u4E0A\u6307\u5B9A\u8DEF\u7531\u5668\uFF08WiFi\uFF09\u540E\u81EA\u52A8\u7B7E\u5230\u3002"))+" ")]),a("Row",{staticClass:"setting-template"},[a("Col",{attrs:{span:"12"}},[t._v(t._s(t.$L("\u8BBE\u5907MAC\u5730\u5740")))]),a("Col",{attrs:{span:"12"}},[t._v(t._s(t.$L("\u5907\u6CE8")))])],1),t._l(t.formData,function(s,i){return a("Row",{key:i,staticClass:"setting-template"},[a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{maxlength:20,placeholder:t.$L("\u8BF7\u8F93\u5165\u8BBE\u5907MAC\u5730\u5740"),clearable:""},on:{"on-clear":function(n){return t.delDatum(i)}},model:{value:s.mac,callback:function(n){t.$set(s,"mac",n)},expression:"item.mac"}})],1),a("Col",{attrs:{span:"12"}},[a("Input",{attrs:{maxlength:100,placeholder:t.$L("\u5907\u6CE8")},model:{value:s.remark,callback:function(n){t.$set(s,"remark",n)},expression:"item.remark"}})],1)],1)}),a("Button",{attrs:{type:"default",icon:"md-add"},on:{click:t.addDatum}},[t._v(t._s(t.$L("\u6DFB\u52A0\u8BBE\u5907")))])],2)],1)],1)],1),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1),a("Modal",{attrs:{title:t.$L("\u7B7E\u5230\u6570\u636E"),"footer-hide":"","mask-closable":!1},model:{value:t.calendarShow,callback:function(s){t.calendarShow=s},expression:"calendarShow"}},[a("CheckinCalendar",{ref:"calendar",attrs:{loadIng:t.calendarLoading>0,checkin:t.calendarData},on:{changeMonth:t.changeMonth}})],1)],1)},$=[];const g={name:"ManageCheckin",components:{CheckinCalendar:y,ImgUpload:m},data(){return{loadIng:0,formData:[],faceimgs:[],nullDatum:{mac:"",remark:""},checkinTabs:"face",latelyLoad:0,latelyData:[],calendarShow:!1,calendarLoading:0,calendarData:[]}},mounted(){this.initData(),this.getLately()},watch:{calendarShow(t){t&&this.$nextTick(e=>{this.changeMonth(this.$refs.calendar.ym())})}},methods:{initData(){this.loadIng++,this.$store.dispatch("call",{url:"users/checkin/get"}).then(({data:t})=>{this.formData=t.list.length>0?t.list:[$A.cloneJSON(this.nullDatum)],this.faceimgs=t.faceimg,this.formData_bak=$A.cloneJSON(this.formData)}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.loadIng--})},submitForm(){this.$refs.formData.validate(t=>{if(t){const e=this.formData.filter(s=>/^[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}$/.test(s.mac.trim())).map(s=>({mac:s.mac.trim(),remark:s.remark.trim()})),a=$A.arrayLength(this.faceimgs)>0?this.faceimgs[0].url:"";this.loadIng++,this.$store.dispatch("call",{url:"users/checkin/save",data:{type:this.checkinTabs,list:e,faceimg:a},method:"post"}).then(({data:s})=>{this.formData=s.list,this.faceimgs=s.faceimg,this.formData_bak=$A.cloneJSON(this.formData),$A.messageSuccess("\u4FEE\u6539\u6210\u529F")}).catch(({msg:s})=>{$A.modalError(s)}).finally(s=>{this.loadIng--})}})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)},addDatum(){this.formData.push($A.cloneJSON(this.nullDatum))},delDatum(t){this.formData.splice(t,1),this.formData.length===0&&this.addDatum()},getLately(){this.latelyLoad++,this.$store.dispatch("call",{url:"users/checkin/list",data:{ym:$A.daytz().format("YYYY-MM"),before:1}}).then(({data:t})=>{this.latelyFormat(t)}).finally(t=>{this.latelyLoad--})},latelyFormat(t){this.latelyData=[];for(let e=0;e<5;e++){const a=$A.daytz().subtract(e,"day").format("YYYY-MM-DD"),s=t.find(({date:i})=>i==a)||{date:a,section:[]};this.latelyData.push(s)}},latelySection(t){return t.map(e=>`${e[0]} - ${e[1]||"None"}`).join("<br/>")},changeMonth(t){setTimeout(e=>{this.calendarLoading++},600),this.$store.dispatch("call",{url:"users/checkin/list",data:{ym:t,before:1}}).then(({data:e})=>{this.$refs.calendar.ym()==t&&(this.calendarData=e,t==$A.daytz().format("YYYY-MM")&&this.latelyFormat(e))}).catch(({msg:e})=>{this.calendarData=[],$A.modalError(e)}).finally(e=>{this.calendarLoading--})}}},c={};var k=h(g,v,$,!1,C,null,null,null);function C(t){for(let e in c)this[e]=c[e]}var it=function(){return k.exports}();export{it as default};
