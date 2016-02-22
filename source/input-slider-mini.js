/*
 jQuery Input Slider Mini
 Copyright (c) 2016 Milad Abooali (http://abooali.ir || https://codebox.ir)
 Licensed under the MIT license (http://mit-license.org/)
*/
var ISM_b=[].slice,ISM_i=[].indexOf||function(t){for(var i=0,e=this.length;e>i;i++)if(i in this&&this[i]===t)return i;return-1};!function(t,i){var e;return e=function(){function i(i,e){var s,a=this;this.input=i,this.defaultOptions={animate:!0,snapMid:!1,classPrefix:null,classSuffix:null,theme:null,highlight:!1},this.settings=t.extend({},this.defaultOptions,e),this.settings.theme&&(this.settings.classSuffix="-"+this.settings.theme),this.input.hide(),this.slider=t("<div>").addClass("slider"+(this.settings.classSuffix||"")).css({position:"relative",userSelect:"none",boxSizing:"border-box"}).insertBefore(this.input),this.input.attr("id")&&this.slider.attr("id",this.input.attr("id")+"-slider"),this.track=this.createDivElement("track").css({width:"100%"}),this.settings.highlight&&(this.highlightTrack=this.createDivElement("highlight-track").css({width:"0"})),this.dragger=this.createDivElement("dragger"),this.slider.css({minHeight:this.dragger.outerHeight(),marginLeft:this.dragger.outerWidth()/2,marginRight:this.dragger.outerWidth()/2}),this.track.css({marginTop:this.track.outerHeight()/-2}),this.settings.highlight&&this.highlightTrack.css({marginTop:this.track.outerHeight()/-2}),this.dragger.css({marginTop:this.dragger.outerWidth()/-2,marginLeft:this.dragger.outerWidth()/-2}),this.track.mousedown(function(t){return a.trackEvent(t)}),this.settings.highlight&&this.highlightTrack.mousedown(function(t){return a.trackEvent(t)}),this.dragger.mousedown(function(t){return 1===t.which?(a.dragging=!0,a.dragger.addClass("dragging"),a.domDrag(t.pageX,t.pageY),!1):void 0}),t("body").mousemove(function(i){return a.dragging?(a.domDrag(i.pageX,i.pageY),t("body").css({cursor:"pointer"})):void 0}).mouseup(function(i){return a.dragging?(a.dragging=!1,a.dragger.removeClass("dragging"),t("body").css({cursor:"auto"})):void 0}),this.pagePos=0,""===this.input.val()?(this.value=this.getRange().min,this.input.val(this.value)):this.value=this.nearestValidValue(this.input.val()),this.setSliderPositionFromValue(this.value),s=this.valueToRatio(this.value),this.input.trigger("slider:ready",{value:this.value,ratio:s,position:s*this.slider.outerWidth(),el:this.slider})}return i.prototype.createDivElement=function(i){var e;return e=t("<div>").addClass(i).css({position:"absolute",top:"50%",userSelect:"none",cursor:"pointer"}).appendTo(this.slider)},i.prototype.setRatio=function(t){var i;return t=Math.min(1,t),t=Math.max(0,t),i=this.ratioToValue(t),this.setSliderPositionFromValue(i),this.valueChanged(i,t,"setRatio")},i.prototype.setValue=function(t){var i;return t=this.nearestValidValue(t),i=this.valueToRatio(t),this.setSliderPositionFromValue(t),this.valueChanged(t,i,"setValue")},i.prototype.trackEvent=function(t){return 1===t.which?(this.domDrag(t.pageX,t.pageY,!0),this.dragging=!0,!1):void 0},i.prototype.domDrag=function(t,i,e){var s,a,r;return null==e&&(e=!1),s=t-this.slider.offset().left,s=Math.min(this.slider.outerWidth(),s),s=Math.max(0,s),this.pagePos!==s?(this.pagePos=s,a=s/this.slider.outerWidth(),r=this.ratioToValue(a),this.valueChanged(r,a,"domDrag"),this.settings.snap?this.setSliderPositionFromValue(r,e):this.setSliderPosition(s,e)):void 0},i.prototype.setSliderPosition=function(t,i){if(null==i&&(i=!1),i&&this.settings.animate){if(this.dragger.animate({left:t},200),this.settings.highlight)return this.highlightTrack.animate({width:t},200)}else if(this.dragger.css({left:t}),this.settings.highlight)return this.highlightTrack.css({width:t})},i.prototype.setSliderPositionFromValue=function(t,i){var e;return null==i&&(i=!1),e=this.valueToRatio(t),this.setSliderPosition(e*this.slider.outerWidth(),i)},i.prototype.getRange=function(){return this.settings.allowedValues?{min:Math.min.apply(Math,this.settings.allowedValues),max:Math.max.apply(Math,this.settings.allowedValues)}:this.settings.range?{min:parseFloat(this.settings.range[0]),max:parseFloat(this.settings.range[1])}:{min:0,max:1}},i.prototype.nearestValidValue=function(i){var e,s,a,r;return a=this.getRange(),i=Math.min(a.max,i),i=Math.max(a.min,i),this.settings.allowedValues?(e=null,t.each(this.settings.allowedValues,function(){return null===e||Math.abs(this-i)<Math.abs(e-i)?e=this:void 0}),e):this.settings.step?(s=(a.max-a.min)/this.settings.step,r=Math.floor((i-a.min)/this.settings.step),(i-a.min)%this.settings.step>this.settings.step/2&&s>r&&(r+=1),r*this.settings.step+a.min):i},i.prototype.valueToRatio=function(t){var i,e,s,a,r,n,h,l;if(this.settings.equalSteps){for(l=this.settings.allowedValues,a=n=0,h=l.length;h>n;a=++n)i=l[a],("undefined"==typeof e||null===e||Math.abs(i-t)<Math.abs(e-t))&&(e=i,s=a);return this.settings.snapMid?(s+.5)/this.settings.allowedValues.length:s/(this.settings.allowedValues.length-1)}return r=this.getRange(),(t-r.min)/(r.max-r.min)},i.prototype.ratioToValue=function(t){var i,e,s,a,r;return this.settings.equalSteps?(r=this.settings.allowedValues.length,a=Math.round(t*r-.5),i=Math.min(a,this.settings.allowedValues.length-1),this.settings.allowedValues[i]):(e=this.getRange(),s=t*(e.max-e.min)+e.min,this.nearestValidValue(s))},i.prototype.valueChanged=function(i,e,s){var a;if(i.toString()!==this.value.toString())return this.value=i,a={value:i,ratio:e,position:e*this.slider.outerWidth(),trigger:s,el:this.slider},this.input.val(i).trigger(t.Event("change",a)).trigger("slider:changed",a)},i}(),t.extend(t.fn,{ISM_V:function(){var i,s,a;return a=arguments[0],i=2<=arguments.length?ISM_b.call(arguments,1):[],s=["setRatio","setValue"],t(this).each(function(){var r,n;return a&&ISM_i.call(s,a)>=0?(r=t(this).data("slider-object"),r[a].apply(r,i)):(n=a,t(this).data("slider-object",new e(t(this),n)))})}}),t(function(){return t("[data-slider]").each(function(){var i,e,s,a;return i=t(this),s={},e=i.data("slider-values"),e&&(s.allowedValues=function(){var t,i,s,r;for(s=e.split(","),r=[],t=0,i=s.length;i>t;t++)a=s[t],r.push(parseFloat(a));return r}()),i.data("slider-range")&&(s.range=i.data("slider-range").split(",")),i.data("slider-step")&&(s.step=i.data("slider-step")),s.snap=i.data("slider-snap"),s.equalSteps=i.data("slider-equal-steps"),i.data("slider-theme")&&(s.theme=i.data("slider-theme")),i.attr("data-slider-highlight")&&(s.highlight=i.data("slider-highlight")),i.ISM_V(s)})})}(this.jQuery||this.Zepto,this);
