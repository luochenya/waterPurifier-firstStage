(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-607cf982"],{1816:function(t,e,s){},"4da3":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.blankOne?a("div",{staticClass:"blank"},[a("img",{attrs:{src:s("d45c"),alt:""}}),a("h2",[t._v("查找產品為空")]),a("span",[t._v("若無對應產品 ，請先掃描該機體上之QRco")]),a("span",[t._v("在進行產品保固登入後，即可開始使用淨水管家服務")])]):t._e(),t.blankTow?a("div",{staticClass:"blank_2"},[a("img",{attrs:{src:s("d45c"),alt:""}}),a("h2",[t._v("查無此關鍵字")])]):t._e(),t.blankThree?a("div",{staticClass:"blank_3"},[a("img",{attrs:{src:s("d45c"),alt:""}}),a("h2",[t._v("功能暫未開放，敬請期待！")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"btn",on:{click:t.toClick}},[t._v(" 我知道了 ")])]):t._e()])},n=[],i={name:"blank",props:{blankOne:{type:Boolean,default:!1},blankTow:{type:Boolean,default:!1},blankThree:{type:Boolean,default:!1},toClick:{type:Function,default:function(){}}},data:function(){return{}}},o=i,c=(s("dc6f"),s("c701")),r=Object(c["a"])(o,a,n,!1,null,"f7f09d3c",null);e["a"]=r.exports},5735:function(t,e,s){"use strict";s("8fbe")},"8fbe":function(t,e,s){},"98b3":function(t,e,s){"use strict";var a="sakura";e["a"]={setItem:function(t,e,s){if(s){var n=this.getItem(s);n[t]=e,this.setItem(s,n)}else{var i=this.getStorage();i[t]=e,window.sessionStorage.setItem(a,JSON.stringify(i))}},getItem:function(t,e){if(e){var s=this.getItem(e);if(s)return s[t]}return this.getStorage()[t]},getStorage:function(){return JSON.parse(window.sessionStorage.getItem(a)||"{}")},clear:function(t,e){var s=this.getStorage();if(e){if(!s[e])return;delete s[e][t]}else delete s[t];window.sessionStorage.setItem(a,JSON.stringify(s))}}},a564:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-ponents"},[t._m(0),t.isShowBlank?s("el-row",{staticClass:"product-row",attrs:{gutter:30}},t._l(t.custWaterProdList,(function(e,a){return s("el-col",{key:a,attrs:{sm:12}},[s("div",{staticClass:"container-card",staticStyle:{"margin-bottom":"3rem"},on:{click:function(s){return t.gotoProduct(e.CustProdId)}}},[s("el-card",[s("div",{staticClass:"product-top"},[s("div",{staticClass:"imgs"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.ProdImage,expression:"item.ProdImage"}],attrs:{alt:""}})]),s("div",{staticClass:"btn",on:{click:function(s){return t.gotoProduct(e.CustProdId)}}},[s("span",[t._v("更換濾心")])])]),s("div",{staticClass:"tex"},[s("h1",[t._v("型號："+t._s(e.ModelTypeName))]),s("span",[t._v("製造號碼："+t._s(e.MFNO))])]),s("div",{staticClass:"map"},[t._v("安裝地址："+t._s(e.Addr))])])],1)])})),1):s("blank"),s("Loading",{attrs:{show:t.isShowLoading}})],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title"},[s("h1",[t._v("我的產品")]),s("span",[t._v("MY PRODUCT")])])}],i=(s("e18c"),s("4da3")),o=s("4ec3"),c=s("98b3"),r={name:"search-ponents",components:{Blank:i["a"]},data:function(){return{isShowLoading:!0,isShowBlank:!0,custWaterProdList:[],EncodeProductId:"",LINEMid:""}},mounted:function(){this.EncodeProductId=c["a"].getItem("EncodeProductId"),this.LINEMid=c["a"].getItem("LINEMid"),this.EncodeProductId?this._getCustByEncodeProdcutId():this._getCustomerByLineMid()},methods:{_getCustByEncodeProdcutId:function(){var t=this,e=this.EncodeProductId;Object(o["f"])({EncodeProductId:e}).then((function(e){200===e.status&&(c["a"].setItem("CustId",e.data.Data.CustId),t._getCustWaterProdList())}))},_getCustomerByLineMid:function(){var t=this,e=this.LINEMid;Object(o["h"])({LINEMid:e}).then((function(e){200===e.status&&(c["a"].setItem("CustId",e.data.Data.CustId),t._getCustWaterProdList())})).catch((function(){t.isShowLoading=!1}))},_getCustWaterProdList:function(){var t=this;c["a"].setItem("EncodeProductId",this.EncodeProductId),c["a"].setItem("LINEMid",this.LINEMid);var e=c["a"].getItem("CustId");Object(o["g"])({CustId:e}).then((function(e){c["a"].setItem("CustProdId",e.data.Data[0].CustProdId),t.custWaterProdList=e.data.Data})).finally((function(){t.isShowLoading=!1}))},gotoProduct:function(t){this.EncodeProductId?this.$router.push({path:"/toproduct/".concat(t),query:{productid:this.EncodeProductId}}):this.$router.push({path:"/toproduct/".concat(t),query:{mid:this.LINEMid}})}}},d=r,u=(s("5735"),s("c701")),l=Object(u["a"])(d,a,n,!1,null,"6e6d44fb",null);e["default"]=l.exports},d45c:function(t,e,s){t.exports=s.p+"static/img/blank@2x.e3f7a2df.png"},dc6f:function(t,e,s){"use strict";s("1816")}}]);
//# sourceMappingURL=chunk-607cf982.f6f0e2e6.js.map