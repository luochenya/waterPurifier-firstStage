(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cad58b6"],{"0378":function(t,s,e){"use strict";e("50f5")},1816:function(t,s,e){},"44c0":function(t,s,e){},"4da3":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t.blankOne?a("div",{staticClass:"blank"},[a("img",{attrs:{src:e("d45c"),alt:""}}),a("h2",[t._v("查找產品為空")]),a("span",[t._v("若無對應產品 ，請先掃描該機體上之QRco")]),a("span",[t._v("在進行產品保固登入後，即可開始使用淨水管家服務")])]):t._e(),t.blankTow?a("div",{staticClass:"blank_2"},[a("img",{attrs:{src:e("d45c"),alt:""}}),a("h2",[t._v("查無此關鍵字")])]):t._e(),t.blankThree?a("div",{staticClass:"blank_3"},[a("img",{attrs:{src:e("d45c"),alt:""}}),a("h2",[t._v("功能暫未開放，敬請期待！")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"btn",on:{click:t.toClick}},[t._v(" 我知道了 ")])]):t._e()])},i=[],n={name:"blank",props:{blankOne:{type:Boolean,default:!1},blankTow:{type:Boolean,default:!1},blankThree:{type:Boolean,default:!1},toClick:{type:Function,default:function(){}}},data:function(){return{}}},c=n,o=(e("dc6f"),e("c701")),l=Object(o["a"])(c,a,i,!1,null,"f7f09d3c",null);s["a"]=l.exports},"50f5":function(t,s,e){},5248:function(t,s,e){"use strict";e("8231")},8231:function(t,s,e){},"98b3":function(t,s,e){"use strict";var a="sakura";s["a"]={setItem:function(t,s,e){if(e){var i=this.getItem(e);i[t]=s,this.setItem(e,i)}else{var n=this.getStorage();n[t]=s,window.sessionStorage.setItem(a,JSON.stringify(n))}},getItem:function(t,s){if(s){var e=this.getItem(s);if(e)return e[t]}return this.getStorage()[t]},getStorage:function(){return JSON.parse(window.sessionStorage.getItem(a)||"{}")},clear:function(t,s){var e=this.getStorage();if(s){if(!e[s])return;delete e[s][t]}else delete e[t];window.sessionStorage.setItem(a,JSON.stringify(e))}}},be38:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"contents"},[e("el-card",[e("el-row",[e("el-col",{attrs:{md:12,lg:14}},[e("span",[t._v("剩餘點數")]),e("h1",[t._v(t._s(t.userName.Points)),e("span",[t._v("點")])]),e("p",[t._v("收集點數可以換獎品 Collect points for prizes")])]),e("el-col",{attrs:{md:12,lg:10}},[e("span",[t._v("已分享"+t._s(t.userName.Shares)+"人")])])],1)],1),e("div",{staticClass:"task"},[e("div",{staticClass:"tabs"},[e("span",{class:{active:0==t.num},on:{click:function(s){t.num=0}}},[t._v("永久任務")]),e("span",{class:{active:1==t.num},on:{click:function(s){t.num=1}}},[t._v("限時任務")])]),e("el-row",{directives:[{name:"show",rawName:"v-show",value:2==t.num,expression:"num==2"}],attrs:{gutter:15}},[e("el-col",{attrs:{md:12}},[e("task-card",{attrs:{isClickTask:t.isClickTask}})],1),e("el-col",{attrs:{md:12}},[e("task-card")],1),e("el-col",{attrs:{md:12}},[e("task-card")],1),e("el-col",{attrs:{md:12}},[e("task-card")],1)],1),e("el-row",{directives:[{name:"show",rawName:"v-show",value:3==t.num,expression:"num==3"}],attrs:{gutter:15}},[e("el-col",{attrs:{md:12}},[e("task-card",{attrs:{istask:!0}})],1),e("el-col",{attrs:{md:12}},[e("task-card",{attrs:{istask:!0}})],1),e("el-col",{attrs:{md:12}},[e("task-card",{attrs:{istask:!0}})],1),e("el-col",{attrs:{md:12}},[e("task-card",{attrs:{istask:!0}})],1)],1)],1),e("replace-filter",{attrs:{isDialogShow:t.isShowReplace,confirmClick:t.ClickReplace}}),e("blank",{attrs:{blankThree:!0}})],1)},i=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tasks",on:{click:t.isClickTask}},[e("el-card",[e("div",{staticClass:"title"},[e("h1",[t._v("賬號綁定LINE賬戶")]),e("span",[t._v("IB 幣 "),e("span",{staticClass:"nub"},[t._v("50")])]),t.istask?e("p",[t._v("2019年04月01日至2020年02月01日")]):t._e()]),t.istask?e("span",{staticClass:"tex texp"},[t._v("任務完成")]):e("span",{staticClass:"tex"},[t._v("任務完成")])])],1)},c=[],o={name:"task",props:{istask:{type:Boolean,default:!1},isClickTask:{type:Function,default:function(){}}},data:function(){return{}},methods:{}},l=o,r=(e("d2e5"),e("c701")),u=Object(r["a"])(l,n,c,!1,null,"1e252fc9",null),d=u.exports,C=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"replace-filter"},[a("el-dialog",{attrs:{visible:t.isDialogShow,"show-close":!1},on:{"update:visible":function(s){t.isDialogShow=s}}},[a("div",{staticClass:"content"},[a("div",{staticClass:"imgs"},[a("img",{staticStyle:{width:"4.5rem"},attrs:{src:e("e679"),alt:""}})]),a("h1",[t._v("更換10次濾心")]),a("span",[t._v("凡註冊為會員後，不限濾心更換方式、機型，完成十次更換，即可獲得2000IB幣")]),a("div",{staticClass:"text"},[a("p",[t._v("注意事項：")]),a("p",[t._v("1、本公司保有最終更改決定權；")]),a("p",[t._v("2、需確保濾心更換時間，於本網站上配對完成，若未線上配置直接更換，視同無效")])]),a("div",{staticClass:"btn"},[a("span",{on:{click:t.confirmClick}},[t._v("我知道了")])])])])],1)},f=[],g={name:"replace-filter",props:{isDialogShow:{type:Boolean,default:!1},confirmClick:{type:Function,default:function(){}}},data:function(){return{}}},m=g,k=(e("0378"),Object(r["a"])(m,C,f,!1,null,"ef4c28d2",null)),p=k.exports,h=e("4da3"),v=e("98b3"),b={components:{TaskCard:d,ReplaceFilter:p,Blank:h["a"]},data:function(){return{num:0,isShowReplace:!1,userName:{}}},mounted:function(){this.userName=v["a"].getItem("userName")},methods:{clickMeVouchers:function(){this.$router.push({name:"meVouchers"})},clickToExchange:function(){this.$router.push({name:"toExchange"})},isClickTask:function(){this.isShowReplace=!0},ClickReplace:function(){this.isShowReplace=!1}}},I=b,w=(e("5248"),Object(r["a"])(I,a,i,!1,null,"1025a56d",null));s["default"]=w.exports},d2e5:function(t,s,e){"use strict";e("44c0")},d45c:function(t,s,e){t.exports=e.p+"static/img/blank@2x.e3f7a2df.png"},dc6f:function(t,s,e){"use strict";e("1816")},e679:function(t,s){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-6cad58b6.b7ae91ba.js.map