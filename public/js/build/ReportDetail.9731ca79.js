import{m as i}from"./vuex.cc7cb26e.js";import{n as l}from"./app.574b291d.js";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"report-detail"},[a("div",{staticClass:"report-title"},[t._v(" "+t._s(t.data.title)+" "),t.loadIng>0?a("Icon",{staticClass:"icon-loading",attrs:{type:"ios-loading"}}):t._e()],1),t.formLabelWidth==="auto"?a("div",{staticClass:"report-detail-context"},[a("Form",{staticClass:"report-form auto-form",attrs:{"label-width":"auto",inline:""}},[a("FormItem",{attrs:{label:t.$L("\u6C47\u62A5\u4EBA")}},[a("UserAvatar",{attrs:{userid:t.data.userid,size:28}})],1),a("FormItem",{attrs:{label:t.$L("\u63D0\u4EA4\u65F6\u95F4")}},[t._v(" "+t._s(t.data.created_at)+" ")]),a("FormItem",{attrs:{label:t.$L("\u6C47\u62A5\u5BF9\u8C61")}},[t.data.receives_user.length===0?[t._v("-")]:t._l(t.data.receives_user,function(r,s){return a("UserAvatar",{key:s,attrs:{userid:r.userid,size:28}})})],2)],1),a("Form",{staticClass:"report-form auto-form",attrs:{"label-width":"auto"}},[a("FormItem",{attrs:{label:t.$L("\u6C47\u62A5\u5185\u5BB9")}},[a("div",{staticClass:"report-content",domProps:{innerHTML:t._s(t.data.content)}})])],1)],1):a("div",{staticClass:"report-detail-context"},[a("Form",{staticClass:"report-form",attrs:{labelPosition:t.formLabelPosition,labelWidth:t.formLabelWidth}},[t.formLabelWidth!=="auto"?[a("FormItem",{attrs:{label:t.$L("\u6C47\u62A5\u4EBA")}},[a("UserAvatar",{attrs:{userid:t.data.userid,size:28}})],1),a("FormItem",{attrs:{label:t.$L("\u63D0\u4EA4\u65F6\u95F4")}},[t._v(" "+t._s(t.data.created_at)+" ")]),a("FormItem",{attrs:{label:t.$L("\u6C47\u62A5\u5BF9\u8C61")}},[t.data.receives_user.length===0?[t._v("-")]:t._l(t.data.receives_user,function(r,s){return a("UserAvatar",{key:s,attrs:{userid:r.userid,size:28}})})],2)]:t._e(),a("FormItem",{attrs:{label:t.$L("\u6C47\u62A5\u5185\u5BB9")}},[a("div",{staticClass:"report-content",domProps:{innerHTML:t._s(t.data.content)}})])],2)],1)])},d=[];const m={name:"ReportDetail",props:{data:{default:{}}},data(){return{loadIng:0}},computed:{...i(["formLabelPosition","formLabelWidth"])},watch:{"data.id":{handler(t){t>0&&this.sendRead()},immediate:!0}},methods:{sendRead(){this.loadIng++,this.$store.dispatch("call",{url:"report/read",data:{ids:[this.data.id]}}).then(()=>{}).catch(()=>{}).finally(t=>{this.loadIng--})}}},o={};var c=l(m,n,d,!1,u,null,null,null);function u(t){for(let e in o)this[e]=o[e]}var p=function(){return c.exports}();export{p as R};
