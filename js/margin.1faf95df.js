(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["margin"],{"057f":function(t,e,n){var r=n("fc6a"),a=n("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return a(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?o(t):a(r(t))}},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),i=n("17c2"),s=n("9112");for(var o in a){var c=r[o],u=c&&c.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(f){u.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),i=n("ae40"),s=a("forEach"),o=i("forEach");t.exports=s&&o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"17ca":function(t,e,n){},2618:function(t,e,n){},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5bb1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbarBox"},[n("div",{staticClass:"Margin navChild"},[n("div",{staticClass:"MarginContent1"},[n("div",{staticClass:"MarginContent"},[n("div",{staticClass:"MarginContentNumber",on:{click:function(e){return t.$router.push({path:"/record",query:{type:1}})}}},[n("span",[t._v(t._s(t.earnestAmount))]),n("div",{staticClass:"line"},t._l(6,(function(t){return n("div",{key:t})})),0)]),n("div",{staticClass:"MarginContentNumberText"},[n("div",[t._v(t._s(t.$t("margin.text1"))+"(PIN)")])]),n("div",{staticClass:"MarginContentInput"},[n("span",[t._v(t._s(t.$t("margin.text3")))]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.input]}}),n("span",[t._v("PIN")])])]),n("div",{staticClass:"selectNumber"},t._l(t.selectNumberList,(function(e,r){return n("div",{key:r,class:{active:t.active===r},on:{click:function(n){t.active=r,t.value=e}}},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"balance"},[t._v(" "+t._s(t.$t("margin.text4"))+" "+t._s(t.balance.pin)+" PIN ")]),n("div",{staticClass:"MarginContentButton"},[n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferIn}},[t._v(t._s(t.$t("margin.text5")))]),n("van-button",{directives:[{name:"ButClickLimit",rawName:"v-ButClickLimit"}],on:{click:t.transferOut}},[t._v(t._s(t.$t("margin.text6")))])],1),n("div",{staticClass:"MarginText"},[n("span",[t._v(t._s(t.$t("margin.text1")))]),n("p",[t._v(t._s(t.$t("margin.text7")))])])])])]),n("self-authorize",{ref:"authorize",staticClass:"marginAuthorize",on:{send:t.transferIn}})],1)},a=[],i=(n("caad"),n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),s=n("5530"),o={components:{"self-authorize":function(){return n.e("transaction").then(n.bind(null,"38fc"))}},data:function(){return{active:"",earnestAmount:0,value:"",orderResult:!1,settingShow:!1,maxEarnestAmount:1e3,isStart:!1}},computed:Object(s["a"])({},Vuex.mapState(["balance"])),created:function(){this.$contracts&&this.init()},methods:{init:function(){var t=this,e=new this.$web3.BatchRequest;e.add(this.$contracts.Pin.methods.isStart().call.request({from:this.$address})),e.add(this.$contracts.Pin.methods.players(this.$address).call.request({from:this.$address})),e.add(this.$contracts.Pin.methods.getMyNewRounds(this.$address).call.request({from:this.$address})),e.add(this.$web3.eth.getBlockNumber.request()),e.requestManager.sendBatch(e.requests,function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n,r){var a,i,s,o,c,u,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=13;break}if(a=r[1].result.decode([{name:"drawablePower",type:"uint256"},{name:"earnestAmount",type:"uint256"}]),i=a.earnestAmount,s=r[2].result.decode(["uint256[]"]),t.isStart=("string"===typeof r[0]?r[0]:r[0].result).decode(["bool"]),t.earnestAmount=i.fromWei().toFixed(4),!(s.length>0)){e.next=13;break}return e.next=8,t.$contracts.Pin.methods.rounds(s[0]).call({from:t.$address});case 8:o=e.sent,c=o.prepareBlock,u=o.luckyValue,f=t.getDrawState(Number(c),Number(u),Number(r[3].result)),t.orderResult=![3,5].includes(f);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},input:function(){this.value=this.value.replace(/[^\d]/g,"")},getDrawState:function(t,e,n){return 0===t?1:n>=t&&n<=t+10?2:n>t+10&&e>=0&&e<10?3:n>t&&n<t+255?4:5},transferIn:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isStart){e.next=2;break}return e.abrupt("return",vant.Toast.fail("合约暂未生效！"));case 2:return n=Number(t.value),r=Number(t.balance.pin),e.next=6,t.$contracts.PinToken.methods.allowance(t.$address,t.$contracts.Pin._address).call({from:t.$address});case 6:if(a=e.sent.fromWei(),""!=n){e.next=11;break}return e.abrupt("return",vant.Toast.fail(t.$t("margin.text16")));case 11:if(!(n>r)){e.next=15;break}return e.abrupt("return",vant.Toast.fail(t.$t("margin.text18")));case 15:if(!(n>a)){e.next=20;break}return t.$refs.authorize.amount=n,t.$refs.authorize.contractName="PinToken",t.$refs.authorize.contractAddress=t.$contracts.Pin._address,e.abrupt("return",t.$refs.authorize.toggle());case 20:i=t.$contracts.Pin.methods.rechargeEarnestAmount(n.toWei()),i.call({from:t.$address},(function(e,n){e||i.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),t.settingShow=!1,t.active="",t.value="",t.init(),t.$getBalance(),vant.Toast.success(t.$t("margin.text21"))})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}));case 22:case"end":return e.stop()}}),e)})))()},transferOut:function(){var t=this,e=Number(this.value),n=Number(this.earnestAmount);if(!this.isStart)return vant.Toast.fail("合约暂未生效！");if(""==e)return vant.Toast.fail(this.$t("margin.text16"));if(e>n)return vant.Toast.fail(this.$t("margin.text22"));if(this.orderResult)return vant.Toast.fail(this.$t("margin.text19"));var r=this.$contracts.Pin.methods.drawEarnestAmount(this.value.toWei());r.call({from:this.$address},(function(e,n){e||r.send({from:t.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("transaction.text7"),forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.clear(),t.value="",t.init(),t.$getBalance(),vant.Toast.success(t.$t("margin.text23"))})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail(t.$t("transaction.text13"))}))}))}}},c=o,u=c,f=(n("8876"),n("7141"),n("2877")),l=Object(f["a"])(u,r,a,!1,null,"f6c5a480",null);e["default"]=l.exports},7141:function(t,e,n){"use strict";n("2618")},"746f":function(t,e,n){var r=n("428f"),a=n("5135"),i=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||s(e,t,{value:i.f(t)})}},8876:function(t,e,n){"use strict";n("17ca")},a4d3:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("d066"),s=n("c430"),o=n("83ab"),c=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),v=n("861d"),m=n("825a"),b=n("7b0b"),h=n("fc6a"),p=n("c04e"),g=n("5c6c"),y=n("7c73"),w=n("df75"),$=n("241c"),O=n("057f"),S=n("7418"),x=n("06cf"),P=n("9bf2"),T=n("d1e7"),C=n("9112"),k=n("6eeb"),L=n("5692"),j=n("f772"),N=n("d012"),_=n("90e3"),E=n("b622"),M=n("e538"),A=n("746f"),D=n("d44e"),B=n("69f3"),R=n("b727").forEach,q=j("hidden"),I="Symbol",V="prototype",z=E("toPrimitive"),G=B.set,H=B.getterFor(I),F=Object[V],W=a.Symbol,J=i("JSON","stringify"),Q=x.f,K=P.f,U=O.f,X=T.f,Y=L("symbols"),Z=L("op-symbols"),tt=L("string-to-symbol-registry"),et=L("symbol-to-string-registry"),nt=L("wks"),rt=a.QObject,at=!rt||!rt[V]||!rt[V].findChild,it=o&&f((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(F,e);r&&delete F[e],K(t,e,n),r&&t!==F&&K(F,e,r)}:K,st=function(t,e){var n=Y[t]=y(W[V]);return G(n,{type:I,tag:t,description:e}),o||(n.description=e),n},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,n){t===F&&ct(Z,e,n),m(t);var r=p(e,!0);return m(n),l(Y,r)?(n.enumerable?(l(t,q)&&t[q][r]&&(t[q][r]=!1),n=y(n,{enumerable:g(0,!1)})):(l(t,q)||K(t,q,g(1,{})),t[q][r]=!0),it(t,r,n)):K(t,r,n)},ut=function(t,e){m(t);var n=h(e),r=w(n).concat(mt(n));return R(r,(function(e){o&&!lt.call(n,e)||ct(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=p(t,!0),n=X.call(this,e);return!(this===F&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,q)&&this[q][e])||n)},dt=function(t,e){var n=h(t),r=p(e,!0);if(n!==F||!l(Y,r)||l(Z,r)){var a=Q(n,r);return!a||!l(Y,r)||l(n,q)&&n[q][r]||(a.enumerable=!0),a}},vt=function(t){var e=U(h(t)),n=[];return R(e,(function(t){l(Y,t)||l(N,t)||n.push(t)})),n},mt=function(t){var e=t===F,n=U(e?Z:h(t)),r=[];return R(n,(function(t){!l(Y,t)||e&&!l(F,t)||r.push(Y[t])})),r};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=_(t),n=function(t){this===F&&n.call(Z,t),l(this,q)&&l(this[q],e)&&(this[q][e]=!1),it(this,e,g(1,t))};return o&&at&&it(F,e,{configurable:!0,set:n}),st(e,t)},k(W[V],"toString",(function(){return H(this).tag})),k(W,"withoutSetter",(function(t){return st(_(t),t)})),T.f=lt,P.f=ct,x.f=dt,$.f=O.f=vt,S.f=mt,M.f=function(t){return st(E(t),t)},o&&(K(W[V],"description",{configurable:!0,get:function(){return H(this).description}}),s||k(F,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),R(w(nt),(function(t){A(t)})),r({target:I,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!o},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:vt,getOwnPropertySymbols:mt}),r({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(b(t))}}),J){var bt=!c||f((function(){var t=W();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));r({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var r,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(r=e,(v(e)||void 0!==t)&&!ot(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),a[1]=e,J.apply(null,a)}})}W[V][z]||C(W[V],z,W[V].valueOf),D(W,I),N[q]=!0},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),i=n("56ef"),s=n("fc6a"),o=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),a=o.f,u=i(r),f={},l=0;while(u.length>l)n=a(r,e=u[l++]),void 0!==n&&c(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),i=n("fc6a"),s=n("06cf").f,o=n("83ab"),c=a((function(){s(1)})),u=!o||c;r({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(i(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);