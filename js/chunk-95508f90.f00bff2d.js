(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-95508f90"],{"0430":function(t,e,i){"use strict";i.r(e);i("b0c0"),i("a9e3");var a,n=i("5530"),s=i("ade3"),r=(i("be7f"),i("565f")),o=(i("5fe4"),i("8ad4")),l=(i("8a58"),i("e41f")),l={components:(a={},Object(s.a)(a,l.a.name,l.a),Object(s.a)(a,o.a.name,o.a),Object(s.a)(a,r.a.name,r.a),a),data:function(){return{show:!1,iSlippage:"",iDeadline:10,sliderValue:2,tokenAddr:null}},methods:{open:function(){this.show=!0},close:function(){this.show=!1},initData:function(t){this.tokenAddr=t.toLowerCase();var t=localStorage.getItem(this.tokenAddr);t?(t=JSON.parse(t),this.iSlippage=t.slippage,this.sliderValue=5<t.slippage?5:t.slippage,this.iDeadline=t.deadline,this.$emit("updateTradeSetup",{slippage:t.slippage,deadline:60*t.deadline})):this.$emit("updateTradeSetup",{slippage:2,deadline:600})},onInput:function(t){this.iSlippage=t.target.value,5<t.target.value?this.sliderValue=5:this.sliderValue=t.target.value},onChange:function(t){this.iSlippage=t},updateTradeSetup:function(){var t={slippage:Number(this.iSlippage),deadline:Number(this.iDeadline)};this.$emit("updateTradeSetup",Object(n.a)(Object(n.a)({},t),{},{deadline:60*t.deadline})),localStorage.setItem(this.tokenAddr,JSON.stringify(t)),this.show=!1}}},o=(i("5106"),i("2877")),s=Object(o.a)(l,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("van-popup",{attrs:{round:"",closeable:"",position:"bottom"},on:{"click-close-icon":e.close},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[t("div",{staticClass:"trading-setup"},[t("span",{staticClass:"title"},[e._v(e._s(e.$t("tradingSetup.text1")))]),t("div",{staticClass:"slippage-setting"},[t("div",{staticClass:"title"},[t("span",[e._v(e._s(e.$t("tradingSetup.text2")))]),t("div",[t("input",{attrs:{type:"number"},domProps:{value:e.iSlippage},on:{input:e.onInput}}),t("span",[e._v("%")])])]),t("van-slider",{attrs:{min:"1",max:"5",step:"0.5","button-size":"15","active-color":"#3C94FF","inactive-color":"#D8D8D8"},on:{change:e.onChange},model:{value:e.sliderValue,callback:function(t){e.sliderValue=t},expression:"sliderValue"}}),t("div",{staticClass:"slider-items"},[t("span",[e._v("1%")]),t("span",[e._v("2%")]),t("span",[e._v("3%")]),t("span",[e._v("4%")]),t("span",[e._v("5%")])]),t("span",[e._v(e._s(e.$t("tradingSetup.text3")))])],1),t("div",{staticClass:"deadline"},[t("div",[t("span",[e._v(e._s(e.$t("tradingSetup.text4")))]),t("van-field",{attrs:{type:"number","input-align":"center"},model:{value:e.iDeadline,callback:function(t){e.iDeadline=t},expression:"iDeadline"}}),t("span",[e._v(e._s(e.$t("tradingSetup.text5")))])],1),t("span",[e._v(e._s(e.$t("tradingSetup.text6")))])]),t("van-button",{attrs:{type:"info"},on:{click:e.updateTradeSetup}},[e._v(e._s(e.$t("tradingSetup.text7")))])],1)])},[],!1,null,"4e74cf3c",null);e.default=s.exports},5106:function(t,e,i){"use strict";i("9d89")},"5fe4":function(t,e,i){"use strict";i("68ef"),i("9617")},"8a58":function(t,e,i){"use strict";i("68ef"),i("a71a"),i("9d70"),i("3743"),i("4d75")},"8ad4":function(t,e,i){"use strict";var a=i("d282"),d=i("ea8e"),n=i("a142");function s(t,e){return JSON.stringify(t)===JSON.stringify(e)}var r=i("1325"),o=i("482d"),i=i("3875"),a=Object(a.a)("slider"),l=a[0],h=a[1];e.a=l({mixins:[i.a,{inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}],props:{disabled:Boolean,vertical:Boolean,range:Boolean,barHeight:[Number,String],buttonSize:[Number,String],activeColor:String,inactiveColor:String,min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},step:{type:[Number,String],default:1},value:{type:[Number,Array],default:0}},data:function(){return{dragStatus:""}},computed:{scope:function(){return this.max-this.min},buttonStyle:function(){var t;if(this.buttonSize)return{width:t=Object(d.a)(this.buttonSize),height:t}}},created:function(){this.updateValue(this.value)},mounted:function(){this.range?(this.bindTouchEvent(this.$refs.wrapper0),this.bindTouchEvent(this.$refs.wrapper1)):this.bindTouchEvent(this.$refs.wrapper)},methods:{onTouchStart:function(t){this.disabled||(this.touchStart(t),this.currentValue=this.value,this.range?this.startValue=this.value.map(this.format):this.startValue=this.format(this.value),this.dragStatus="start")},onTouchMove:function(t){this.disabled||("start"===this.dragStatus&&this.$emit("drag-start"),Object(r.c)(t,!0),this.touchMove(t),this.dragStatus="draging",t=this.$el.getBoundingClientRect(),t=(this.vertical?this.deltaY:this.deltaX)/(this.vertical?t.height:t.width)*this.scope,this.range?this.currentValue[this.index]=this.startValue[this.index]+t:this.currentValue=this.startValue+t,this.updateValue(this.currentValue))},onTouchEnd:function(){this.disabled||("draging"===this.dragStatus&&(this.updateValue(this.currentValue,!0),this.$emit("drag-end")),this.dragStatus="")},onClick:function(t){var e,i;t.stopPropagation(),this.disabled||(i=this.$el.getBoundingClientRect(),t=this.vertical?t.clientY-i.top:t.clientX-i.left,i=this.vertical?i.height:i.width,t=+this.min+t/i*this.scope,this.range&&(t<=((e=(i=this.value)[0])+(i=i[1]))/2?e=t:i=t,t=[e,i]),this.startValue=this.value,this.updateValue(t,!0))},handleOverlap:function(t){return t[0]>t[1]?(t=function e(i){var a;return Object(n.c)(i)?Array.isArray(i)?i.map(e):"object"==typeof i?(a={},Object.keys(i).forEach(function(t){a[t]=e(i[t])}),a):i:i}(t)).reverse():t},updateValue:function(t,e){t=this.range?this.handleOverlap(t).map(this.format):this.format(t),s(t,this.value)||this.$emit("input",t),e&&!s(t,this.startValue)&&this.$emit("change",t)},format:function(t){var e=+this.min,i=+this.max,a=+this.step,i=(t=Object(o.c)(t,e,i),Math.round((t-e)/a)*a);return Object(o.a)(e,i)}},render:function(){function t(){var t=r.value,e=r.min,i=r.range,a=r.scope;return i?100*(t[0]-e)/a+"%":null}function e(e){var i="number"==typeof e,a=i?r.value[e]:r.value;return o("div",{ref:i?"wrapper"+e:"wrapper",attrs:{role:"slider",tabindex:r.disabled?-1:0,"aria-valuemin":r.min,"aria-valuenow":r.value,"aria-valuemax":r.max,"aria-orientation":r.vertical?"vertical":"horizontal"},class:h(i?"button-wrapper-"+["left","right"][e]:"button-wrapper"),on:{touchstart:function(){i&&(r.index=e)},click:function(t){return t.stopPropagation()}}},[function(){if(i){var t=r.slots(0===e?"left-button":"right-button",{value:a});if(t)return t}return r.slots("button")?r.slots("button"):o("div",{class:h("button"),style:r.buttonStyle})}()])}var i,a,n,s,r=this,o=arguments[0],l=this.vertical,u=l?"height":"width",c=((s={background:this.inactiveColor})[l?"width":"height"]=Object(d.a)(this.barHeight),(i={})[u]=(u=r.value,a=r.min,c=r.range,n=r.scope,c?100*(u[1]-u[0])/n+"%":100*(u-a)/n+"%"),i.left=this.vertical?null:t(),i.top=this.vertical?t():null,i.background=this.activeColor,i);this.dragStatus&&(c.transition="none");return o("div",{style:s,class:h({disabled:this.disabled,vertical:l}),on:{click:this.onClick}},[o("div",{class:h("bar"),style:c},[this.range?[e(0),e(1)]:e()])])}})},9617:function(t,e,i){},"9d89":function(t,e,i){},e41f:function(t,e,i){"use strict";var a=i("d282"),o=i("a142"),n=i("6605"),l=i("ad06"),i=Object(a.a)("popup"),a=i[0],u=i[1];e.a=a({mixins:[Object(n.a)()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){function t(e){return function(t){return i.$emit(e,t)}}var i=this;this.onClick=t("click"),this.onOpened=t("opened"),this.onClosed=t("closed")},methods:{onClickCloseIcon:function(t){this.$emit("click-close-icon",t),this.close()}},render:function(){var t,e,i,a,n,s,r=arguments[0];if(this.shouldRender)return t=this.round,e=this.position,i=this.duration,a="center"===e,n=this.transition||(a?"van-fade":"van-popup-slide-"+e),s={},Object(o.c)(i)&&(s[a?"animationDuration":"transitionDuration"]=i+"s"),r("transition",{attrs:{appear:this.transitionAppear,name:n},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[r("div",{directives:[{name:"show",value:this.value}],style:s,class:u(((a={round:t})[e]=e,a["safe-area-inset-bottom"]=this.safeAreaInsetBottom,a)),on:{click:this.onClick}},[this.slots(),this.closeable&&r(l.a,{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:u("close-icon",this.closeIconPosition),on:{click:this.onClickCloseIcon}})])])}})}}]);