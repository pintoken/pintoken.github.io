(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-17a5ae63"],{2831:function(t,e,s){"use strict";s.r(e);s("caad"),s("c975"),s("fb6a"),s("b0c0"),s("a9e3"),s("2532"),s("e7e5");var a=s("d399"),i=(s("96cf"),s("1da1")),n=s("5530"),o=s("ade3"),r=(s("c3a6"),s("ad06")),u=s("2f62"),p=s("1b70"),c=s("303c"),d=s("5054"),l=s("5b8b"),m=s("e45c"),o={components:Object(o.a)({},r.a.name,r.a),props:{apy:String|Number},data:function(){return{showOptions:!1,optioned:"HJZ",inquiring:!1,approving:!1,dealing:!1,options:["HJZ"],balancePIN:0,allowancePIN:0,balanceHJZ:0,allowanceHJZ:0,pinAmount:"",communityTokenAmount:"",getPower:0,records:[],CommunityExample:null,pinQuota:0}},computed:Object(n.a)(Object(n.a)({},Object(u.b)(["isConnected","web3","address"])),{},{communityToken:function(){return{logoURI:s("480f"),address:l.address,balance:this.balanceHJZ,allowance:this.allowanceHJZ}},isPINApproved:function(){return this.pinAmount<=0||this.pinAmount.toBN().lte(this.allowancePIN)},isCommunityTokenApproved:function(){return this.communityTokenAmount<=0||this.communityTokenAmount.toBN().lte(this.communityToken.allowance)},btnText:function(){return this.approving?this.$t("approving"):this.dealing?this.$t("dealing"):this.isPINApproved?this.isCommunityTokenApproved?this.$t("HJZCommunity.text13"):this.$t("approve_token",{symbol:this.optioned}):this.$t("approve_token",{symbol:"PIN"})},btnDisabled:function(){return this.approving||this.dealing||this.inquiring||this.pinAmount<=0||this.balancePIN.toBN().lt(this.pinAmount)||this.communityToken.balance.toBN().lt(this.communityTokenAmount)}}),created:function(){this.isConnected&&(this.CommunityExample=new this.web3.eth.Contract(c.abi,c.address),this.init())},methods:{selectToken:function(t){t===this.optioned||(this.pinAmount="",this.communityTokenAmount="",this.getPower=0,this.optioned=t),this.showOptions=!1},input:function(){var n,a=this;this.inquiring||(this.pinAmount<=0?(this.getPower=0,this.communityTokenAmount=""):(this.inquiring=!0,n=setTimeout(Object(i.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.pinAmount<=0)return a.getPower=0,a.communityTokenAmount="",a.inquiring=!1,t.abrupt("return",clearTimeout(n));t.next=5;break;case 5:return t.next=7,a.CommunityExample.methods.convertInfo(a.communityToken.address,a.pinAmount.toWei()).call();case 7:e=t.sent,a.getPower=e.power,a.communityTokenAmount=e.amount2.fromWei(),a.inquiring=!1,clearTimeout(n);case 12:case"end":return t.stop()}},t)})),1e3)))},approve:function(){var a=this,t=(this.approving=!0,(this.isPINApproved?this.communityToken:d).address),s=new this.web3.eth.Contract(d.abi,t);s.methods.approve(c.address,"100000000".toWei()).send({from:this.address}).on("receipt",function(){var e=Object(i.a)(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.methods.allowance(a.address,c.address).call();case 2:n=t.sent,a.isPINApproved?a["allowance".concat(a.optioned)]=n.fromWei():a.allowancePIN=n.fromWei(),a.isPINApproved&&a.isCommunityTokenApproved?a.convert():a.approve(),a.approving=!1;case 6:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}()).on("error",function(t){a.approving=!1})},convert:function(){var n=this;return Object(i.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.isPINApproved&&n.isCommunityTokenApproved){t.next=4;break}return t.abrupt("return",n.approve());case 4:if(n.pinQuota.lt(n.pinAmount))return t.abrupt("return",a.a.fail(n.$t("HJZCommunity.text17")));t.next=6;break;case 6:n.dealing=!0,t.next=13;break;case 10:t.t0=t.sent.timestamp,t.next=14;break;case 13:t.t0=Math.floor(+new Date/1e3);case 14:return e=t.t0,e=n.CommunityExample.methods.convert(n.communityToken.address,n.pinAmount.toWei(),e+600,n.address),t.prev=16,t.next=19,e.call({from:n.address});case 19:e.send({from:n.address}).on("receipt",function(t){a.a.success(n.$t("successful_transaction")),n.$emit("refreshData"),n.pinAmount="",n.communityTokenAmount="",n.getPower=0,n.dealing=!1}).on("error",function(t){n.dealing=!1}),t.next=26;break;case 22:t.prev=22,t.t1=t.catch(16),t.t1.message.includes("to less")&&a.a.fail(n.$t("burn_worth_tip")),n.dealing=!1;case 26:case"end":return t.stop()}},t,null,[[16,22]])}))()},init:function(){var r=this,t=new this.web3.eth.Contract(d.abi,d.address),e=new this.web3.eth.Contract(l.abi,l.address);t.methods.balanceOf(this.address).call(function(t,e){t||(r.balancePIN=e.fromWei())}),t.methods.allowance(this.address,c.address).call(function(t,e){t||(r.allowancePIN=e.fromWei())}),e.methods.balanceOf(this.address).call(function(t,e){t||(r.balanceHJZ=e.fromWei())}),e.methods.allowance(this.address,c.address).call(function(t,e){t||(r.allowanceHJZ=e.fromWei())}),this.CommunityExample.methods.myQuota().call({from:this.address},function(){var n=Object(i.a)(regeneratorRuntime.mark(function t(e,n){var a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=5;break}return t.next=3,r.$Router.methods.getAmountsOut("1".toWei(),[m.address,d.address]).call();case 3:a=t.sent,r.pinQuota=a[1].toBN().times(n).div(1e36).div(2);case 5:case"end":return t.stop()}},t)}));return function(t,e){return n.apply(this,arguments)}}()),Object(p.b)(this.address).then(function(){var e=Object(i.a)(regeneratorRuntime.mark(function t(e){var n,a,s,i,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=[],a=0;case 2:if(a<e.length)return s=new r.web3.eth.Contract(d.abi,e[a].token),t.next=6,s.methods.symbol().call();t.next=14;break;case 6:return i=t.sent,t.next=9,s.methods.decimals().call();case 9:o=t.sent,n.push({power:e[a].power,pinAmount:e[a].pinAmount.fromWei(),tokenAmount:e[a].tokenAmount.fromWei(o),tokenSymbol:i,hash:e[a].id.slice(0,e[a].id.indexOf("-")),date:r.$toTime(e[a].time,"Y/M/D H:i")});case 11:a++,t.next=2;break;case 14:r.records=n,r.$nextTick(function(){r.$emit("reloadSwiper")});case 16:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}())}}},r=(s("4b76"),s("2877")),n=Object(r.a)(o,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"dao"},[a("div",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[a("span",[n._v(n._s(n.$t("dao_governs_mining")))]),a("span",[n._v(n._s(n.$t("dao_tips.tip1")))])]),a("div",{staticClass:"swap"},[a("div",{staticClass:"token"},[a("span",[n._v("PIN")]),a("span",[n._v(n._s(n.balancePIN.toFixed(2)))])]),a("div",{staticClass:"logo"},[a("img",{attrs:{src:s("f48e")}}),a("img",{attrs:{src:n.communityToken.logoURI}})]),a("div",{staticClass:"token"},[a("div",{staticClass:"select",on:{click:function(t){n.showOptions=!n.showOptions}}},[a("span",[n._v(n._s(n.optioned))]),a("img",{attrs:{src:s("8d7f")}})]),a("span",[n._v(n._s(n.communityToken.balance.toFixed(2)))]),a("div",{directives:[{name:"show",rawName:"v-show",value:n.showOptions,expression:"showOptions"}],staticClass:"options"},n._l(n.options,function(e){return a("span",{class:{active:n.optioned===e},on:{click:function(t){return n.selectToken(e)}}},[n._v(n._s(e))])}),0)])]),a("div",{staticClass:"input-container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:n.pinAmount,expression:"pinAmount"}],attrs:{type:"number",placeholder:"0"},domProps:{value:n.pinAmount},on:{input:[function(t){t.target.composing||(n.pinAmount=t.target.value)},n.input]}}),a("img",{attrs:{src:s("85e0")}}),a("input",{attrs:{type:"number",placeholder:"0",readonly:""},domProps:{value:n.communityTokenAmount}})]),a("div",{staticClass:"get-power"},[a("span",[n._v(n._s(n.$t("HJZCommunity.text5")))]),a("span",[n._v(n._s(n.getPower))])]),a("van-button",{attrs:{disabled:n.btnDisabled,loading:n.approving||n.dealing,"loading-text":n.btnText},on:{click:n.convert}},[n._v(n._s(n.btnText))])],1)]),a("div",{staticClass:"record-title"},[n._v(n._s(n.$t("last_record")))]),n._l(n.records,function(t){return a("div",{staticClass:"record-container"},[a("div",{staticClass:"record-main"},[a("div",{staticClass:"status"},[a("span",{staticClass:"success"},[n._v(n._s(n.$t("success")))]),a("span",[n._v(n._s(t.date))])]),a("div",{staticClass:"amount"},[a("span",[n._v("+"+n._s(t.power))]),a("span",[n._v(n._s(n.$t("power")))])]),a("a",{staticClass:"details",attrs:{target:"_blank",href:"https://bscscan.com/tx/"+t.hash}},[a("div",{staticClass:"tokens"},[a("div",[a("span",[n._v("PIN")]),a("span",[n._v("-"+n._s(t.pinAmount.toFixed(4)))])]),a("div",[a("span",[n._v(n._s(t.tokenSymbol))]),a("span",[n._v("-"+n._s(t.tokenAmount.toFixed(4)))])])]),a("div",{staticClass:"check"},[a("span",[n._v(n._s(n.$t("check")))]),a("van-icon",{attrs:{name:"arrow"}})],1)])])])}),a("div",{directives:[{name:"show",rawName:"v-show",value:!n.records.length,expression:"!records.length"}],staticClass:"record-empty"},[a("img",{attrs:{src:s("d5e6")}}),a("span",[n._v(n._s(n.$t("no_latest_transaction")))])])],2)},[],!1,null,"b6741f64",null);e.default=n.exports},"4b76":function(t,e,n){"use strict";n("f740")},"5b8b":function(t){t.exports=JSON.parse('{"abi":[{"inputs":[{"internalType":"address","name":"_recipient","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"address":"0x31380Edc321D74914574603f95AD82dCDf5aEAb0"}')},f740:function(t,e,n){}}]);