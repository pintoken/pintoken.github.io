(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["piece"],{"0d50":function(e,t,n){},"1edd":function(e,t,n){},"21fb":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAYCAYAAADZEIyjAAAAI0lEQVQoU2O0z3jynwELYBxiEjZT/mP3xxCTmHoQhz+GlgQAHFVFeU77VnsAAAAASUVORK5CYII="},"26ec":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"piece"},[e._e(),a("div",{staticClass:"pieceBg"}),a("div",{staticClass:"picceTitle"},[a("span",[e._v(e._s(e.$route.query.id))])]),a("div",{staticClass:"pieceContet"},[a("div",{staticClass:"line"},[e._l(12,(function(e){return a("div",{key:e})})),a("img",{attrs:{src:n("dfdc")}}),e._l(12,(function(e){return a("div",{key:e})}))],2),a("div",{staticClass:"content"},[a("div",{staticClass:"content1"},[a("div",[a("div",{staticClass:"contentTitle"},[a("span",[e._v(e._s(e.power)+e._s(e.$t("piece.text4")))]),a("div",[e._v(e._s(e.$t("piece.text5")))])]),a("div",{staticClass:"canvas"},[a("div",{attrs:{id:"pieChart"}}),e.showLucky?a("img",{class:"deg"+e.luckyNumber,attrs:{src:n("ce19")}}):e._e(),a("div",{staticClass:"userInfo"},e._l(e.playList,(function(t,n){return a("div",{key:n,staticClass:"list",class:{active:n==e.currentIndex}},[a("span",[e._v(e._s(t.address))])])})),0)]),a("div",{staticClass:"currentNumber"},[a("img",{attrs:{src:n("f48e")}}),a("span",[e._v(e._s(e.payAmount))]),a("span",[e._v("PIN")])]),a("van-button",{attrs:{disabled:!0}},[e._v(e._s(1===e.status?e.$t("piece.text6"):2===e.status?e.$t("piece.text7"):3===e.status?""+e.luckyNumber+e.$t("piece.text8"):4===e.status?e.$t("piece.text16"):e.$t("piece.text9")))]),a("div",{staticClass:"blockInfo"},[a("div",[a("div",[a("img",{attrs:{src:n("21fb")}}),a("span",[e._v(e._s(e.$t("piece.text10")))])]),a("span",[e._v(e._s(e.currentBlock))])]),e.isGroup?a("div",[a("div",[a("img",{attrs:{src:n("a48b")}}),a("span",[e._v(e._s(e.$t("piece.text11")))])]),a("span",[e._v(e._s(e.blockInfo.startBlock))])]):e._e(),e.isGroup?a("div",[a("div",[a("img",{attrs:{src:n("2a9c")}}),a("span",[e._v(e._s(e.$t("piece.text12")))])]),a("span",[e._v(e._s(e.blockInfo.luckyBlock))])]):e._e()]),e.showLucky?a("div",{staticClass:"luckyInfo"},[a("div",{staticClass:"luckyNumber"},[a("span",[e._v(e._s(e.$t("piece.text13")))]),a("span",[e._v(e._s(e.luckyNumber))])]),a("div",{staticClass:"luckyHash",on:{click:e.selectBlock}},[a("span",[e._v(e._s(e.$t("piece.text14")))]),e.showLucky?a("span",{domProps:{innerHTML:e._s(e.hashInfo.newHash)}}):e._e()])]):e._e()],1)])])]),a("winning",{ref:"winning",on:{refreshData:e.init,cancelGetData:e.cancelGetData}})],1)},s=[],r=(n("99af"),n("caad"),n("baa5"),n("fb6a"),n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf"),n("1da1")),c=n("d4ec"),i=n("bee2"),o=function(){function e(t){Object(c["a"])(this,e),this.echart=echarts.init(t),this.echart.setOption({tooltip:{show:!1},series:[{name:"访问来源",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!0,position:"inside",color:"#fff",fontSize:"20"},animation:!1,emphasis:{scaleSize:10},startAngle:109,labelLine:{show:!1},data:[{value:1,name:"0"},{value:1,name:"1"},{value:1,name:"2"},{value:1,name:"3"},{value:1,name:"4"},{value:1,name:"5"},{value:1,name:"6"},{value:1,name:"7"},{value:1,name:"8"},{value:1,name:"9"}]}]})}return Object(i["a"])(e,[{key:"set",value:function(e){this.echart.setOption({color:e})}}]),e}(),u={components:{winning:function(){return n.e("transaction").then(n.bind(null,"cbc1"))}},data:function(){return{currentIndex:-1,playList:[],power:0,payAmount:0,blockInfo:{},currentBlock:0,status:1,luckyNumber:"",piechart:null,interval:-1,interval2:-1,isGroup:!1,showLucky:!1,powerTimes:15}},created:function(){this.$contracts&&this.init()},methods:{init:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,a,s,r,c,i,o,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$contracts.Pin.methods.rounds(e.$route.query.id).call({from:e.$address});case 2:return n=t.sent,a=n.payment,s=n.power,r=n.stallIndex,c=n.prepareBlock,t.next=9,e.$contracts.Pin.methods.stalls(r).call({from:e.$address});case 9:return i=t.sent,o=i.partakeAward,t.next=13,e.$contracts.Pin.methods.getGamePowerTimes().call({from:e.$address});case 13:u=t.sent.toBN().div(1e12).toFixed(),l=s.toBN().minus(s.toBN().times(o.fromWei(12)).times(9)).toString().toFixed(0),e.powerTimes=u,e.payAmount=a.fromWei(),e.power=s.toBN().times(u).toNumber().toFixed(0),e.blockInfo={startBlock:c,luckyBlock:Number(c)+10},e.getStatus(l),e.updatePlayers(o.fromWei(12)),e.interval=setInterval((function(){e.getStatus(l)}),2e3),e.interval2=setInterval((function(){e.updatePlayers(o.fromWei(12))}),5e3);case 23:case"end":return t.stop()}}),t)})))()},getBlockHash:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$web3.eth.getBlock(e);case 2:return a=n.sent,n.abrupt("return","0x"===a.hash.slice(0,2)?a.hash:"0x".concat(a.hash));case 4:case"end":return n.stop()}}),n)})))()},getDrawState:function(e,t){return 0===e?1:this.currentBlock>=e&&this.currentBlock<=e+10?2:this.currentBlock>e+10&&t>=0&&t<10?3:this.currentBlock>e&&this.currentBlock<e+255?4:5},getStatus:function(e){var t=this,n=new this.$web3.BatchRequest;n.add(this.$web3.eth.getBlockNumber.request()),n.add(this.$contracts.Pin.methods.rounds(this.$route.query.id).call.request({from:this.$address})),n.requestManager.sendBatch(n.requests,function(){var n=Object(r["a"])(regeneratorRuntime.mark((function n(a,s){var r,c,i,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a){n.next=17;break}return r=s[1].result.decode([{name:"payment",type:"uint256"},{name:"prepareBlock",type:"uint256"},{name:"power",type:"uint256"},{name:"stallIndex",type:"uint8"},{name:"luckyValue",type:"uint8"},{name:"sender",type:"address"}]),c=r.prepareBlock,i=r.luckyValue,t.currentBlock=Number("string"===typeof s[0]?s[0]:s[0].result),t.blockInfo={startBlock:c,luckyBlock:Number(c)+10},n.prev=4,n.next=7,t.getBlockHash(Number(c)+10);case 7:o=n.sent,u=Number(o.replace(/[^0-9]/gi,"").slice(-1)),t.status=t.getDrawState(Number(c),Number(i)),[3,4].includes(t.status)&&(clearInterval(t.interval2),t.currentBlock>=Number(c)+10&&(t.luckyNumber=u,t.hashInfo=t.hashResult(o,u),t.showLucky=!0),3===t.status&&clearInterval(t.interval),t.playList[u].amount=e,4===t.status&&(console.log("当前区块：",t.currentBlock),console.log("其余人可开奖区块：",Number(c)+50),(t.currentBlock>Number(c)+50||t.$address.toLowerCase()===t.playList[u].sourceAddress.toLowerCase())&&t.$refs.winning.display(u,t.blockInfo.luckyBlock,t.hashInfo.newHash,t.playList))),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](4),console.log(n.t0),t.status=t.getDrawState(Number(c),i);case 17:case"end":return n.stop()}}),n,null,[[4,13]])})));return function(e,t){return n.apply(this,arguments)}}())},updatePlayers:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,s,r,c,i,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$contracts.Pin.methods.getRoundPlayers(t.$route.query.id).call({from:t.$address});case 2:a=n.sent,t.isGroup=10===a.length,s=[],r=0;case 6:if(!(r<a.length)){n.next=14;break}if(parseInt(a[r],16)){n.next=9;break}return n.abrupt("break",14);case 9:a[r].toLowerCase()===t.$address.toLowerCase()&&(t.currentIndex=r),s.push({index:r,sourceAddress:a[r],address:"".concat(a[r].substr(0,3),"..").concat(a[r].substr(-3,3)),amount:t.power.toBN().times(e).toString().toFixed(0)});case 11:r++,n.next=6;break;case 14:for(u in t.playList=s,c=["#10499A","#1155B4","#1666CB","#1870D9","#1B7AE7","#1E84F5","#2D92FD","#409FFD","#57AEFD","#6BBBFD"],i=["#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5","#C9D7F5"],t.playList)i[u]=c[u];null==t.piechart&&(t.piechart=new o(document.getElementById("pieChart"))),t.piechart.set(i),""!==t.currentIndex&&t.piechart.echart.dispatchAction({type:"highlight",dataIndex:t.currentIndex});case 21:case"end":return n.stop()}}),n)})))()},hashResult:function(e,t){var n=e.lastIndexOf(t);if(n===e.length-1){var a="".concat(e.substring(0,n),"<span>").concat(t,"</span>");return{newHash:"".concat(a.substr(0,5),"...").concat(a.substr(48)),originalHash:e}}var s="".concat(e.substring(0,n),"<span>").concat(t,"</span>").concat(e.substring(n+1,e.length));return{newHash:"".concat(s.substr(0,5),"...").concat(s.substr(48)),originalHash:e}},cancelGetData:function(){clearInterval(this.interval),clearInterval(this.interval2)},selectBlock:function(){window.location.href="https://tronscan.org/#/block/".concat(this.blockInfo.luckyBlock)}},destroyed:function(){this.cancelGetData()}},l=u,d=l,A=(n("c1bf"),n("6d9d"),n("2877")),p=Object(A["a"])(d,a,s,!1,null,"381ad203",null);t["default"]=p.exports},"2a9c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAYCAYAAADZEIyjAAAAJElEQVQoU2MUnqrynwELYBxiEqxnuLH7Y4hJrPyxErs/hpYEAOX/N5Gh68o3AAAAAElFTkSuQmCC"},"6d9d":function(e,t,n){"use strict";n("1edd")},a48b:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAYCAYAAADZEIyjAAAAJElEQVQoU2N8ZW76nwELYBxiEj9T07H7Y4hJ/D5zHLs/hpYEAEzYRUnUUOEBAAAAAElFTkSuQmCC"},baa5:function(e,t,n){var a=n("23e7"),s=n("e58c");a({target:"Array",proto:!0,forced:s!==[].lastIndexOf},{lastIndexOf:s})},bee2:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.d(t,"a",(function(){return s}))},c1bf:function(e,t,n){"use strict";n("0d50")},ce19:function(e,t){e.exports="data:image/png;base64,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"},d4ec:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},dfdc:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAB70lEQVQ4T6XT3WoTURAH8P/s1tiKQtFsUoQoShG1fQCbm/aEdhskor3Re0Gt6CvYbu0rKFYLfYBe+EFFUhu6UWj0BdqqiKIBMdkoBUVrdHfkbNpgY7LZZPdmP87MjzlndiiTtYTNeETAPgS4CPhGhLO0mLFSpGIhgFVNdRgpkm9PTWsNwImA6LoutJMuuJS1LjHjXhCQCJdHhrRZF5xf5VB3sfQRQLRNtLARCR8630dlF3S3nf1yA+zcbAskZUIfOjAtc6tgOp3fT6HOPBH2tIIy4weXN2PJZOzrDrDSnNItgK+1AgJ0Wxfh69s51Qrlh8eZwtGQqrwBoPpE7bLtHEsNR9/VBStVFu8DNOYLZJ7XE5EL/8buqFAuPDE/n+qA+sIP+Af2wGnR89ITdKtcLq2AOO6JMp7rCW2wNua/CmXAYqZwjlTlgRfItjM2Ohx96As0DFYGBq3XBOptgK7nnoX7DYMcX2ClOdYVADMNwHFdaHfrrdXdsgzM5fJd3391vq8zjoW9uzePxOOxny2BMnjJtCYZMGq6aIwIbarR+TasUCYsmJ/CId71YXsc5ZiV6ffhM+JgqS1w6yzvABjfAmZ0oV316r5nhTIxbRZ7FdAr+eyAjydF5G0g0P0vl4sX5X00EZlrNkFNK2wG1K7/BQlRl2u4XNgaAAAAAElFTkSuQmCC"},e58c:function(e,t,n){"use strict";var a=n("fc6a"),s=n("a691"),r=n("50c4"),c=n("a640"),i=n("ae40"),o=Math.min,u=[].lastIndexOf,l=!!u&&1/[1].lastIndexOf(1,-0)<0,d=c("lastIndexOf"),A=i("indexOf",{ACCESSORS:!0,1:0}),p=l||!d||!A;e.exports=p?function(e){if(l)return u.apply(this,arguments)||0;var t=a(this),n=r(t.length),c=n-1;for(arguments.length>1&&(c=o(c,s(arguments[1]))),c<0&&(c=n+c);c>=0;c--)if(c in t&&t[c]===e)return c||0;return-1}:u},f48e:function(e,t,n){e.exports=n.p+"img/PinToken.300a986b.svg"}}]);