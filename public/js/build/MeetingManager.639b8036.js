import{l as d}from"./le5le-store.b40f9152.js";import{m as l}from"./vuex.cc7cb26e.js";import{n as s,U as h}from"./app.574b291d.js";var c=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"meeting-player"},[e("div",{staticClass:"player",style:t.playerStyle,attrs:{id:t.id}}),t.userid?e("UserAvatar",{attrs:{userid:t.userid,size:36,borderWitdh:2}}):t.tourist.userimg?e("div",{staticClass:"common-avatar avatar-wrapper"},[e("div",{staticClass:"avatar-box online"},[e("em"),e("EAvatar",{attrs:{size:36,src:t.tourist.userimg}})],1)]):t._e(),e("div",{staticClass:"player-state"},[t.audio?t._e():e("i",{staticClass:"taskfont"},[t._v("\uE7C7")]),t.video?t._e():e("i",{staticClass:"taskfont"},[t._v("\uE7C8")])])],1)},u=[];const f={name:"MeetingPlayer",props:{id:{type:String,default:()=>"meeting-player-"+Math.round(Math.random()*1e4)},player:{type:Object,default:()=>({})},isLocal:{type:Boolean,default:!1}},data(){return{timer:null,tourist:{uid:"",nickname:"",userimg:""}}},mounted(){this.timer=setInterval(t=>{this.audio&&!this.player.audioTrack.isPlaying&&this.play("audio"),this.video&&!this.player.videoTrack.isPlaying&&this.play("video")},3e3)},beforeDestroy(){clearInterval(this.timer)},computed:{...l(["cacheUserBasic"]),userid(){return this.player.uid?(this.player.uid+"").indexOf("88888")!==-1?(this.getTouristInfo(),0):parseInt((this.player.uid+"").substring(6))||0:0},playerStyle(){const t=this.cacheUserBasic.find(({userid:i})=>i==this.userid);return t?{backgroundImage:`url("${t.userimg}")`}:this.tourist.userimg?{backgroundImage:`url("${this.tourist.userimg}")`}:null},audio(){return!!this.player.audioTrack},video(){return!!this.player.videoTrack}},watch:{audio:{handler(t){t&&this.play("audio")},immediate:!0},video:{handler(t){t&&this.play("video")},immediate:!0}},methods:{play(t){this.$nextTick(i=>{try{t==="audio"?!this.isLocal&&this.player.audioTrack.play():t==="video"&&this.player.videoTrack.play(this.id)}catch(e){console.log("Meeting Player Error",e)}})},getTouristInfo(){this.$store.dispatch("call",{url:"users/meeting/tourist",data:{tourist_id:this.player.uid}}).then(({data:t})=>{this.tourist=t}).catch(({msg:t})=>{$A.modalError(t)})}}},o={};var m=s(f,c,u,!1,g,null,null,null);function g(t){for(let i in o)this[i]=o[i]}var p=function(){return m.exports}(),v=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"floatDrag",style:t.dragStyle,on:{mousedown:function(a){return a.stopPropagation(),a.preventDefault(),t.mouseDown.apply(null,arguments)}}},[t._t("default")],2)},k=[];const y={name:"DragBallComponent",props:{id:{type:String,default:""},distanceRight:{type:Number,default:0},distanceBottom:{type:Number,default:100},isScrollHidden:{type:Boolean,default:!1},isCanDraggable:{type:Boolean,default:!0},zIndex:{type:Number,default:50}},data(){return{clientWidth:null,clientHeight:null,top:0,left:0,timer:null,currentTop:0,isMoving:!1,record:{}}},created(){this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight},mounted(){this.id&&($A.isJson(window._DragBallComponent)||(window._DragBallComponent={})),this.isCanDraggable&&this.$nextTick(()=>{this.id&&$A.isJson(window._DragBallComponent[this.id])?(this.left=window._DragBallComponent[this.id].left,this.top=window._DragBallComponent[this.id].top):(this.left=this.clientWidth-this.floatDrag.offsetWidth-this.distanceRight,this.top=this.clientHeight-this.floatDrag.offsetHeight-this.distanceBottom),this.initDraggable()}),this.isScrollHidden&&window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},beforeDestroy(){this.id&&(window._DragBallComponent[this.id]={left:this.left,top:this.top}),window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},computed:{dragStyle(){return{left:this.left+"px",top:this.top+"px",zIndex:this.zIndex,position:"fixed"}},floatDrag(){return this.$refs.floatDrag}},methods:{handleScroll(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.handleScrollEnd()},200),this.currentTop=document.documentElement.scrollTop||document.body.scrollTop,this.left>this.clientWidth/2?this.left=this.clientWidth+this.floatDrag.offsetWidth:this.left=-this.floatDrag.offsetWidth},handleScrollEnd(){(document.documentElement.scrollTop||document.body.scrollTop)===this.currentTop&&(this.left>this.clientWidth/2?this.left=this.clientWidth-this.floatDrag.offsetWidth:this.left=0,clearTimeout(this.timer))},handleResize(){this.clientWidth=document.documentElement.clientWidth,this.clientHeight=document.documentElement.clientHeight,this.$nextTick(this.checkDraggablePosition)},initDraggable(){this.floatDrag.addEventListener("touchstart",this.toucheStart),this.floatDrag.addEventListener("touchmove",this.touchMove),this.floatDrag.addEventListener("touchend",this.touchEnd)},mouseDown(t){this.record={time:new Date().getTime(),top:this.floatDrag.offsetTop,left:this.floatDrag.offsetLeft,x:t.clientX-this.floatDrag.offsetLeft,y:t.clientY-this.floatDrag.offsetTop},this.floatDrag.style.transition="none",this.canClick=!1,document.onmousemove=i=>{let e=i.clientX-this.record.x,a=i.clientY-this.record.y;e<0?e=0:e>window.innerWidth-this.floatDrag.offsetWidth&&(e=window.innerWidth-this.floatDrag.offsetWidth),a<0?a=0:a>window.innerHeight-this.floatDrag.offsetHeight&&(a=window.innerHeight-this.floatDrag.offsetHeight),this.left=e,this.top=a},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null,this.checkDraggablePosition(),this.floatDrag.style.transition="all 0.3s",(Math.abs(this.record.top-this.floatDrag.offsetTop)<5&&Math.abs(this.record.left-this.floatDrag.offsetLeft)<5||new Date().getTime()-this.record.time<200)&&this.$emit("on-click")}},toucheStart(){this.canClick=!1,this.floatDrag.style.transition="none"},touchMove(t){if(this.canClick=!0,t.targetTouches.length===1){let i=event.targetTouches[0],e=i.clientX-this.floatDrag.offsetWidth/2,a=i.clientY-this.floatDrag.offsetHeight/2;e<0?e=0:e>window.innerWidth-this.floatDrag.offsetWidth&&(e=window.innerWidth-this.floatDrag.offsetWidth),a<0?a=0:a>window.innerHeight-this.floatDrag.offsetHeight&&(a=window.innerHeight-this.floatDrag.offsetHeight),this.left=e,this.top=a}},touchEnd(){!this.canClick||(this.floatDrag.style.transition="all 0.3s",this.checkDraggablePosition())},checkDraggablePosition(){this.left+this.floatDrag.offsetWidth/2>=this.clientWidth/2?this.left=this.clientWidth-this.floatDrag.offsetWidth:this.left=0,this.top<0&&(this.top=0),this.top+this.floatDrag.offsetHeight>=this.clientHeight&&(this.top=this.clientHeight-this.floatDrag.offsetHeight)}}},n={};var D=s(y,v,k,!1,_,null,null,null);function _(t){for(let i in n)this[i]=n[i]}var $=function(){return D.exports}(),b=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"meeting-warp"},[e("Modal",{attrs:{title:t.$L(t.addData.type==="join"?"\u52A0\u5165\u4F1A\u8BAE":"\u65B0\u4F1A\u8BAE"),"mask-closable":!1,closable:!t.addData.sharekey},model:{value:t.addShow,callback:function(a){t.addShow=a},expression:"addShow"}},[e("Form",{ref:"addForm",attrs:{model:t.addData,rules:t.addRule,"label-width":"auto"},nativeOn:{submit:function(a){a.preventDefault()}}},[t.addData.type==="join"?[t.addData.name?e("FormItem",{attrs:{prop:"userids",label:t.$L("\u4F1A\u8BAE\u4E3B\u9898")}},[e("Input",{attrs:{disabled:""},model:{value:t.addData.name,callback:function(a){t.$set(t.addData,"name",a)},expression:"addData.name"}})],1):t._e(),t.addData.sharekey?e("FormItem",{attrs:{prop:"username",label:t.$L("\u4F60\u7684\u59D3\u540D")}},[e("Input",{attrs:{placeholder:t.$L("\u8BF7\u8F93\u5165\u4F60\u7684\u59D3\u540D")},model:{value:t.addData.username,callback:function(a){t.$set(t.addData,"username",a)},expression:"addData.username"}})],1):t._e(),e("FormItem",{attrs:{prop:"meetingid",label:t.$L("\u4F1A\u8BAE\u9891\u9053ID")}},[e("Input",{attrs:{disabled:t.addData.meetingdisabled===!0,placeholder:t.$L("\u8BF7\u8F93\u5165\u4F1A\u8BAE\u9891\u9053ID")},model:{value:t.addData.meetingid,callback:function(a){t.$set(t.addData,"meetingid",a)},expression:"addData.meetingid"}})],1)]:[e("FormItem",{attrs:{prop:"name",label:t.$L("\u4F1A\u8BAE\u4E3B\u9898")}},[e("Input",{attrs:{maxlength:50,placeholder:t.$L("\u9009\u586B")},model:{value:t.addData.name,callback:function(a){t.$set(t.addData,"name",a)},expression:"addData.name"}})],1),e("FormItem",{attrs:{prop:"userids",label:t.$L("\u9080\u8BF7\u6210\u5458")}},[e("UserSelect",{attrs:{uncancelable:[t.userId],"multiple-max":20,title:t.$L("\u9009\u62E9\u9080\u8BF7\u6210\u5458")},model:{value:t.addData.userids,callback:function(a){t.$set(t.addData,"userids",a)},expression:"addData.userids"}})],1)],e("FormItem",{attrs:{prop:"tracks"}},[e("CheckboxGroup",{model:{value:t.addData.tracks,callback:function(a){t.$set(t.addData,"tracks",a)},expression:"addData.tracks"}},[e("Checkbox",{attrs:{label:"audio"}},[e("span",[t._v(t._s(t.$L("\u9EA6\u514B\u98CE")))])]),e("Checkbox",{attrs:{label:"video"}},[e("span",[t._v(t._s(t.$L("\u6444\u50CF\u5934")))])])],1)],1)],2),e("div",{staticClass:"adaption",attrs:{slot:"footer"},slot:"footer"},[t.addData.sharekey?t._e():e("Button",{attrs:{type:"default"},on:{click:function(a){t.addShow=!1}}},[t._v(t._s(t.$L("\u53D6\u6D88")))]),e("Button",{attrs:{type:"primary",loading:t.loadIng>0},on:{click:t.onSubmit}},[t._v(t._s(t.$L(t.addData.type==="join"?"\u52A0\u5165\u4F1A\u8BAE":"\u5F00\u59CB\u4F1A\u8BAE")))])],1)],1),e("Modal",{ref:"meetingModal",attrs:{title:t.addData.name,mask:!1,"mask-closable":!1,closable:!1,"transition-names":["",""],beforeClose:t.onClose,"class-name":`meeting-manager${t.meetingMini?" meeting-hidden":""}`,fullscreen:""},model:{value:t.meetingShow,callback:function(a){t.meetingShow=a},expression:"meetingShow"}},[e("ul",[t.localUser.uid?e("li",[e("MeetingPlayer",{attrs:{player:t.localUser,isLocal:""}})],1):t._e(),t._l(t.remoteUsers,function(a){return e("li",[e("MeetingPlayer",{attrs:{player:a}})],1)})],2),e("div",{staticClass:"adaption meeting-button-group",attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"primary",loading:t.audioLoad},on:{click:t.onAudio}},[e("i",{staticClass:"taskfont",domProps:{innerHTML:t._s(t.localUser.audioTrack?"&#xe7c3;":"&#xe7c7;")}})]),e("Button",{attrs:{type:"primary",loading:t.videoLoad},on:{click:t.onVideo}},[e("i",{staticClass:"taskfont",domProps:{innerHTML:t._s(t.localUser.videoTrack?"&#xe7c1;":"&#xe7c8;")}})]),t.windowPortrait?[e("Button",{attrs:{type:"primary",loading:t.linkCopyLoad},on:{click:function(a){return t.onInvitation("open")}}},[e("i",{staticClass:"taskfont"},[t._v("\uE646")])]),t.addData.sharekey?t._e():e("Button",{attrs:{type:"primary"},on:{click:function(a){t.meetingMini=!0}}},[e("i",{staticClass:"taskfont"},[t._v("\uE656")])]),e("Button",{attrs:{type:"warning",loading:t.loadIng>0},on:{click:t.onClose}},[e("i",{staticClass:"taskfont"},[t._v("\uE612")])])]:[e("Button",{attrs:{type:"primary"},on:{click:function(a){return t.onInvitation("open")}}},[t._v(t._s(t.$L("\u9080\u8BF7")))]),t.addData.sharekey?t._e():e("Button",{attrs:{type:"primary"},on:{click:function(a){t.meetingMini=!0}}},[t._v(t._s(t.$L("\u6700\u5C0F\u5316")))]),e("Button",{attrs:{type:"warning",loading:t.loadIng>0},on:{click:t.onClose}},[t._v(t._s(t.$L("\u79BB\u5F00\u4F1A\u8BAE")))])]],2)]),t.meetingMini?e("DragBallComponent",{attrs:{id:"meetingDragBall","z-index":3e3},on:{"on-click":function(a){t.meetingMini=!1}}},[e("div",{staticClass:"meeting-drag-ball"},[e("i",{staticClass:"taskfont",domProps:{innerHTML:t._s(t.localUser.audioTrack?"&#xe7c3;":"&#xe7c7;")}}),e("i",{staticClass:"taskfont",domProps:{innerHTML:t._s(t.localUser.videoTrack?"&#xe7c1;":"&#xe7c8;")}}),e("em",[t._v(t._s(t.$L("\u4F1A\u8BAE\u4E2D")))])])]):t._e(),e("Modal",{attrs:{title:t.$L("\u9080\u8BF7\u52A0\u5165"),"mask-closable":!1},model:{value:t.invitationShow,callback:function(a){t.invitationShow=a},expression:"invitationShow"}},[e("Form",{ref:"invitationForm",attrs:{model:t.invitationData,"label-width":"auto"},nativeOn:{submit:function(a){a.preventDefault()}}},[e("FormItem",{attrs:{prop:"userids",label:t.$L("\u9080\u8BF7\u6210\u5458")}},[e("UserSelect",{attrs:{"multiple-max":20,title:t.$L("\u9009\u62E9\u9080\u8BF7\u6210\u5458")},model:{value:t.invitationData.userids,callback:function(a){t.$set(t.invitationData,"userids",a)},expression:"invitationData.userids"}})],1)],1),e("div",{staticClass:"adaption",attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"default",loading:t.linkCopyLoad},on:{click:t.linkCopy}},[t._v(t._s(t.$L("\u590D\u5236\u94FE\u63A5")))]),e("Button",{attrs:{type:"primary",loading:t.invitationLoad},on:{click:function(a){return t.onInvitation("submit")}}},[t._v(t._s(t.$L("\u53D1\u9001\u9080\u8BF7")))])],1)],1)],1)},w=[];const T={name:"MeetingManager",components:{UserSelect:h,DragBallComponent:$,MeetingPlayer:p},props:{id:{type:String,default:()=>"meeting-player-"+Math.round(Math.random()*1e4)}},data(){return{loadIng:0,subscribe:null,addShow:!1,addData:{userids:[],tracks:["audio"]},addRule:{username:[{required:!0,message:this.$L("\u8BF7\u8F93\u5165\u4F60\u7684\u59D3\u540D\uFF01"),trigger:"change"}]},invitationShow:!1,invitationLoad:!1,invitationData:{userids:[]},meetingShow:!1,meetingMini:!1,audioLoad:!1,videoLoad:!1,agoraClient:null,remoteUsers:[],localUser:{uid:null,audioTrack:null,videoTrack:null},linkCopyLoad:!1}},computed:{...l(["meetingWindow"])},mounted(){this.subscribe=d.Store.subscribe("addMeeting",this.onAdd)},beforeDestroy(){this.subscribe&&(this.subscribe.unsubscribe(),this.subscribe=null)},watch:{meetingMini(t){t||(this.$refs.meetingModal.modalIndex=this.$refs.meetingModal.handleGetModalIndex())},meetingWindow:{handler(t){switch(t.type){case"add":this.addShow=t.show,this.loadIng=0;break;case"join":this.addShow=t.show,this.loadIng=0,this.addData.type="join",t.meetingSharekey&&(this.addData.sharekey=t.meetingSharekey,this.addData.meetingid=t.meetingid||"",this.addData.meetingdisabled=!!t.meetingSharekey);break;case"invitation":this.invitationShow=t.show,this.invitationLoad=!1,this.invitationData.meetingid=t.meetingid;break;case"error":this.addShow=t.show,this.loadIng=0,this.invitationShow=t.show,this.invitationLoad=!1,$A.modalError("\u52A0\u5165\u4F1A\u8BAE\u5931\u8D25");break}},immediate:!0}},methods:{onAdd(t){t=$A.isJson(t)?t:{},/^\d+$/.test(t.dialog_id)&&(this.loadIng++,this.$store.dispatch("call",{url:"dialog/user",data:{dialog_id:t.dialog_id}}).then(({data:i})=>{this.$set(this.addData,"userids",i.map(e=>e.userid))}).finally(i=>{this.loadIng--}),delete t.dialog_id),$A.isArray(t.userids)?t.userids.includes(this.userId)||t.userids.push(this.userId):t.userids=[this.userId],$A.isArray(t.tracks)?t.tracks.includes("audio")||t.tracks.push("audio"):t.tracks=["audio"],this.addData=t,this.addShow=!0},onSubmit(){if(this.meetingShow){$A.modalWarning("\u6B63\u5728\u4F1A\u8BAE\u4E2D\uFF0C\u65E0\u6CD5\u8FDB\u5165\u5176\u4ED6\u4F1A\u8BAE\u5BA4");return}this.$refs.addForm.validate(t=>{t&&(this.loadIng++,this.$store.dispatch("call",{url:"users/meeting/open",data:this.addData}).then(({data:i})=>{this.$set(this.addData,"name",i.name),this.$set(this.addData,"meetingid",i.meetingid),this.$set(this.localUser,"nickname",i.nickname),this.$set(this.localUser,"userimg",i.userimg),this.$store.dispatch("saveDialogMsg",i.msgs),this.$store.dispatch("updateDialogLastMsg",i.msgs),delete i.name,delete i.msgs,$A.isEEUiApp?$A.eeuiAppSendMessage({action:"startMeeting",meetingParams:{name:this.addData.name,token:i.token,channel:i.channel,uuid:i.uid,appid:i.appid,avatar:i.userimg,username:i.nickname,video:this.addData.tracks.includes("video"),audio:this.addData.tracks.includes("audio"),meetingid:i.meetingid,sharelink:i.sharelink,alert:{title:this.$L("\u6E29\u99A8\u63D0\u793A"),message:this.$L("\u786E\u5B9A\u8981\u79BB\u5F00\u4F1A\u8BAE\u5417\uFF1F"),cancel:this.$L("\u7EE7\u7EED"),confirm:this.$L("\u9000\u51FA")}}}):$A.loadScript("js/AgoraRTC_N-4.17.0.js").then(e=>{this.join(i)}).catch(e=>{$A.modalError("\u4F1A\u8BAE\u7EC4\u4EF6\u52A0\u8F7D\u5931\u8D25\uFF01")}).finally(e=>{this.loadIng--})}).catch(({msg:i})=>{this.loadIng--,$A.modalError(i)}))})},onAudio(){this.localUser.audioTrack?this.closeAudio():this.openAudio()},onVideo(){this.localUser.videoTrack?this.closeVideo():this.openVideo()},onInvitation(t){if(t==="open"){if(this.addData.sharekey){this.linkCopy();return}this.invitationData={userids:[],meetingid:this.addData.meetingid},this.invitationShow=!0}else t==="submit"&&(this.invitationLoad=!0,this.$store.dispatch("call",{url:"users/meeting/invitation",data:this.invitationData}).then(({data:i,msg:e})=>{this.invitationShow=!1,this.$store.dispatch("saveDialogMsg",i.msgs),this.$store.dispatch("updateDialogLastMsg",i.msgs),$A.messageSuccess(e)}).catch(({msg:i})=>{$A.modalError(i)}).finally(i=>{this.invitationLoad=!1}))},onClose(){return new Promise(t=>{$A.modalConfirm({content:"\u786E\u5B9A\u8981\u79BB\u5F00\u4F1A\u8BAE\u5417\uFF1F",cancelText:"\u7EE7\u7EED",okText:"\u9000\u51FA",onOk:async i=>{await this.leave(),this.addData.sharekey&&(this.addShow=!0,this.loadIng=0),t()}})})},async join(t){this.loadIng++,AgoraRTC.onMicrophoneChanged=async e=>{if(e.state==="ACTIVE")this.localUser.audioTrack.setDevice(e.device.deviceId);else if(e.device.label===this.localUser.audioTrack.getTrackLabel()){const a=await AgoraRTC.getMicrophones();a[0]&&this.localUser.audioTrack.setDevice(a[0].deviceId)}},AgoraRTC.onCameraChanged=async e=>{if(e.state==="ACTIVE")this.localUser.videoTrack.setDevice(e.device.deviceId);else if(e.device.label===this.localUser.videoTrack.getTrackLabel()){const a=await AgoraRTC.getCameras();a[0]&&this.localUser.videoTrack.setDevice(a[0].deviceId)}},AgoraRTC.onAutoplayFailed=()=>{$A.messageWarning("\u70B9\u51FB\u5C4F\u5E55\u5F00\u59CB\u4F1A\u8BAE")},this.agoraClient=AgoraRTC.createClient({mode:"rtc",codec:"vp8"}),this.agoraClient.on("user-joined",this.handleUserJoined),this.agoraClient.on("user-left",this.handleUserLeft),this.agoraClient.on("user-published",this.handleUserPublished),this.agoraClient.on("user-unpublished",this.handleUserUnpublished);const i=[];try{this.localUser.uid=await this.agoraClient.join(t.appid,t.channel,t.token,t.uid),this.addData.tracks.includes("audio")&&i.push(this.localUser.audioTrack=await AgoraRTC.createMicrophoneAudioTrack()),this.addData.tracks.includes("video")&&i.push(this.localUser.videoTrack=await AgoraRTC.createCameraVideoTrack()),i.length>0&&await this.agoraClient.publish(i),this.meetingShow=!0}catch(e){console.error(e),$A.modalError("\u4F1A\u8BAE\u7EC4\u4EF6\u52A0\u8F7D\u5931\u8D25\uFF01")}this.loadIng--,this.addShow=!1},async leave(){this.loadIng++,["audioTrack","videoTrack"].some(t=>{var i,e;(i=this.localUser[t])==null||i.stop(),(e=this.localUser[t])==null||e.close()}),this.localUser={uid:null,audioTrack:null,videoTrack:null},this.remoteUsers=[],await this.agoraClient.leave(),this.loadIng--,this.meetingShow=!1},async openAudio(){this.audioLoad||this.localUser.audioTrack||(this.audioLoad=!0,this.localUser.audioTrack=await AgoraRTC.createMicrophoneAudioTrack(),await this.agoraClient.publish([this.localUser.audioTrack]),this.audioLoad=!1)},async closeAudio(){this.audioLoad||!this.localUser.audioTrack||(this.audioLoad=!0,await this.agoraClient.unpublish([this.localUser.audioTrack]),this.localUser.audioTrack.stop(),this.localUser.audioTrack.close(),this.localUser.audioTrack=null,this.audioLoad=!1)},async openVideo(){this.videoLoad||this.localUser.videoTrack||(this.videoLoad=!0,this.localUser.videoTrack=await AgoraRTC.createCameraVideoTrack(),await this.agoraClient.publish([this.localUser.videoTrack]),this.videoLoad=!1)},async closeVideo(){this.videoLoad||!this.localUser.videoTrack||(this.videoLoad=!0,await this.agoraClient.unpublish([this.localUser.videoTrack]),this.localUser.videoTrack.stop(),this.localUser.videoTrack.close(),this.localUser.videoTrack=null,this.videoLoad=!1)},async handleUserJoined(t){const i=this.remoteUsers.findIndex(e=>e.uid==t.uid);i>-1?this.remoteUsers.splice(i,1,t):this.remoteUsers.push(t)},async handleUserLeft(t){const i=this.remoteUsers.findIndex(e=>e.uid==t.uid);i>-1&&this.remoteUsers.splice(i,1)},async handleUserPublished(t,i){this.remoteUsers.find(a=>a.uid==t.uid)&&await this.agoraClient.subscribe(t,i)},async handleUserUnpublished(t,i){this.remoteUsers.find(a=>a.uid==t.uid)&&await this.agoraClient.unsubscribe(t,i)},linkCopy(){this.linkCopyLoad=!0,this.$store.dispatch("call",{url:"users/meeting/link",data:{meetingid:this.addData.meetingid||this.invitationData.meetingid,sharekey:this.addData.sharekey}}).then(({data:t})=>{this.$copyText(t).then(i=>{$A.messageSuccess("\u5DF2\u590D\u5236\u4F1A\u8BAE\u9080\u8BF7\u94FE\u63A5")}).catch(i=>{$A.messageError("\u590D\u5236\u5931\u8D25")}),this.invitationShow=!1}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.linkCopyLoad=!1})}}},r={};var C=s(T,b,w,!1,L,null,null,null);function L(t){for(let i in r)this[i]=r[i]}var x=function(){return C.exports}();export{x as M};
