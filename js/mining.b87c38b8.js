(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mining"],{"13e9":function(t,e,n){},5889:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("d4ec"),s=n("bee2"),i=function(){function t(e){Object(a["a"])(this,t),this.echart=echarts.init(e),this.echart.setOption({tooltip:{show:!1},color:["#2D92FD","#57AEFD","#57AEFD","#1870D9","#1B7AE7","#1E84F5","#2D92FD","#409FFD","#57AEFD","#6BBBFD"],series:[{name:"访问来源",type:"pie",radius:["50%","80%"],avoidLabelOverlap:!1,label:{show:!0,position:"inside",color:"#fff",fontSize:"10"},animation:!1,emphasis:{scaleSize:10},startAngle:109,labelLine:{show:!1},data:[{value:1,name:"0"},{value:1,name:"1"},{value:1,name:"2"},{value:1,name:"3"},{value:1,name:"4"},{value:1,name:"5"},{value:1,name:"6"},{value:1,name:"7"},{value:1,name:"8"},{value:1,name:"9"}]}]})}return Object(s["a"])(t,[{key:"set",value:function(t){this.echart.setOption({color:t})}}]),t}()},"67d3":function(t,e,n){"use strict";n("13e9")},"7db0":function(t,e,n){"use strict";var a=n("23e7"),s=n("b727").find,i=n("44d2"),r=n("ae40"),o="find",c=!0,u=r(o);o in[]&&Array(1)[o]((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!u},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},"89b4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mining"},[a("div",{staticClass:"miningTop"},[a("div",{staticClass:"miningMenus"},[a("div",{staticClass:"miningMenusText"},[t._m(0),a("span",[t._v(t._s(t.$t("mining.text1")))])]),a("div",{staticClass:"lang"},[a("div",{staticClass:"language-container"},[a("img",{attrs:{src:n("f211")},on:{click:function(e){t.showLang=!0}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showLang,expression:"showLang"}],staticClass:"overlay",on:{click:function(e){t.showLang=!1}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showLang,expression:"showLang"}],staticClass:"language-options"},[a("div",{class:"en"==t.$i18n.locale?"active":"",on:{click:function(e){return t.changeLanguage("en")}}},[a("img",{attrs:{src:n("bc04")}}),a("span",[t._v("English")])]),a("div",{class:"zh"==t.$i18n.locale?"active":"",on:{click:function(e){return t.changeLanguage("zh")}}},[a("img",{attrs:{src:n("be30")}}),a("span",[t._v("中文")])]),a("div",{class:"ko"==t.$i18n.locale?"active":"",on:{click:function(e){return t.changeLanguage("ko")}}},[a("img",{attrs:{src:n("ed4a")}}),a("span",[t._v("한국어")])]),a("div",{class:"ja"==t.$i18n.locale?"active":"",on:{click:function(e){return t.changeLanguage("ja")}}},[a("img",{attrs:{src:n("19ca")}}),a("span",[t._v("日本語")])]),a("div",{class:"hk"==t.$i18n.locale?"active":"",on:{click:function(e){return t.changeLanguage("hk")}}},[a("img",{attrs:{src:n("5c5c")}}),a("span",[t._v("繁体中文")])])])]),a("img",{attrs:{src:n("88d5")},on:{click:function(e){t.miningMenus=!t.miningMenus}}})]),a("van-overlay",{staticClass:"miningMenusNav",attrs:{show:t.miningMenus},on:{click:function(e){t.miningMenus=!t.miningMenus}}},[a("div",{on:{click:function(t){t.stopPropagation()}}},[a("div",{on:{click:function(e){return t.$router.push("./margin")}}},[a("img",{attrs:{src:n("91cd")}}),a("span",[t._v(t._s(t.$t("mining.text3")))]),a("img",{attrs:{src:n("93cf")}})]),a("div",{on:{click:function(e){return t.$router.push("./communityManagement")}}},[a("img",{attrs:{src:n("d9eb")}}),a("span",[t._v(t._s(t.$t("mining.text6")))]),a("img",{attrs:{src:n("93cf")}})]),a("div",{on:{click:t.goDAO}},[a("img",{attrs:{src:n("3a4c")}}),a("span",[t._v("DAO")]),a("img",{attrs:{src:n("93cf")}})]),a("div",{on:{click:function(e){return t.$router.push("/swap")}}},[a("img",{attrs:{src:n("a3e4")}}),a("span",[t._v("PinSwap")]),a("img",{attrs:{src:n("93cf")}})]),a("div",{on:{click:function(e){return t.$router.push("/token-info")}}},[a("img",{attrs:{src:n("398a")}}),a("span",[t._v(t._s(t.$t("mining.text8")))]),a("img",{attrs:{src:n("93cf")}})]),a("div",{on:{click:function(e){return t.$router.push("/assets")}}},[a("img",{attrs:{src:n("a7ec")}}),a("span",[t._v(t._s(t.$t("mining.text9")))]),a("img",{attrs:{src:n("93cf")}})])])])],1),a("div",{staticClass:"luckyMining"},[a("span",{staticClass:"title"},[t._v(t._s(t.$t("mining.text39")))]),a("span",[t._v(t._s(t.canDraw.toFixed(6)))]),a("van-button",{on:{click:t.showdraw1}},[t._v(t._s(t.$t("mining.text12")))]),a("div",{staticClass:"luckyMiningData"},[a("div",{on:{click:function(e){return t.$router.push("/Computingpower")}}},[a("span",[t._v(t._s(t.$t("mining.text13")))]),a("span",[t._v(t._s(t.myPower))])]),a("div"),a("div",{on:{click:function(e){return t.$router.push({path:"/record",query:{type:3}})}}},[a("span",[t._v(t._s(t.$t("mining.text14")))]),a("span",[t._v(t._s(t.totalMing))])])])],1)]),a("div",{staticClass:"joinGroup"},[a("div",{on:{click:function(e){return t.$refs.fastJoin.swithShow()}}},[a("img",{attrs:{src:n("9b70")}}),a("span",[t._v(t._s(t.$t("mining.text40")))])]),a("div",{on:{click:t.gotoPledge}},[a("img",{attrs:{src:n("19ea6")}}),a("span",[t._v(t._s(t.$t("mining.text41")))])]),a("div",{on:{click:t.gotoDestroy}},[a("img",{attrs:{src:n("dac0")}}),a("span",[t._v(t._s(t.$t("mining.text42")))])]),a("div",{on:{click:t.goDAO}},[a("img",{attrs:{src:n("e642")}}),a("span",[t._v("DAO")])])]),a("div",{staticClass:"latest-join"},[a("div",{staticClass:"LatestParticipation"},[a("span",[t._v(t._s(t.$t("mining.text26")))]),a("span",{on:{click:function(e){return t.$router.push("/history")}}},[t._v(t._s(t.$t("mining.text27"))+">")])]),t._l(t.latestJoin,(function(e,s){return a("div",{key:e.id,staticClass:"Matching",on:{click:function(n){return t.$router.push({path:"/Piece",query:{id:e.id}})}}},[a("div",{staticClass:"center"},[a("div",{staticClass:"content"},[a("div",{staticClass:"canvas"},[a("div",{class:"pieChart"+s}),a("div",{staticClass:"overlay"}),a("div",{staticClass:"Middlenumber"},[a("div",{staticClass:"up"}),a("i"),a("div",{staticClass:"center-number"},[t._v(t._s(e.luckyNum))]),a("div",{staticClass:"down"})])]),a("div",{staticClass:"Leftinformation"},[a("div",{staticClass:"leftMatching"},[1===e.status?a("img",{directives:[{name:"show",rawName:"v-show",value:"zh"==t.$i18n.locale,expression:"$i18n.locale == 'zh'"}],attrs:{src:n("fb3f")}}):2===e.status?a("img",{directives:[{name:"show",rawName:"v-show",value:"zh"==t.$i18n.locale,expression:"$i18n.locale == 'zh'"}],attrs:{src:n("758e")}}):3===e.status?a("img",{directives:[{name:"show",rawName:"v-show",value:"zh"==t.$i18n.locale,expression:"$i18n.locale == 'zh'"}],attrs:{src:n("fd98")}}):4===e.status?a("img",{directives:[{name:"show",rawName:"v-show",value:"zh"==t.$i18n.locale,expression:"$i18n.locale == 'zh'"}],attrs:{src:n("e49d")}}):a("img",{directives:[{name:"show",rawName:"v-show",value:"zh"==t.$i18n.locale,expression:"$i18n.locale == 'zh'"}],attrs:{src:n("4b7f")}}),1===e.status?a("img",{directives:[{name:"show",rawName:"v-show",value:"en"==t.$i18n.locale,expression:"$i18n.locale == 'en'"}],attrs:{src:n("d93f")}}):2===e.status?a("img",{directives:[{name:"show",rawName:"v-show",value:"en"==t.$i18n.locale,expression:"$i18n.locale == 'en'"}],attrs:{src:n("6a71")}}):3===e.status?a("img",{directives:[{name:"show",rawName:"v-show",value:"en"==t.$i18n.locale,expression:"$i18n.locale == 'en'"}],attrs:{src:n("d99a")}}):4===e.status?a("img",{directives:[{name:"show",rawName:"v-show",value:"en"==t.$i18n.locale,expression:"$i18n.locale == 'en'"}],attrs:{src:n("61a0")}}):a("img",{directives:[{name:"show",rawName:"v-show",value:"en"==t.$i18n.locale,expression:"$i18n.locale == 'en'"}],attrs:{src:n("6eda")}})]),a("span",[t._v(t._s(t.$t("mining.text28"))+": "+t._s(e.id))]),a("span",{directives:[{name:"show",rawName:"v-show",value:[3,5].includes(e.status),expression:"[3, 5].includes(item.status)"}]},[t._v(t._s(t.$t("mining.text43"))+t._s(e.awardBlock))]),a("span",{directives:[{name:"show",rawName:"v-show",value:[3,5].includes(e.status),expression:"[3, 5].includes(item.status)"}]},[t._v(t._s(t.$t("mining.text44"))+t._s(Number(e.awardBlock)+10))]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.players<10,expression:"item.players < 10"}]},[t._v(t._s(t.$t("mining.text45"))),a("span",[t._v(t._s(e.players))]),t._v("/10")]),a("div",{staticClass:"Matchdetails"},[a("div",{staticClass:"usdt"},[a("img",{attrs:{src:n("9a21")}}),a("span",[a("span",[t._v(t._s(e.payment))]),t._v(" PIN")])]),e.isPin?a("button",{staticClass:"isJoin",on:{click:function(e){return e.stopPropagation(),t.$refs.fastJoin.swithShow()}}},[t._v(t._s(t.$t("mining.text32")))]):[[3,5].includes(e.status)?a("button",{staticClass:"isJoin"},[t._v(t._s(t.$t("mining.text51")))]):a("button",{attrs:{disabled:1!==e.status},on:{click:function(e){return e.stopPropagation(),t.$refs.fastJoin.swithShow()}}},[t._v(t._s(t.$t("mining.text33")))])]],2)])]),a("div",{staticClass:"footer"},[1===e.status?[t._v(t._s(t.$t("mining.text46")))]:2===e.status?[t._v(t._s(t.$t("mining.text47")))]:3===e.status?[t._v(t._s(t.$t("mining.text48"))),a("span",{domProps:{innerHTML:t._s(e.hash)}})]:4===e.status?[t._v(t._s(t.$t("mining.text49")))]:[t._v(t._s(t.$t("mining.text50")))]],2)])])}))],2),a("van-overlay",{attrs:{show:t.showdraw},on:{click:t.showdraw1}},[a("div",{staticClass:"wrapper1"},[a("div",{staticClass:"Boundunion",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.$t("mining.text39")))]),a("span",[t._v(t._s(t.canDraw.toFixed(6)))])]),a("div",{staticClass:"Bind"},[a("div",[a("div",[a("span",[t._v(t._s(t.$t("mining.text54")))]),a("span",[t._v(t._s(t.Fixedvote.toFixed(6)))])]),a("i"),a("div",[a("span",[t._v(t._s(t.$t("mining.text55")))]),a("span",[t._v(t._s(t.power))])])])]),a("span",[t._v(t._s(t.$t("mining.text57"))),a("span",[t._v(t._s(t.actualAmount.toFixed(6)))])]),a("van-button",{on:{click:t.registerClick}},[t._v(" "+t._s(t.$t("mining.text56")))])],1)])]),a("upgrade",{ref:"upgrade"}),a("fast-join",{ref:"fastJoin",on:{refreshList:t.refreshList}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",[a("span",[t._v("Pin")]),t._v("Swap")]),a("img",{attrs:{src:n("fb74")}})])}],i=(n("99af"),n("7db0"),n("4160"),n("baa5"),n("fb6a"),n("a9e3"),n("b680"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),r=n("5530"),o=n("5889"),c={components:{upgrade:function(){return n.e("transaction").then(n.bind(null,"742c"))},"fast-join":function(){return n.e("transaction").then(n.bind(null,"e531"))}},data:function(){return{miningMenus:!1,canDraw:0,myPower:0,totalMing:0,pledgePower:0,Fixedvote:0,daoPower:0,power:0,actualAmount:0,lv:0,getShiftSwitch:!1,interval:-1,isStart:!1,showdraw:!1,showLang:!1}},computed:Object(r["a"])({},Vuex.mapState(["latestJoin"])),created:function(){this.$i18n.locale=localStorage.getItem("language")||"zh",this.$contracts&&this.init()},methods:{stop:function(){return vant.Toast.fail("暂未开放！")},goDAO:function(){location.href="https://aipindao.github.io"},init:function(){var t=this;this.miningMenus=!1,this.latestJoin.length>0&&this.$nextTick((function(){for(var e=0;e<t.latestJoin.length;e++){for(var n=document.querySelector(".pieChart".concat(e)),a=["#10499A","#1155B4","#1666CB","#1870D9","#1B7AE7","#1E84F5","#2D92FD","#409FFD","#57AEFD","#6BBBFD"],s=["#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5"],i=0;i<t.latestJoin[e].players;i++)s[i]=a[i];var r=new o["a"](n);r.set(s),r.echart.dispatchAction({type:"highlight",dataIndex:t.latestJoin[e].luckyNum})}}));var e=new this.$web3.BatchRequest,n=[];e.add(this.$contracts.Pin.methods.getWorldNewRound().call.request({from:this.$address})),e.add(this.$contracts.Mine.methods.isStart().call.request({from:this.$address})),e.add(this.$contracts.Mine.methods.mineInfo().call.request({from:this.$address})),e.add(this.$contracts.Mine.methods.drawPin().call.request({from:this.$address})),e.requestManager.sendBatch(e.requests,(function(e,a){if(!e){var s=("string"===typeof a[0]?a[0]:a[0].result).decode(["uint256[]"]),c=a[2].result.decode([{name:"myPower",type:"uint256"},{name:"mined",type:"uint256"}]),u=c.myPower,l=c.mined,d=a[3].result.decode([{name:"v",type:"uint256"},{name:"v2",type:"uint256"},{name:"power",type:"uint256"}]),v=d.v,m=d.v2,h=d.power;if(t.isStart=a[1].result.decode(["bool"]),t.myPower=u,t.totalMing=l.fromWei().toFixed(4),t.canDraw=v.fromWei(),t.Fixedvote=m.fromWei(),t.power=h,t.actualAmount=v.toBN().minus(m).toFixed().fromWei(),s.length>0){var g=new t.$web3.BatchRequest,p=s.length>3?3:s.length;g.add(t.$web3.eth.getBlockNumber.request());for(var f=0;f<p;f++)g.add(t.$contracts.Pin.methods.rounds(s[f]).call.request({from:t.$address})),g.add(t.$contracts.Pin.methods.getRoundPlayers(s[f]).call.request({from:t.$address}));g.requestManager.sendBatch(g.requests,function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a,i){var c,u,l,d,v,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a){e.next=16;break}c=Number("string"===typeof i[0]?i[0]:i[0].result),u=[],l=[],i.slice(1).forEach((function(e,n){if(n%2===0)u.push(e.result.decode([{name:"payment",type:"uint256"},{name:"prepareBlock",type:"uint256"},{name:"power",type:"uint256"},{name:"stallIndex",type:"uint8"},{name:"luckyValue",type:"uint8"},{name:"sender",type:"address"}]));else{var a=e.result.decode(["address[]"]);l.push({isPin:a.find((function(e){return e.toLowerCase()===t.$address.toLowerCase()})),players:a.length})}})),d=0;case 5:if(!(d<u.length)){e.next=14;break}return v=t.getDrawState(Number(u[d].prepareBlock),Number(u[d].luckyValue),c),e.next=9,t.getBlockHash(Number(u[d].prepareBlock)+10,u[d].luckyValue);case 9:m=e.sent,n.push(Object(r["a"])(Object(r["a"])({},l[d]),{},{status:v,id:s[d],hash:m,payment:u[d].payment.fromWei(),awardBlock:u[d].prepareBlock+10,luckyNum:u[d].luckyValue<10?u[d].luckyValue:"?"}));case 11:d++,e.next=5;break;case 14:t.$store.commit("latestJoin",n),t.$nextTick((function(){for(var t=0;t<p;t++){for(var e=document.querySelector(".pieChart".concat(t)),a=["#10499A","#1155B4","#1666CB","#1870D9","#1B7AE7","#1E84F5","#2D92FD","#409FFD","#57AEFD","#6BBBFD"],s=["#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5"],i=0;i<n[t].players;i++)s[i]=a[i];var r=new o["a"](e);r.set(s),r.echart.dispatchAction({type:"highlight",dataIndex:n[t].luckyNum})}}));case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}})),this.interval=setInterval(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$contracts.Mine.methods.drawPin().call({from:t.$address},(function(e,n){e||(t.canDraw=n.v.fromWei(),t.Fixedvote=n.v2.fromWei(),t.power=n.power,t.actualAmount=n.v.toBN().minus(n.v2).toFixed().fromWei())}));case 1:case"end":return e.stop()}}),e)}))),5e3)},getBlockHash:function(t,e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s,i,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.$web3.eth.getBlock(t);case 2:return s=a.sent,i="0x"===s.hash.slice(0,2)?s.hash:"0x".concat(s.hash),r="".concat(i.slice(0,5),"...").concat(i.slice(-30)),o=r.lastIndexOf(e),a.abrupt("return","".concat(r.slice(0,o),'<span style="color: #FDB439;">').concat(r.slice(o,o+1),"</span>").concat(r.slice(o+1)));case 7:case"end":return a.stop()}}),a)})))()},getDrawState:function(t,e,n){return 0===t?1:n>=t&&n<=t+10?2:n>t+10&&e>=0&&e<10?3:n>t&&n<t+255?4:5},refreshList:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},drawPin:function(){var t=this;if(!this.isStart)return vant.Toast.fail("合约暂未生效！");if(!Number(this.canDraw))return vant.Toast.fail(this.$t("mining.text19"));var e=this.$contracts.Mine.methods.drawPin();e.call({from:this.$address},(function(n,a){n||e.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),t.init(),t.$getBalance(),vant.Toast.success(t.$t("mining.text20")),t.showdraw=!1})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))},startTeam:function(){this.miningMenus=!1,vant.Toast.fail(this.$t("mining.text21"))},registerClick:function(){this.drawPin()},gotoPledge:function(){this.$router.push("/partake-pledge")},gotoDestroy:function(){this.$router.push("/destroy")},changeLanguage:function(t){this.$i18n.locale=t,localStorage.setItem("language",t),this.showLang=!1},switchChain:function(){return window.tronWeb?(location.href="".concat(location.origin,"/v2/#/transaction"),!1):vant.Toast.fail("访问V2.0系统请切换到波场链！")},showdraw1:function(){this.showdraw=!this.showdraw}},destroyed:function(){clearInterval(this.interval)}},u=c,l=u,d=(n("67d3"),n("2877")),v=Object(d["a"])(l,a,s,!1,null,"e924c8c4",null);e["default"]=v.exports},baa5:function(t,e,n){var a=n("23e7"),s=n("e58c");a({target:"Array",proto:!0,forced:s!==[].lastIndexOf},{lastIndexOf:s})},bee2:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return s}))},d4ec:function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},e58c:function(t,e,n){"use strict";var a=n("fc6a"),s=n("a691"),i=n("50c4"),r=n("a640"),o=n("ae40"),c=Math.min,u=[].lastIndexOf,l=!!u&&1/[1].lastIndexOf(1,-0)<0,d=r("lastIndexOf"),v=o("indexOf",{ACCESSORS:!0,1:0}),m=l||!d||!v;t.exports=m?function(t){if(l)return u.apply(this,arguments)||0;var e=a(this),n=i(e.length),r=n-1;for(arguments.length>1&&(r=c(r,s(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}:u}}]);