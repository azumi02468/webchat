(function(e){function t(t){for(var r,a,l=t[0],c=t[1],u=t[2],d=0,p=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Live Chat"}})],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("video",{ref:"myVideo",attrs:{id:"myVideo",width:"400px",autoplay:"",muted:"",playsinline:""},domProps:{muted:!0}}),n("video",{ref:"theirVideo",attrs:{id:"theirVideo",width:"400px",autoplay:"",muted:"",playsinline:""},domProps:{muted:!0}}),n("div",[e._v(" あなたのID："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myId,expression:"myId"}],attrs:{typp:"text",id:"myId",readonly:""},domProps:{value:e.myId},on:{input:function(t){t.target.composing||(e.myId=t.target.value)}}})]),n("div",[e._v(" 発信相手のID："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.theirId,expression:"theirId"}],attrs:{type:"text",id:"theirId"},domProps:{value:e.theirId},on:{input:function(t){t.target.composing||(e.theirId=t.target.value)}}}),n("button",{attrs:{id:"makeCall"},on:{click:e.onclick}},[e._v("発信")])])])},l=[],c=n("0b69"),u=n.n(c),s={name:"HelloWorld",props:{msg:String},data:function(){return{myId:"",theirId:"",localStream:""}},methods:{onclick:function(){var e=this.theirId,t=d.call(e,this.localStream);this.setEventListener(t)},setEventListener:function(e){var t=this;e.on("stream",(function(e){var n=t.$refs.theirVideo;n.srcObject=e,n.play()}))}},mounted:function(){var e=this;navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(t){var n=e.$refs.myVideo;n.srcObject=t,n.play(),e.localStream=t})).catch((function(e){console.error("mediaDevice.getUserMedia() error:",e)})),d.on("open",(function(){e.myId=d.id})),d.on("call",(function(t){t.answer(e.localStream),e.setEventListener(t)})),d.on("error",(function(e){alert(e.message)}))}},d=new u.a({key:"59093eb6-f094-476c-af62-ab068434ec23"}),p=s,f=(n("a953"),n("2877")),m=Object(f["a"])(p,a,l,!1,null,"52353890",null),v=m.exports,h={name:"App",components:{HelloWorld:v}},y=h,b=(n("034f"),Object(f["a"])(y,o,i,!1,null,null,null)),g=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")},"84fa":function(e,t,n){},"85ec":function(e,t,n){},a953:function(e,t,n){"use strict";var r=n("84fa"),o=n.n(r);o.a}});
//# sourceMappingURL=app.e2b30b2f.js.map