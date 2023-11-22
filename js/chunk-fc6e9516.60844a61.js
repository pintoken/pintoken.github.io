(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fc6e9516"],{"097a":function(t,e,n){t.exports=n.p+"img/router.e489826a.svg"},"178d":function(t,e,n){},2909:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("6b75");n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");var s=n("06c5");function i(t){return function(t){if(Array.isArray(t))return Object(a.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(s.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"2b78":function(t){t.exports=JSON.parse('{"abi":[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"_sellFee","type":"uint256"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_total","type":"uint256"},{"internalType":"address","name":"_recipient","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"aiRouter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"defaultLimit","outputs":[{"internalType":"uint256","name":"saled","type":"uint256"},{"internalType":"uint256","name":"purchased","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"feeRadio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"feeSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"friends","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"tradeLimitEnable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"usedLimitOf","outputs":[{"internalType":"uint256","name":"saled","type":"uint256"},{"internalType":"uint256","name":"purchased","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"sale","type":"uint256"},{"internalType":"uint256","name":"purchase","type":"uint256"}],"name":"setDefaultTradeLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"owners","type":"address[]"}],"name":"cleanSpecialLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"owners","type":"address[]"},{"internalType":"uint256","name":"sale","type":"uint256"},{"internalType":"uint256","name":"purchase","type":"uint256"}],"name":"setSpecialLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setTradeLimitEnable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setTradeLimitDisable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"remainingLimit","outputs":[{"internalType":"uint256","name":"saleLimit","type":"uint256"},{"internalType":"uint256","name":"puarchaseLimit","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"friendsAddress","type":"address"}],"name":"setFriendsInterface","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_router","type":"address"}],"name":"setAIRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"transferFeeSetterShip","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setSellFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFromAIRouter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"address":"0x1e2C9358D8A4CB1E812e02e33B6b040B395688db"}')},5605:function(t,e,n){t.exports=n.p+"img/icon-exchange.9605b523.svg"},"610f":function(t,e,n){"use strict";n("178d")},"64f8":function(t,e,n){t.exports=n.p+"img/router1.2d8a59f7.svg"},7085:function(t,e,s){"use strict";s.r(e);s("99af"),s("4160"),s("caad"),s("d81d"),s("fb6a"),s("b0c0"),s("a9e3"),s("b680"),s("d3b7"),s("2532"),s("159b"),s("e7e5");var i=s("d399"),y=s("2909"),o=(s("96cf"),s("1da1")),u=s("5530"),n=s("ade3"),a=(s("be7f"),s("565f")),r=s("daee"),c=s("2f62"),b=s("a49b"),g=s("b4e9"),d=s("0ba5"),p=s("460a"),l=s("2b78"),a={components:(m={},Object(n.a)(m,a.a.name,a.a),Object(n.a)(m,"search-tokens",function(){return s.e("chunk-ea4e0084").then(s.bind(null,"bab4"))}),Object(n.a)(m,"trading-setup",function(){return s.e("chunk-95508f90").then(s.bind(null,"0430"))}),Object(n.a)(m,"transation-state",function(){return s.e("chunk-949a2170").then(s.bind(null,"5942"))}),m),data:function(){return{token0:b.h.default.token0,token1:b.h.default.token1,balance:0,balance1:0,reserve0:"0".toBN(),reserve1:"0".toBN(),rate0:"--",rate1:"--",rateChange:!1,records:[],amount0:"",amount1:"",setupToggle:!1,assetsPool:[],changed:!0,slipPoint:2,deadline:600,inApprove:!1,inTransaction:!1,allowance:0,amountOutMin:0,disabled:!0,gasPrice:"0.25%",burn:"5%",inputing:!1,saleLimit:0,puarchaseLimit:0,lastEnter:0,factorys:[],initCodes:{},routerInfo:null}},computed:Object(u.a)(Object(u.a)({},Object(c.b)(["isConnected","chainId","web3","address"])),{},{isBSC:function(){return this.chainId===b.b.binance},isSellPin:function(){return"PIN"===this.token0.symbol&&"USDT"===this.token1.symbol},isAggrMode:function(){return this.isBSC&&![this.token0.symbol,this.token1.symbol].includes("AI")&&!this.isSellPin},routerAddr:function(){return this.isBSC?this.isSellPin?b.j.pinRouter3_1:[this.token0.symbol,this.token1.symbol].includes("AI")?b.j.aiRouter:b.j.aggreRouter:this.$Router.options.address},routerContract:function(){return new this.web3.eth.Contract(this.isAggrMode?p:d,this.routerAddr)}}),created:function(){var s=this,t=[b.h[this.chainId].token0,b.h[this.chainId].token1];this.token0=t[0],this.token1=t[1],this.isConnected&&this.$AggreRouter&&(this.$AggreRouter.methods.allFactory().call(function(t,a){if(!t){s.factorys=a;for(var e=[],n=0;n<a.length;n++)e.push([s.routerAddr,s.$AggreRouter.methods.initCodes(a[n]).encodeABI()]);s.$Multicall.methods.aggregate(e).call(function(t,e){if(!t)for(var n=0;n<a.length;n++)s.initCodes[a[n]]=e.returnData[n]})}}),this.init())},methods:{init:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=n.$route.query,e=e.token?JSON.parse(e.token):b.h[n.chainId].token1,n.select(e),n.getTradeList();case 4:case"end":return t.stop()}},t)}))()},openSearch:function(t){this.$refs.searchTokens.open(t)},openSetting:function(){this.$refs.tradingSetup.open()},updateTradeSetup:function(t){var e=t.slippage,t=t.deadline;this.slipPoint=e,this.deadline=t},allBalance:function(){if("BNB"===this.token0.symbol)return!1;this.amount0=this.balance,this.input()},getBalance:function(t){var n=this,e=t.mainToken,a=t.token,s=t.name;a.symbol===e.symbol?this.web3.eth.getBalance(this.address).then(function(t){n[s]=t.fromWei(a.decimals),n.$refs.tradingSetup.initData(n.token0.address)}):new this.web3.eth.Contract(r,a.address).methods.balanceOf(this.address).call(function(t,e){t||(n[s]=e.fromWei(a.decimals),n.$refs.tradingSetup.initData(n.token0.address))})},select:function(a){var s=arguments,i=this;return Object(o.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=1<s.length&&void 0!==s[1]?s[1]:1,n=b.h[i.chainId].main,i["token".concat(Number(!e))].symbol===a.symbol)return t.abrupt("return",i.switchToken());t.next=5;break;case 5:i["token".concat(e)]=a,i.getBalance({mainToken:n,token:i.token0,name:"balance"}),i.getBalance({mainToken:n,token:i.token1,name:"balance1"}),i.token0.symbol!==n.symbol&&new i.web3.eth.Contract(r,i.token0.address).methods.allowance(i.address,i.routerAddr).call(function(t,e){t||(i.allowance=e.fromWei(i.token0.decimals))}),i.chainId===b.b.binance&&(["PIN","AI"].includes(a.symbol)&&(i.slipPoint=10),[i.token0.symbol,i.token1.symbol].includes("AI"))&&new i.web3.eth.Contract(l.abi,l.address).methods.remainingLimit(i.address).call({from:i.address},function(t,e){t||(i.saleLimit=e.saleLimit.fromWei(),i.puarchaseLimit=e.puarchaseLimit.fromWei())}),i.amount0.toBN().gt(0)&&i.input();case 11:case"end":return t.stop()}},t)}))()},getReserves:function(){var n=this;return new Promise(function(r){for(var o=Object(g.b)(n.token0,n.token1,b.f[n.chainId],n.isSellPin?[]:n.factorys),t=[],e=0;e<o.length;e++)t.push([b.j.aggreRouter,n.$AggreRouter.methods.getReserves(o[e].factory,n.initCodes[o[e].factory],o[e].token0.address,o[e].token1.address).encodeABI()]);n.$Multicall.methods.tryAggregate(!1,t).call(function(t,e){if(!t){for(var n,a,s={},i=0;i<o.length;i++)e[i].success&&(n=(a=e[i].returnData.decode([{type:"uint256",name:"reserve0"},{type:"uint256",name:"reserve1"}])).reserve0,a=a.reserve1,Object.prototype.hasOwnProperty.call(s,o[i].factory)?s[o[i].factory].push(Object(u.a)(Object(u.a)({},o[i]),{},{reserve0:n,reserve1:a})):s[o[i].factory]=[Object(u.a)(Object(u.a)({},o[i]),{},{reserve0:n,reserve1:a})]);r(s)}})})},getAmountsOut:function(s,i){var r=this;return Object(o.a)(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.isAggrMode?r.$AggreRouter.methods.getAmountsOut(s.toWei(i.tokensPath[0].decimals),i.tokensPath.map(function(t){return t.address}),i.factorysPath):r.routerContract.methods.getAmountsOut(s.toWei(i[0].decimals),i.map(function(t){return t.address})),t.next=3,e.call();case 3:return e=t.sent,n=Array.isArray(i)?i:i.tokensPath,a=n.length-1,t.abrupt("return",e[a].fromWei(n[a].decimals).toFixed(n[a].decimals));case 7:case"end":return t.stop()}},t)}))()},searchRouter:function(){var f=this;return new Promise(function(){var e=Object(o.a)(regeneratorRuntime.mark(function t(r){var o,e,n,a,s,i,u,c,d,p,l,m,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=Object(g.d)(f.token0,f.token1,b.f[f.chainId],f.isSellPin?[]:f.factorys),e=[],n=(f.amount0.toBN().gt(0)?f.amount0:1).toWei(f.token0.decimals),a="0".toBN(),s=-1,f.isAggrMode)return t.next=6,f.getReserves();t.next=11;break;case 6:for(i=t.sent,u=0;u<o.length;u++)c=Object(g.a)(n,o[u].tokensPath,o[u].factorysPath,i),a.lt(c[c.length-1])&&(a=c[c.length-1].toBN(),s=u);-1!==s?(f.amount1=a.toFixed().fromWei(f.token1.decimals),f.getAmountsOut(1,o[s]).then(function(t){f.rate1=t}),d={tokensPath:Object(y.a)(o[s].tokensPath),factorysPath:Object(y.a)(o[s].factorysPath)},p=d.factorysPath.reverse(),l=p.pop(),p.unshift(l),f.getAmountsOut(1,{tokensPath:d.tokensPath.reverse(),factorysPath:p}).then(function(t){f.rate0=t}),r(o[s])):(f.amount1="",r(null)),t.next=13;break;case 11:for(m=0;m<o.length;m++)h=f.routerContract.methods.getAmountsOut(n,o[m].map(function(t){return t.address})),e.push([f.routerAddr,h.encodeABI()]);f.$Multicall.methods.tryAggregate(!1,e).call({from:f.$address},function(t,e){if(!t){for(var n,a="0".toBN(),s=-1,i=0;i<e.length;i++)e[i].success&&(n=e[i].returnData.decode(["uint256[]"]),a.lt(n[n.length-1]))&&(a=n[n.length-1].toBN(),s=i);-1!==s?(f.amount1=a.toFixed().fromWei(f.token1.decimals),f.getAmountsOut(1,o[s]).then(function(t){f.rate1=t}),t=Object(y.a)(o[s]),f.getAmountsOut(1,t.reverse()).then(function(t){f.rate0=t}),r(o[s])):(f.amount1="",r(null))}});case 13:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}())},exchange:function(){if(this.amount0.toBN().gt(this.balance))return i.a.fail(this.$t("transaction.text12"));var t=b.h[this.chainId].main;this.token0.symbol===t.symbol?this.swapExactETHForTokens():this.amount0.toBN().gt(this.allowance)?this.approve():this.sendTokenTransaction()},sendTokenTransaction:function(){var t=b.h[this.chainId].main;this.token1.symbol===t.symbol?this.swapExactTokensForETH():this.swapExactTokensForTokens()},switchToken:function(){var t=this.token0;this.token0=this.token1,this.token1=t,this.select(t)},input:function(){var n=this;if(Number(this.amount0)<=0)this.amount1="",this.gasPrice="0.25%",this.burn="5%",this.disabled=!0,this.inputing=!1;else{if(this.inputing)return!1;this.inputing=!0,this.lastEnter=this.amount0;var a=setTimeout(Object(o.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Number(n.amount0)<=0)return n.amount1="",n.gasPrice="0.25%",n.burn="5%",n.disabled=!0,n.inputing=!1,clearTimeout(a),t.abrupt("return",!1);t.next=8;break;case 8:return t.next=10,n.searchRouter();case 10:e=t.sent,n.routerInfo=e,n.inputing=!1,clearTimeout(a),n.amount0!==n.lastEnter&&n.input();case 15:case"end":return t.stop()}},t)})),500);this.disabled=!1,this.gasPrice="".concat(this.amount0.toBN().times(.0025).toFixed().toFixed(this.token0.decimals)," ").concat(this.token0.symbol),this.burn="".concat(this.amount0.toBN().times(.05).toFixed().toFixed(this.token0.decimals)," ").concat(this.token0.symbol)}},approve:function(){var n=this;if(this.amount0.toBN().gt(this.balance))return i.a.fail(this.$t("transaction.text12"));var a=new this.web3.eth.Contract(r,this.token0.address);a.methods.approve(this.routerAddr,this.amount0.toWei(this.token0.decimals).toBN().times(10).toFixed()).send({from:this.address}).on("transactionHash",function(t){n.inApprove=!0}).on("receipt",function(){var e=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.methods.allowance(n.address,n.routerAddr).call.request({from:n.address});case 2:n.allowance=t.sent,n.inApprove=!1;case 4:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}()).on("error",function(t){n.inApprove=!1,i.a.fail(n.$t("transaction.text13"))})},swapExactTokensForTokens:function(){var s=this;return Object(o.a)(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(s.amount0!==s.lastEnter)return t.abrupt("return");t.next=2;break;case 2:if(e=Math.floor((new Date).getTime()/1e3)+s.deadline,n=s.amount1.toWei(s.token1.decimals).toBN(),n=n.minus(n.div(100).times(s.slipPoint)).toFixed(0),s.amountOutMin=n.fromWei(s.token1.decimals).toFixed(s.token1.decimals),s.chainId!==b.b.binance)t.next=13;else{if("AI"===s.token0.symbol&&s.amount0.toBN().gt(s.saleLimit))return t.abrupt("return",i.a.fail("今日可卖AI额度为: ".concat(s.saleLimit.toFixed(1))));t.next=11}break;case 11:if("AI"===s.token1.symbol&&s.amount1.toBN().gt(s.puarchaseLimit))return t.abrupt("return",i.a.fail("今日可买AI额度为: ".concat(s.puarchaseLimit.toFixed(1))));t.next=13;break;case 13:return a=s.isAggrMode?s.$AggreRouter.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(s.amount0.toWei(s.token0.decimals),n,s.routerInfo.tokensPath.map(function(t){return t.address}),s.routerInfo.factorysPath,s.address,e):s.routerContract.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(s.amount0.toWei(s.token0.decimals),n,s.routerInfo.map(function(t){return t.address}),s.address,e),t.prev=14,t.next=17,a.call({from:s.address});case 17:a.send({from:s.address}).on("transactionHash",function(t){s.inTransaction=!0}).on("receipt",function(t){s.inTransaction=!1}).on("error",function(t){s.inTransaction=!1,i.a.fail(s.$t("transaction.text13"))}),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(14),s.inTransaction=!1;case 24:case"end":return t.stop()}},t,null,[[14,20]])}))()},swapExactTokensForETH:function(){var e=this;if(this.amount0===this.lastEnter){var t=Math.floor((new Date).getTime()/1e3)+this.deadline,n=this.amount1.toWei(this.token1.decimals).toBN(),n=n.minus(n.div(100).times(this.slipPoint)).toFixed(0);if(this.amountOutMin=n.fromWei(this.token1.decimals).toFixed(this.token1.decimals),this.chainId===b.b.binance){if("AI"===this.token0.symbol&&this.amount0.toBN().gt(this.saleLimit))return i.a.fail("今日可卖AI额度为: ".concat(this.saleLimit.toFixed(1)));if("AI"===this.token1.symbol&&this.amount1.toBN().gt(this.puarchaseLimit))return i.a.fail("今日可买AI额度为: ".concat(this.puarchaseLimit.toFixed(1)))}(this.isAggrMode?this.$AggreRouter.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(this.amount0.toWei(this.token0.decimals),n,this.routerInfo.tokensPath.map(function(t){return t.address}),this.routerInfo.factorysPath,this.address,t):this.routerContract.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(this.amount0.toWei(this.token0.decimals),n,this.routerInfo.map(function(t){return t.address}),this.address,t)).send({from:this.address}).on("transactionHash",function(t){e.inTransaction=!0}).on("receipt",function(t){e.inTransaction=!1}).on("error",function(t){e.inTransaction=!1,i.a.fail(e.$t("transaction.text13"))})}},swapExactETHForTokens:function(){var e=this;if(this.amount0===this.lastEnter){var t=Math.floor((new Date).getTime()/1e3)+this.deadline,n=this.amount1.toWei(this.token1.decimals).toBN(),n=n.minus(n.div(100).times(this.slipPoint)).toFixed(0);if(this.amountOutMin=n.fromWei(this.token1.decimals).toFixed(this.token1.decimals),this.chainId===b.b.binance){if("AI"===this.token0.symbol&&this.amount0.toBN().gt(this.saleLimit))return i.a.fail("今日可卖AI额度为: ".concat(this.saleLimit.toFixed(1)));if("AI"===this.token1.symbol&&this.amount1.toBN().gt(this.puarchaseLimit))return i.a.fail("今日可买AI额度为: ".concat(this.puarchaseLimit.toFixed(1)))}(this.isAggrMode?this.$AggreRouter.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(n,this.routerInfo.tokensPath.map(function(t){return t.address}),this.routerInfo.factorysPath,this.address,t):this.routerContract.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(n,this.routerInfo.map(function(t){return t.address}),this.address,t)).send({from:this.address,value:this.amount0.toWei(this.token0.decimals)}).on("transactionHash",function(t){e.inTransaction=!0}).on("receipt",function(t){e.inTransaction=!1}).on("error",function(t){e.inTransaction=!1,i.a.fail(e.$t("transaction.text13"))})}},getTradeList:function(){var p=this;return Object(o.a)(regeneratorRuntime.mark(function t(){var c,d,e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.e)(Object(b.i)(p.chainId,p.address));case 2:0<(c=t.sent.slice(0,1)).length&&(d=["0x7ff36ab5","0xb6f9de95"].includes(c[0].input.slice(0,10))?Object(u.a)(Object(u.a)({},c[0].input.slice(10).decode([{type:"uint",name:"amountOutMin"},{type:"address[]",name:"path"}])),{},{amountIn:c[0].value,date:p.formatDate(c[0].timeStamp)}):Object(u.a)(Object(u.a)({},c[0].input.slice(10).decode([{type:"uint",name:"amountIn"},{type:"uint",name:"amountOutMin"},{type:"address[]",name:"path"}])),{},{date:p.formatDate(c[0].timeStamp)}),e=new p.web3.BatchRequest,d.path.forEach(function(t){t=new p.web3.eth.Contract(r,t);e.add(t.methods.symbol().call.request({from:p.address})),e.add(t.methods.decimals().call.request({from:p.address}))}),e.requestManager.sendBatch(e.requests,function(){var n=Object(o.a)(regeneratorRuntime.mark(function t(e,n){var a,s,i,r,o,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){for(a=[],s=n[1].result.decode(["uint8"]),i=n[n.length-1].result.decode(["uint8"]),r=b.h[p.chainId].main,o=0;o<n.length;o+=2)u=("string"==typeof n[o]?n[o]:n[o].result).decode(["string"]),a.push(u==="W".concat(r.symbol)?r.symbol:u);p.records=[{path:a,hash:c[0].hash,amount0:d.amountIn.fromWei(s).toFixed(6),symbol0:a[0],amount1:d.amountOutMin.fromWei(i).toFixed(6),symbol1:a[a.length-1],date:d.date}]}case 1:case"end":return t.stop()}},t)}));return function(t,e){return n.apply(this,arguments)}}()));case 4:case"end":return t.stop()}},t)}))()},formatDate:function(t){function e(t){return t<10?"0".concat(t):t}var t=new Date(1e3*t),n=t.getFullYear(),a=e(t.getMonth()+1),s=e(t.getDate()),i=e(t.getHours()),t=e(t.getMinutes());return"".concat(n,"/").concat(a,"/").concat(s," ").concat(i,":").concat(t)},goblockexplorer:function(t){var e=this.chainId===b.b.ethereum?"etherscan":"bscscan";window.open("https://".concat(e,".com/tx/").concat(t))}}},n=(s("610f"),s("2877")),m=Object(n.a)(a,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"swap"},[a("div",{staticClass:"exchange-container"},[a("div",{staticClass:"exchange-box1"},[a("div",{staticClass:"exchange-box"},[a("div",{staticClass:"exchange"},[a("div",{staticClass:"input1"},[a("div",{staticClass:"one"},[a("span",[n._v(n._s(n.$t("transaction.text1")))]),a("span",[n._v(n._s(n.$t("transaction.text2"))+" "+n._s(n.balance.toFixed(2))+" "+n._s(n.token0.symbol))])]),a("div",[a("van-field",{attrs:{type:"number",placeholder:"0"},on:{input:n.input},model:{value:n.amount0,callback:function(t){n.amount0=t},expression:"amount0"}}),a("div",{staticClass:"select",on:{click:function(t){return n.openSearch(0)}}},[a("img",{attrs:{src:n.token0.logoURI}}),a("div",[a("span",{domProps:{textContent:n._s(n.token0.symbol)}}),a("img",{attrs:{src:s("9f59")}})])])],1)]),a("div",{staticClass:"icon-exchange"},[a("div",[a("div",[a("img",{attrs:{src:s("5605")},on:{click:n.switchToken}})])])]),a("div",{staticClass:"input1"},[a("div",{staticClass:"one"},[a("span",[n._v(n._s(n.$t("transaction.text3")))]),a("span",[n._v(n._s(n.$t("transaction.text2"))+" "+n._s(n.balance1.toFixed(2))+" "+n._s(n.token1.symbol))])]),a("div",[a("van-field",{attrs:{value:n.amount1.toFixed(6),type:"number",readonly:"",placeholder:"0"}}),a("div",{staticClass:"select",on:{click:function(t){return n.openSearch(1)}}},[a("img",{attrs:{src:n.token1.logoURI}}),a("div",[a("span",{domProps:{textContent:n._s(n.token1.symbol)}}),a("img",{attrs:{src:s("9f59")}})])])],1)]),a("div",{staticClass:"setting-info"},[a("div",{staticClass:"rate"},[a("div",[n.rateChange?a("span",[n._v(n._s(n.$t("transaction.text4"))+" 1 "+n._s(n.token1.symbol)+" ≈ "+n._s(n.rate0.toFixed(6))+" "+n._s(n.token0.symbol))]):a("span",[n._v(n._s(n.$t("transaction.text4"))+" 1 "+n._s(n.token0.symbol)+" ≈ "+n._s(n.rate1.toFixed(6))+" "+n._s(n.token1.symbol))]),a("span",[n._v(n._s(n.$t("transationState.text10"))+" "+n._s(n.gasPrice))]),a("span",{directives:[{name:"show",rawName:"v-show",value:"PIN"===n.token0.symbol&&"CS"!==n.token1.symbol,expression:"token0.symbol === 'PIN' && token1.symbol !== 'CS'"}]},[n._v(n._s(n.$t("transaction.text14"))+" "+n._s(n.burn))]),n.routerInfo?a("div",[a("span",[n._v(n._s(n.$t("transaction.text15")))]),a("div",[a("span",[n._v(n._s(n.token0.symbol))]),a("img",{attrs:{src:s("097a")}}),Array.isArray(n.routerInfo)?[2<n.routerInfo.length?a("span",[n._v(n._s(n.routerInfo[1].symbol))]):n._e(),2<n.routerInfo.length?a("img",{attrs:{src:s("097a")}}):n._e(),3<n.routerInfo.length?a("span",[n._v(n._s(n.routerInfo[2].symbol))]):n._e(),3<n.routerInfo.length?a("img",{attrs:{src:s("097a")}}):n._e()]:[2<n.routerInfo.tokensPath.length?a("span",[n._v(n._s(n.routerInfo.tokensPath[1].symbol))]):n._e(),2<n.routerInfo.tokensPath.length?a("img",{attrs:{src:s("097a")}}):n._e(),3<n.routerInfo.tokensPath.length?a("span",[n._v(n._s(n.routerInfo.tokensPath[2].symbol))]):n._e(),3<n.routerInfo.tokensPath.length?a("img",{attrs:{src:s("097a")}}):n._e()],a("span",[n._v(n._s(n.token1.symbol))])],2)]):n._e()]),a("img",{attrs:{src:s("f763")},on:{click:function(t){n.rateChange=!n.rateChange}}})])]),a("div",{staticClass:"button"},[a("img",{attrs:{src:s("b012")},on:{click:n.openSetting}}),a("van-button",{directives:[{name:"show",rawName:"v-show",value:!n.inTransaction&&!n.inApprove,expression:"!inTransaction && !inApprove"}],attrs:{type:"info",disabled:n.inputing||n.disabled},on:{click:n.exchange}},[n._v(n._s(n.$t("transaction.text5")))]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:n.inApprove&&!n.inTransaction,expression:"inApprove && !inTransaction"}],staticClass:"inTransaction",attrs:{loading:"","loading-type":"spinner","loading-text":n.$t("transaction.text6")}}),a("van-button",{directives:[{name:"show",rawName:"v-show",value:n.inTransaction&&!n.inApprove,expression:"inTransaction && !inApprove"}],staticClass:"inTransaction",attrs:{loading:"","loading-type":"spinner","loading-text":n.$t("transaction.text7")}})],1)])])]),a("div",{staticClass:"flowcell"},[n._v(n._s(n.$t("transaction.text19")))]),n.records.length<=0?a("div",{staticClass:"empty"},[a("img",{attrs:{src:s("1427")}}),a("span",[n._v(n._s(n.$t("record.text15")))])]):n._e(),n._l(n.records,function(e){return a("div",{key:e.date,staticClass:"record"},[a("div",{staticClass:"tilte"},[a("div",{staticClass:"success"},[a("span",[n._v(n._s(n.$t("transaction.text11_1")))]),a("span",{domProps:{textContent:n._s(e.date)}})]),a("div",{staticClass:"Check",on:{click:function(t){return n.goblockexplorer(e.hash)}}},[a("span",[n._v(n._s(n.$t("transaction.text18")))]),a("img",{attrs:{src:s("64f8")}})])]),a("div",{staticClass:"content"},[a("div",[a("span",{domProps:{textContent:n._s(e.symbol0)}}),a("span",{domProps:{textContent:n._s(e.amount0)}})]),a("img",{attrs:{src:s("9adb")}}),a("div",[a("span",{domProps:{textContent:n._s(e.symbol1)}}),a("span",{domProps:{textContent:n._s(e.amount1)}})])]),a("div",{staticClass:"bottom"},[a("span",[n._v(n._s(n.$t("transaction.text15")))]),a("div",[a("span",{domProps:{textContent:n._s(e.path[0])}}),a("img",{attrs:{src:s("64f8")}}),a("span",{domProps:{textContent:n._s(e.path[1])}}),2<e.path.length?a("img",{attrs:{src:s("64f8")}}):n._e(),2<e.path.length?a("span",{domProps:{textContent:n._s(e.path[2])}}):n._e(),3<e.path.length?a("img",{attrs:{src:s("64f8")}}):n._e(),3<e.path.length?a("span",{domProps:{textContent:n._s(e.path[3])}}):n._e()])])])})],2),a("transation-state",{attrs:{transaction:n.inTransaction,from:{amount:n.amount0,symbol:n.token0.symbol},to:{amount:n.amount1,symbol:n.token1.symbol},"slip-point":n.slipPoint+"%",min:n.amountOutMin,"to-price":n.rate1,"from-price":n.rate0}}),a("search-tokens",{ref:"searchTokens",on:{select:n.select}}),a("trading-setup",{ref:"tradingSetup",on:{updateTradeSetup:n.updateTradeSetup}})],1)},[],!1,null,"4ca7107c",null);e.default=m.exports},"9adb":function(t,e,n){t.exports=n.p+"img/contentlogo.fe4ba90c.svg"},d81d:function(t,e,n){"use strict";var a=n("23e7"),s=n("b727").map,i=n("1dde"),n=n("ae40"),i=i("map"),n=n("map");a({target:"Array",proto:!0,forced:!i||!n},{map:function(t){return s(this,t,1<arguments.length?arguments[1]:void 0)}})},f763:function(t,e,n){t.exports=n.p+"img/icon-exchange1.91ebc5d1.svg"}}]);