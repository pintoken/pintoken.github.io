(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["detail"],{"0cb2":function(t,e,n){var o=n("7b0b"),s=Math.floor,a="".replace,i=/\$([$&'`]|\d\d?|<[^>]*>)/g,r=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,n,c,u,l){var d=n+t.length,f=c.length,p=r;return void 0!==u&&(u=o(u),p=i),a.call(l,p,(function(o,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":i=u[a.slice(1,-1)];break;default:var r=+a;if(0===r)return o;if(r>f){var l=s(r/10);return 0===l?o:l<=f?void 0===c[l-1]?a.charAt(1):c[l-1]+a.charAt(1):o}i=c[r-1]}return void 0===i?"":i}))}},"14c3":function(t,e,n){var o=n("c6b6"),s=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==o(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},5319:function(t,e,n){"use strict";var o=n("d784"),s=n("825a"),a=n("50c4"),i=n("a691"),r=n("1d80"),c=n("8aa5"),u=n("0cb2"),l=n("14c3"),d=Math.max,f=Math.min,p=function(t){return void 0===t?t:String(t)};o("replace",2,(function(t,e,n,o){var v=o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=o.REPLACE_KEEPS_$0,h=v?"$":"$0";return[function(n,o){var s=r(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,s,o):e.call(String(s),n,o)},function(t,o){if(!v&&m||"string"===typeof o&&-1===o.indexOf(h)){var r=n(e,t,this,o);if(r.done)return r.value}var x=s(t),g=String(this),k="function"===typeof o;k||(o=String(o));var _=x.global;if(_){var b=x.unicode;x.lastIndex=0}var y=[];while(1){var T=l(x,g);if(null===T)break;if(y.push(T),!_)break;var w=String(T[0]);""===w&&(x.lastIndex=c(g,a(x.lastIndex),b))}for(var C="",I=0,$=0;$<y.length;$++){T=y[$];for(var E=String(T[0]),O=d(f(i(T.index),g.length),0),S=[],P=1;P<T.length;P++)S.push(p(T[P]));var F=T.groups;if(k){var N=[E].concat(S,O,g);void 0!==F&&N.push(F);var R=String(o.apply(void 0,N))}else R=u(E,g,O,S,F,o);O>=I&&(C+=g.slice(I,O)+R,I=O+E.length)}return C+g.slice(I)}]}))},6513:function(t,e,n){"use strict";n("d9e4")},6547:function(t,e,n){var o=n("a691"),s=n("1d80"),a=function(t){return function(e,n){var a,i,r=String(s(e)),c=o(n),u=r.length;return c<0||c>=u?t?"":void 0:(a=r.charCodeAt(c),a<55296||a>56319||c+1===u||(i=r.charCodeAt(c+1))<56320||i>57343?t?r.charAt(c):a:t?r.slice(c,c+2):i-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(t,e,n){"use strict";var o=n("6547").charAt;t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},9263:function(t,e,n){"use strict";var o=n("ad6d"),s=n("9f7f"),a=RegExp.prototype.exec,i=String.prototype.replace,r=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=s.UNSUPPORTED_Y||s.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=c||l||u;d&&(r=function(t){var e,n,s,r,d=this,f=u&&d.sticky,p=o.call(d),v=d.source,m=0,h=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,m++),n=new RegExp("^(?:"+v+")",p)),l&&(n=new RegExp("^"+v+"$(?!\\s)",p)),c&&(e=d.lastIndex),s=a.call(f?n:d,h),f?s?(s.input=s.input.slice(m),s[0]=s[0].slice(m),s.index=d.lastIndex,d.lastIndex+=s[0].length):d.lastIndex=0:c&&s&&(d.lastIndex=d.global?s.index+s[0].length:e),l&&s&&s.length>1&&i.call(s[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(s[r]=void 0)})),s}),t.exports=r},"9f54":function(t,e,n){var o={"./page-next1-disabled1.png":"859a","./page-next1.png":"38ab"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id="9f54"},"9f7f":function(t,e,n){"use strict";var o=n("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=o((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=o((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var o=n("23e7"),s=n("9263");o({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},d784:function(t,e,n){"use strict";n("ac1f");var o=n("6eeb"),s=n("d039"),a=n("b622"),i=n("9263"),r=n("9112"),c=a("species"),u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var v=a(t),m=!s((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),h=m&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!m||!h||"replace"===t&&(!u||!l||f)||"split"===t&&!p){var x=/./[v],g=n(v,""[t],(function(t,e,n,o,s){return e.exec===i?m&&!s?{done:!0,value:x.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),k=g[0],_=g[1];o(String.prototype,t,k),o(RegExp.prototype,v,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&r(RegExp.prototype[v],"sham",!0)}},d9e4:function(t,e,n){},f574:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"details"},[o("div",{staticClass:"box"},[o("div",{staticClass:"card"},[o("div",{staticClass:"message"},[o("div",[o("img",{staticClass:"messagei",attrs:{src:t.token.logoURI}}),o("div",[o("span",{on:{click:t.openSearch}},[t._v(t._s(t.token.symbol))]),o("span",[t._v(t._s(t.token.name))])])])]),o("div",{staticClass:"info-item"},[o("span",[t._v(t._s(t.$t("tokenInfo.text3")))]),o("div",[o("span",[t._v(t._s(t.token.address.slice(0,12)+"..."+t.token.address.slice(-7)))]),o("img",{staticClass:"contractcopy",attrs:{src:n("1f4e")},on:{click:function(e){return t.copy(t.token.address)}}})])]),o("div",{staticClass:"info-item"},[o("span",[t._v(t._s(t.$t("TokenInfoi.text7")))]),o("span",[t._v(t._s(t.totalSupply.toFixed(0))+" "+t._s(t.token.symbol))])])]),o("div",{staticClass:"liquidity"},[o("div",{staticClass:"title"},[o("div",[o("span",[t._v(t._s(t.$t("tokenInfo.text7")))])]),o("div",{staticClass:"tokenInfoiadd"},[o("span",[t._v("$ "+t._s(t.totalLiquidity))]),o("van-button",{attrs:{plain:"",type:"info"},on:{click:function(e){return t.go("/join-fund-pool")}}},[t._v(t._s(t.$t("tokenInfo.text8")))])],1)]),o("div",{staticClass:"assets"},[o("div",[o("div",[o("div",{staticClass:"assets1",on:{click:function(e){t.showToken0Options=!0}}},[o("img",{attrs:{src:t.mainCoin.logoURI}}),o("span",[t._v(t._s(t.mainCoin.symbol))]),o("img",{attrs:{src:n("8d5b")}}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showToken0Options,expression:"showToken0Options"}],staticClass:"options"},t._l(t.token0Options,(function(e){return o("span",{key:e.address,domProps:{textContent:t._s(e.symbol)},on:{click:function(n){return n.stopPropagation(),t.selectToken0(e)}}})})),0),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showToken0Options,expression:"showToken0Options"}],staticClass:"overlay",on:{click:function(e){e.stopPropagation(),t.showToken0Options=!1}}})]),o("div",{staticClass:"assets2"},[o("span",[t._v(t._s(t.reserve0.toFixed(0)))])])]),o("i"),o("div",[o("div",{staticClass:"assets1"},[o("img",{attrs:{src:t.token.logoURI}}),o("span",[t._v(t._s(t.token.symbol))])]),o("div",{staticClass:"assets2"},[o("span",[t._v(t._s(t.reserve1.toFixed(0)))])])])])])]),o("div",{staticClass:"turnover"},[o("div",[o("span",[t._v(t._s(t.$t("tokenInfo.text11")))]),o("span",[t._v(t._s(t.volume24Txns))])]),o("i"),o("div",{staticClass:"turnoveri"},[o("span",[t._v(t._s(t.$t("tokenInfo.text10"))+"$")]),o("span",[t._v(t._s(t.volume24USD))])])]),o("div",{staticClass:"transactions"},[o("div",{staticClass:"header"},[o("span",[t._v(t._s(t.$t("TokenInfoi.text10")))]),o("div",[o("div",{on:{click:function(e){t.showFilter=!t.showFilter}}},[o("img",{attrs:{src:n("8d5b")}}),o("span",[t._v(t._s(t.$t("TokenInfoi.text11")))])]),o("ul",{directives:[{name:"show",rawName:"v-show",value:t.showFilter,expression:"showFilter"}],staticClass:"menus"},[o("li",{on:{click:function(e){return t.filter("all")}}},[t._v(t._s(t.$t("TokenInfoi.text12")))]),o("li",{on:{click:function(e){return t.filter("buy")}}},[t._v(t._s(t.$t("TokenInfoi.text13")))]),o("li",{on:{click:function(e){return t.filter("sell")}}},[t._v(t._s(t.$t("TokenInfoi.text14")))]),o("li",{on:{click:function(e){return t.filter("add")}}},[t._v(t._s(t.$t("TokenInfoi.text15")))]),o("li",{on:{click:function(e){return t.filter("remove")}}},[t._v(t._s(t.$t("TokenInfoi.text16")))])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showFilter,expression:"showFilter"}],staticClass:"bg",on:{click:function(e){t.showFilter=!1}}})]),o("div",{on:{click:t.reload}},[o("img",{attrs:{src:n("7086")}}),o("span",[t._v(t._s(t.$t("TokenInfoi.text17")))])])]),o("ul",{staticClass:"content"},t._l(t.latestTrades[t.currentPage-1],(function(e){return o("li",{key:e},[o("div",["buy"===e.type?o("span",{staticClass:"buy"},[t._v(t._s(t.$t("TokenInfoi.text13")))]):"sell"===e.type?o("span",{staticClass:"sell"},[t._v(t._s(t.$t("TokenInfoi.text14")))]):"add"===e.type?o("span",{staticClass:"add"},[t._v(t._s(t.$t("TokenInfoi.text15")))]):"remove"===e.type?o("span",{staticClass:"remove"},[t._v(t._s(t.$t("TokenInfoi.text16")))]):t._e(),o("span",[t._v(t._s(e.amount0)+" "+t._s(t.token.symbol))])]),"buy"===e.type?o("img",{attrs:{src:n("11be")}}):"sell"===e.type?o("img",{attrs:{src:n("36b2")}}):"add"===e.type?o("img",{staticClass:"liquidity",attrs:{src:n("d1da")}}):"remove"===e.type?o("img",{staticClass:"liquidity",attrs:{src:n("546a")}}):t._e(),o("div",[o("span",{domProps:{textContent:t._s(e.time)}}),o("span",[t._v(t._s(e.amount1)+" "+t._s(t.mainCoin.symbol))])])])})),0),o("div",{staticClass:"page-button"},[o("img",{class:t.currentPage>1?"":"disabled",attrs:{src:n("fb03")("./page-prev"+(t.currentPage>1?"":"-disabled")+".png")},on:{click:t.prev}}),o("span",[t._v(t._s(t.currentPage)+"/"+t._s(t.totalPage))]),o("img",{class:t.currentPage<t.totalPage?"":"disabled",attrs:{src:n("9f54")("./page-next1"+(t.currentPage<t.totalPage?"":"-disabled1")+".png")},on:{click:t.next}})])]),o("div",{staticClass:"go-transaction"}),o("van-button",{on:{click:function(e){return t.go("/")}}},[t._v(t._s(t.$t("tokenInfo.text18")))])],1),o("search-tokens",{ref:"searchTokens",on:{select:t.select}})],1)},s=[],a=(n("99af"),n("4160"),n("fb6a"),n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("96cf"),n("1da1")),i=n("5530"),r=n("b4e9"),c=n("b9cc"),u={components:{"mk-navbar":function(){return n.e("tokenInfo").then(n.bind(null,"0861"))},"search-tokens":function(){return n.e("tokenInfo").then(n.bind(null,"bab4"))}},data:function(){return{token:r["g"],interval:-1,reserve0:"0",reserve1:"0",volume24Txns:"0",volume24USD:"0",adds:[],buys:[],sells:[],removes:[],type:"all",totalSupply:"0",mainCoin:r["h"],currentPage:1,showFilter:!1,totalLiquidity:"0",token0Options:r["n"],showToken0Options:!1,isLoad:!1}},computed:{latestTrades:function(){for(var t="all"===this.type?this.all:this["".concat(this.type,"s")],e=[],n=0;n<t.length;n+=10)e.push(t.slice(n,n+10));return e},totalPage:function(){return this.latestTrades.length},all:function(){return[].concat(this.adds).concat(this.buys).concat(this.sells).concat(this.removes).sort((function(t,e){return e.timestamp-t.timestamp}))}},created:function(){var t=this;this.$contracts&&(this.init(),this.interval=setInterval((function(){t.init()}),1e4))},methods:{copy:function(t){var e=this;this.$copyText(t).then((function(t){vant.Toast.success(e.$t("TokenInfoi.text19"))}),(function(t){vant.Toast.fail(e.$t("TokenInfoi.text20"))}))},browser:function(t){location.href=t},openSearch:function(){this.$refs.searchTokens.open()},selectToken0:function(t){if(this.showToken0Options=!1,t.symbol===this.token.symbol)return!1;this.mainCoin=t,this.init()},select:function(t){if(this.mainCoin.symbol===t.symbol)return!1;this.$router.replace({path:"/detail",query:{token:JSON.stringify(t)}}),this.init()},go:function(t){this.$router.push({path:t,query:{token:JSON.stringify(Object(i["a"])({},this.token))}})},reload:function(){this.currentPage=1,this.init()},filter:function(t){this.type=t,this.showFilter=!1},init:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$route.query.token&&(n=JSON.parse(t.$route.query.token),t.token=n.symbol===t.mainCoin.symbol?r["g"]:n),t.isLoad||(t.totalLiquidity="loading...",t.volume24Txns="loading...",t.volume24USD="loading...",t.isLoad=!0),t.$Factory.methods.getPair(t.mainCoin.address,t.token.address).call({from:t.address},(function(e,n){if(e)t.totalLiquidity=0,t.reserve0=0,t.reserve1=0,t.volume24Txns=0,t.volume24USD=0,t.adds=[],t.buys=[],t.sells=[],t.removes=[];else{var o=new t.$web3.BatchRequest,s=new t.$web3.eth.Contract(c,t.token.address);if(o.add(s.methods.totalSupply().call.request({from:t.address})),n.toBN().gt(0)){var a=new t.$web3.eth.Contract(c,t.mainCoin.address);o.add(a.methods.balanceOf(n).call.request({from:t.address})),o.add(s.methods.balanceOf(n).call.request({from:t.address}));var i=t.mainCoin.address.toLowerCase().toBN().lt(t.token.address.toLowerCase().toBN());t.getTransactions(n.toLowerCase(),i),Object(r["k"])(n.toLowerCase()).then((function(e){e&&(t.totalLiquidity=Math.floor(e.reserveUSD))})),Object(r["i"])(n.toLowerCase()).then((function(e){if(e){var n="0".toBN(),o="0".toBN();e.pairHourDatas.forEach((function(t){n=n.plus(t.hourlyTxns),o=o.plus(t.hourlyVolumeUSD)})),t.volume24Txns=n.toFixed()>0?n.toFixed():t.volume24Txns,t.volume24USD=Math.floor(o.toFixed())>0?Math.floor(o.toFixed()):t.volume24USD}}))}o.requestManager.sendBatch(o.requests,(function(e,o){e||(t.totalSupply=("string"===typeof o[0]?o[0]:o[0].result).fromWei(t.token.decimals),n.toBN().gt(0)&&(t.reserve0=o[1].result.fromWei(t.mainCoin.decimals),t.reserve1=o[2].result.fromWei(t.token.decimals)))}))}}));case 3:case"end":return e.stop()}}),e)})))()},getTransactions:function(t,e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function o(){var s,a,i,c,u,l,d,f;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Object(r["j"])(t);case 2:s=o.sent,a=s.burns,i=s.mints,c=s.swaps,u=[],l=[],d=[],f=[],a.forEach((function(t){l.push({type:"remove",amount0:(e?t.amount1:t.amount0).toFixed(4),amount1:(e?t.amount0:t.amount1).toFixed(4),time:n.formatDate(t.timestamp),timestamp:Number(t.timestamp),text:n.$t("TokenInfoi.text16")})})),i.forEach((function(t){u.push({type:"add",amount0:(e?t.amount1:t.amount0).toFixed(4),amount1:(e?t.amount0:t.amount1).toFixed(4),time:n.formatDate(t.timestamp),timestamp:Number(t.timestamp),text:n.$t("TokenInfoi.text15")})})),e?c.forEach((function(t){t.amount0In>0?d.push({type:"buy",amount0:t.amount1Out.toFixed(4),amount1:t.amount0In.toFixed(4),time:n.formatDate(t.timestamp),timestamp:Number(t.timestamp),text:n.$t("TokenInfoi.text13")}):f.push({type:"sell",amount0:t.amount1In.toFixed(4),amount1:t.amount0Out.toFixed(4),time:n.formatDate(t.timestamp),timestamp:Number(t.timestamp),text:n.$t("TokenInfoi.text13")})})):c.forEach((function(t){t.amount1In>0?d.push({type:"buy",amount0:t.amount0Out.toFixed(4),amount1:t.amount1In.toFixed(4),time:n.formatDate(t.timestamp),timestamp:Number(t.timestamp),text:n.$t("TokenInfoi.text13")}):f.push({type:"sell",amount0:t.amount0In.toFixed(4),amount1:t.amount1Out.toFixed(4),time:n.formatDate(t.timestamp),timestamp:Number(t.timestamp),text:n.$t("TokenInfoi.text13")})})),n.adds=u,n.removes=l,n.buys=d,n.sells=f;case 14:case"end":return o.stop()}}),o)})))()},formatDate:function(t){var e=Math.floor((new Date).getTime()/1e3)-Number(t);return e<60?"".concat(e).concat(this.$t("TokenInfoi.text1")):Math.floor(e/60)<60?"".concat(Math.floor(e/60)).concat(this.$t("TokenInfoi.text2")):"".concat(Math.floor(e/60/60)).concat(this.$t("TokenInfoi.text3"))},next:function(){this.currentPage!==this.totalPage&&this.currentPage++},prev:function(){1!==this.currentPage&&this.currentPage--}},destroyed:function(){clearInterval(this.interval)}},l=u,d=l,f=(n("6513"),n("2877")),p=Object(f["a"])(d,o,s,!1,null,"0307550c",null);e["default"]=p.exports},fb03:function(t,e,n){var o={"./page-prev-disabled.png":"4ea2","./page-prev.png":"94e2"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}s.keys=function(){return Object.keys(o)},s.resolve=a,t.exports=s,s.id="fb03"}}]);