/*!
 * jQuery Steps v1.1.0 - 09/04/2014
 * Copyright (c) 2014 Rafael Staib (http://www.jquery-steps.com)
 * Licensed under MIT http://www.opensource.org/licenses/MIT
 */
!function(a,b){function c(a,b){o(a).push(b)}function d(d,e,f){var g=d.children(e.headerTag),h=d.children(e.bodyTag);g.length>h.length?R(Z,"contents"):g.length<h.length&&R(Z,"titles");var i=e.startIndex;if(f.stepCount=g.length,e.saveState&&a.cookie){var j=a.cookie(U+q(d)),k=parseInt(j,0);!isNaN(k)&&k<f.stepCount&&(i=k)}f.currentIndex=i,g.each(function(e){var f=a(this),g=h.eq(e),i=g.data("mode"),j=null==i?$.html:r($,/^\s*$/.test(i)||isNaN(i)?i:parseInt(i,0)),k=j===$.html||g.data("url")===b?"":g.data("url"),l=j!==$.html&&"1"===g.data("loaded"),m=a.extend({},bb,{title:f.html(),content:j===$.html?g.html():"",contentUrl:k,contentMode:j,contentLoaded:l});c(d,m)})}function e(a){a.triggerHandler("canceled")}function f(a,b){return a.currentIndex-b}function g(b,c){var d=i(b);b.unbind(d).removeData("uid").removeData("options").removeData("state").removeData("steps").removeData("eventNamespace").find(".actions a").unbind(d),b.removeClass(c.clearFixCssClass+" vertical");var e=b.find(".content > *");e.removeData("loaded").removeData("mode").removeData("url"),e.removeAttr("id").removeAttr("role").removeAttr("tabindex").removeAttr("class").removeAttr("style")._removeAria("labelledby")._removeAria("hidden"),b.find(".content > [data-mode='async'],.content > [data-mode='iframe']").empty();var f=a('<{0} class="{1}"></{0}>'.format(b.get(0).tagName,b.attr("class"))),g=b._id();return null!=g&&""!==g&&f._id(g),f.html(b.find(".content").html()),b.after(f),b.remove(),f}function h(a,b){var c=a.find(".steps li").eq(b.currentIndex);a.triggerHandler("finishing",[b.currentIndex])?(c.addClass("done").removeClass("error"),a.triggerHandler("finished",[b.currentIndex])):c.addClass("error")}function i(a){var b=a.data("eventNamespace");return null==b&&(b="."+q(a),a.data("eventNamespace",b)),b}function j(a,b){var c=q(a);return a.find("#"+c+V+b)}function k(a,b){var c=q(a);return a.find("#"+c+W+b)}function l(a,b){var c=q(a);return a.find("#"+c+X+b)}function m(a){return a.data("options")}function n(a){return a.data("state")}function o(a){return a.data("steps")}function p(a,b){var c=o(a);return(0>b||b>=c.length)&&R(Y),c[b]}function q(a){var b=a.data("uid");return null==b&&(b=a._id(),null==b&&(b="steps-uid-".concat(T),a._id(b)),T++,a.data("uid",b)),b}function r(a,c){if(S("enumType",a),S("keyOrValue",c),"string"==typeof c){var d=a[c];return d===b&&R("The enum key '{0}' does not exist.",c),d}if("number"==typeof c){for(var e in a)if(a[e]===c)return c;R("Invalid enum value '{0}'.",c)}else R("Invalid key or value type.")}function s(a,b,c){return B(a,b,c,v(c,1))}function t(a,b,c){return B(a,b,c,f(c,1))}function u(a,b,c,d){if((0>d||d>=c.stepCount)&&R(Y),!(b.forceMoveForward&&d<c.currentIndex)){var e=c.currentIndex;return a.triggerHandler("stepChanging",[c.currentIndex,d])?(c.currentIndex=d,O(a,b,c),E(a,b,c,e),D(a,b,c),A(a,b,c),P(a,b,c,d,e,function(){a.triggerHandler("stepChanged",[d,e])})):a.find(".steps li").eq(e).addClass("error"),!0}}function v(a,b){return a.currentIndex+b}function w(b){var c=a.extend(!0,{},cb,b);return this.each(function(){var b=a(this),e={currentIndex:c.startIndex,currentStep:null,stepCount:0,transitionElement:null};b.data("options",c),b.data("state",e),b.data("steps",[]),d(b,c,e),J(b,c,e),G(b,c),c.autoFocus&&0===T&&j(b,c.startIndex).focus(),b.triggerHandler("init",[c.startIndex])})}function x(b,c,d,e,f){(0>e||e>d.stepCount)&&R(Y),f=a.extend({},bb,f),y(b,e,f),d.currentIndex!==d.stepCount&&d.currentIndex>=e&&(d.currentIndex++,O(b,c,d)),d.stepCount++;var g=b.find(".content"),h=a("<{0}>{1}</{0}>".format(c.headerTag,f.title)),i=a("<{0}></{0}>".format(c.bodyTag));return(null==f.contentMode||f.contentMode===$.html)&&i.html(f.content),0===e?g.prepend(i).prepend(h):k(b,e-1).after(i).after(h),K(b,d,i,e),N(b,c,d,h,e),F(b,c,d,e),e===d.currentIndex&&E(b,c,d),D(b,c,d),b}function y(a,b,c){o(a).splice(b,0,c)}function z(b){var c=a(this),d=m(c),e=n(c);if(d.suppressPaginationOnFocus&&c.find(":focus").is(":input"))return b.preventDefault(),!1;var f={left:37,right:39};b.keyCode===f.left?(b.preventDefault(),t(c,d,e)):b.keyCode===f.right&&(b.preventDefault(),s(c,d,e))}function A(b,c,d){if(d.stepCount>0){var e=d.currentIndex,f=p(b,e);if(!c.enableContentCache||!f.contentLoaded)switch(r($,f.contentMode)){case $.iframe:b.find(".content > .body").eq(d.currentIndex).empty().html('<iframe src="'+f.contentUrl+'" frameborder="0" scrolling="no" />').data("loaded","1");break;case $.async:var g=k(b,e)._aria("busy","true").empty().append(M(c.loadingTemplate,{text:c.labels.loading}));a.ajax({url:f.contentUrl,cache:!1}).done(function(a){g.empty().html(a)._aria("busy","false").data("loaded","1"),b.triggerHandler("contentLoaded",[e])})}}}function B(a,b,c,d){var e=c.currentIndex;if(d>=0&&d<c.stepCount&&!(b.forceMoveForward&&d<c.currentIndex)){var f=j(a,d),g=f.parent(),h=g.hasClass("disabled");return g._enableAria(),f.click(),e===c.currentIndex&&h?(g._enableAria(!1),!1):!0}return!1}function C(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),f=m(d),g=n(d),i=c.attr("href");switch(i.substring(i.lastIndexOf("#")+1)){case"cancel":e(d);break;case"finish":h(d,g);break;case"next":s(d,f,g);break;case"previous":t(d,f,g)}}function D(a,b,c){if(b.enablePagination){var d=a.find(".actions a[href$='#finish']").parent(),e=a.find(".actions a[href$='#next']").parent();if(!b.forceMoveForward){var f=a.find(".actions a[href$='#previous']").parent();f._enableAria(c.currentIndex>0)}b.enableFinishButton&&b.showFinishButtonAlways?(d._enableAria(c.stepCount>0),e._enableAria(c.stepCount>1&&c.stepCount>c.currentIndex+1)):(d._showAria(b.enableFinishButton&&c.stepCount===c.currentIndex+1),e._showAria(0===c.stepCount||c.stepCount>c.currentIndex+1)._enableAria(c.stepCount>c.currentIndex+1||!b.enableFinishButton))}}function E(b,c,d,e){var f=j(b,d.currentIndex),g=a('<span class="current-info audible">'+c.labels.current+" </span>"),h=b.find(".content > .title");if(null!=e){var i=j(b,e);i.parent().addClass("done").removeClass("error")._selectAria(!1),h.eq(e).removeClass("current").next(".body").removeClass("current"),g=i.find(".current-info"),f.focus()}f.prepend(g).parent()._selectAria().removeClass("done")._enableAria(),h.eq(d.currentIndex).addClass("current").next(".body").addClass("current")}function F(a,b,c,d){for(var e=q(a),f=d;f<c.stepCount;f++){var g=e+V+f,h=e+W+f,i=e+X+f,j=a.find(".title").eq(f)._id(i);a.find(".steps a").eq(f)._id(g)._aria("controls",h).attr("href","#"+i).html(M(b.titleTemplate,{index:f+1,title:j.html()})),a.find(".body").eq(f)._id(h)._aria("labelledby",i)}}function G(a,b){var c=i(a);a.bind("canceled"+c,b.onCanceled),a.bind("contentLoaded"+c,b.onContentLoaded),a.bind("finishing"+c,b.onFinishing),a.bind("finished"+c,b.onFinished),a.bind("init"+c,b.onInit),a.bind("stepChanging"+c,b.onStepChanging),a.bind("stepChanged"+c,b.onStepChanged),b.enableKeyNavigation&&a.bind("keyup"+c,z),a.find(".actions a").bind("click"+c,C)}function H(a,b,c,d){return 0>d||d>=c.stepCount||c.currentIndex===d?!1:(I(a,d),c.currentIndex>d&&(c.currentIndex--,O(a,b,c)),c.stepCount--,l(a,d).remove(),k(a,d).remove(),j(a,d).parent().remove(),0===d&&a.find(".steps li").first().addClass("first"),d===c.stepCount&&a.find(".steps li").eq(d).addClass("last"),F(a,b,c,d),D(a,b,c),!0)}function I(a,b){o(a).splice(b,1)}function J(b,c,d){var e='<{0} class="{1}">{2}</{0}>',f=r(_,c.stepsOrientation),g=f===_.vertical?" vertical":"",h=a(e.format(c.contentContainerTag,"content "+c.clearFixCssClass,b.html())),i=a(e.format(c.stepsContainerTag,"steps "+c.clearFixCssClass,'<ul role="tablist"></ul>')),j=h.children(c.headerTag),k=h.children(c.bodyTag);b.attr("role","application").empty().append(i).append(h).addClass(c.cssClass+" "+c.clearFixCssClass+g),k.each(function(c){K(b,d,a(this),c)}),j.each(function(e){N(b,c,d,a(this),e)}),E(b,c,d),L(b,c,d)}function K(a,b,c,d){var e=q(a),f=e+W+d,g=e+X+d;c._id(f).attr("role","tabpanel")._aria("labelledby",g).addClass("body")._showAria(b.currentIndex===d)}function L(a,b,c){if(b.enablePagination){var d='<{0} class="actions {1}"><ul role="menu" aria-label="{2}">{3}</ul></{0}>',e='<li><a href="#{0}" role="menuitem">{1}</a></li>',f="";b.forceMoveForward||(f+=e.format("previous",b.labels.previous)),f+=e.format("next",b.labels.next),b.enableFinishButton&&(f+=e.format("finish",b.labels.finish)),b.enableCancelButton&&(f+=e.format("cancel",b.labels.cancel)),a.append(d.format(b.actionContainerTag,b.clearFixCssClass,b.labels.pagination,f)),D(a,b,c),A(a,b,c)}}function M(a,c){for(var d=a.match(/#([a-z]*)#/gi),e=0;e<d.length;e++){var f=d[e],g=f.substring(1,f.length-1);c[g]===b&&R("The key '{0}' does not exist in the substitute collection!",g),a=a.replace(f,c[g])}return a}function N(b,c,d,e,f){var g=q(b),h=g+V+f,j=g+W+f,k=g+X+f,l=b.find(".steps > ul"),m=M(c.titleTemplate,{index:f+1,title:e.html()}),n=a('<li role="tab"><a id="'+h+'" href="#'+k+'" aria-controls="'+j+'">'+m+"</a></li>");n._enableAria(c.enableAllSteps||d.currentIndex>f),d.currentIndex>f&&n.addClass("done"),e._id(k).attr("tabindex","-1").addClass("title"),0===f?l.prepend(n):l.find("li").eq(f-1).after(n),0===f&&l.find("li").removeClass("first").eq(f).addClass("first"),f===d.stepCount-1&&l.find("li").removeClass("last").eq(f).addClass("last"),n.children("a").bind("click"+i(b),Q)}function O(b,c,d){c.saveState&&a.cookie&&a.cookie(U+q(b),d.currentIndex)}function P(b,c,d,e,f,g){var h=b.find(".content > .body"),i=r(ab,c.transitionEffect),j=c.transitionEffectSpeed,k=h.eq(e),l=h.eq(f);switch(i){case ab.fade:case ab.slide:var m=i===ab.fade?"fadeOut":"slideUp",o=i===ab.fade?"fadeIn":"slideDown";d.transitionElement=k,l[m](j,function(){var b=a(this)._showAria(!1).parent().parent(),c=n(b);c.transitionElement&&(c.transitionElement[o](j,function(){a(this)._showAria()}).promise().done(g),c.transitionElement=null)});break;case ab.slideLeft:var p=l.outerWidth(!0),q=e>f?-p:p,s=e>f?p:-p;a.when(l.animate({left:q},j,function(){a(this)._showAria(!1)}),k.css("left",s+"px")._showAria().animate({left:0},j)).done(g);break;default:a.when(l._showAria(!1),k._showAria()).done(g)}}function Q(b){b.preventDefault();var c=a(this),d=c.parent().parent().parent().parent(),e=m(d),f=n(d),g=f.currentIndex;if(c.parent().is(":not(.disabled):not(.current)")){var h=c.attr("href"),i=parseInt(h.substring(h.lastIndexOf("-")+1),0);u(d,e,f,i)}return g===f.currentIndex?(j(d,g).focus(),!1):void 0}function R(a){throw arguments.length>1&&(a=a.format(Array.prototype.slice.call(arguments,1))),new Error(a)}function S(a,b){null==b&&R("The argument '{0}' is null or undefined.",a)}a.fn.extend({_aria:function(a,b){return this.attr("aria-"+a,b)},_removeAria:function(a){return this.removeAttr("aria-"+a)},_enableAria:function(a){return null==a||a?this.removeClass("disabled")._aria("disabled","false"):this.addClass("disabled")._aria("disabled","true")},_showAria:function(a){return null==a||a?this.show()._aria("hidden","false"):this.hide()._aria("hidden","true")},_selectAria:function(a){return null==a||a?this.addClass("current")._aria("selected","true"):this.removeClass("current")._aria("selected","false")},_id:function(a){return a?this.attr("id",a):this.attr("id")}}),String.prototype.format||(String.prototype.format=function(){for(var b=1===arguments.length&&a.isArray(arguments[0])?arguments[0]:arguments,c=this,d=0;d<b.length;d++){var e=new RegExp("\\{"+d+"\\}","gm");c=c.replace(e,b[d])}return c});var T=0,U="jQu3ry_5teps_St@te_",V="-t-",W="-p-",X="-h-",Y="Index out of range.",Z="One or more corresponding step {0} are missing.";a.fn.steps=function(b){return a.fn.steps[b]?a.fn.steps[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.steps"):w.apply(this,arguments)},a.fn.steps.add=function(a){var b=n(this);return x(this,m(this),b,b.stepCount,a)},a.fn.steps.destroy=function(){return g(this,m(this))},a.fn.steps.finish=function(){h(this,n(this))},a.fn.steps.getCurrentIndex=function(){return n(this).currentIndex},a.fn.steps.getCurrentStep=function(){return p(this,n(this).currentIndex)},a.fn.steps.getStep=function(a){return p(this,a)},a.fn.steps.insert=function(a,b){return x(this,m(this),n(this),a,b)},a.fn.steps.next=function(){return s(this,m(this),n(this))},a.fn.steps.previous=function(){return t(this,m(this),n(this))},a.fn.steps.remove=function(a){return H(this,m(this),n(this),a)},a.fn.steps.setStep=function(){throw new Error("Not yet implemented!")},a.fn.steps.skip=function(){throw new Error("Not yet implemented!")};var $=a.fn.steps.contentMode={html:0,iframe:1,async:2},_=a.fn.steps.stepsOrientation={horizontal:0,vertical:1},ab=a.fn.steps.transitionEffect={none:0,fade:1,slide:2,slideLeft:3},bb=a.fn.steps.stepModel={title:"",content:"",contentUrl:"",contentMode:$.html,contentLoaded:!1},cb=a.fn.steps.defaults={headerTag:"h1",bodyTag:"div",contentContainerTag:"div",actionContainerTag:"div",stepsContainerTag:"div",cssClass:"wizard",clearFixCssClass:"clearfix",stepsOrientation:_.horizontal,titleTemplate:'<span class="number">#index#.</span> #title#',loadingTemplate:'<span class="spinner"></span> #text#',autoFocus:!1,enableAllSteps:!1,enableKeyNavigation:!0,enablePagination:!0,suppressPaginationOnFocus:!0,enableContentCache:!0,enableCancelButton:!1,enableFinishButton:!0,preloadContent:!1,showFinishButtonAlways:!1,forceMoveForward:!1,saveState:!1,startIndex:0,transitionEffect:ab.none,transitionEffectSpeed:200,onStepChanging:function(){return!0},onStepChanged:function(){},onCanceled:function(){},onFinishing:function(){return!0},onFinished:function(){},onContentLoaded:function(){},onInit:function(){},labels:{cancel:"Cancel",current:"current step:",pagination:"Pagination",finish:"Finish",next:"Next",previous:"Previous",loading:"Loading ..."}}}(jQuery);
/*! jQuery Validation Plugin - v1.15.1 - 7/22/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return!c.settings.submitHandler||(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&null!=j.form){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]);var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(a){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",a),a instanceof TypeError&&(a.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),a}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{boolean:function(a){return a},string:function(b,c){return!!a(b,c.form).length},function:function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});
/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "./jquery.validate"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

(function() {

	function stripHtml(value) {
		// remove html tags and space chars
		return value.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ")
		// remove punctuation
		.replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "");
	}

	$.validator.addMethod("maxWords", function(value, element, params) {
		return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length <= params;
	}, $.validator.format("Please enter {0} words or less."));

	$.validator.addMethod("minWords", function(value, element, params) {
		return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length >= params;
	}, $.validator.format("Please enter at least {0} words."));

	$.validator.addMethod("rangeWords", function(value, element, params) {
		var valueStripped = stripHtml(value),
			regex = /\b\w+\b/g;
		return this.optional(element) || valueStripped.match(regex).length >= params[0] && valueStripped.match(regex).length <= params[1];
	}, $.validator.format("Please enter between {0} and {1} words."));

}());

// Accept a value from a file input based on a required mimetype
$.validator.addMethod("accept", function(value, element, param) {
	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
	optionalValue = this.optional(element),
	i, file;

	// Element is optional
	if (optionalValue) {
		return optionalValue;
	}

	if ($(element).attr("type") === "file") {
		// If we are using a wildcard, make it regex friendly
		typeParam = typeParam.replace(/\*/g, ".*");

		// Check if the element has a FileList before checking each file
		if (element.files && element.files.length) {
			for (i = 0; i < element.files.length; i++) {
				file = element.files[i];

				// Grab the mimetype from the loaded file, verify it matches
				if (!file.type.match(new RegExp( "\\.?(" + typeParam + ")$", "i"))) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, $.validator.format("Please enter a value with a valid mimetype."));

$.validator.addMethod("alphanumeric", function(value, element) {
	return this.optional(element) || /^\w+$/i.test(value);
}, "Letters, numbers, and underscores only please");

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod("bankaccountNL", function(value, element) {
	if (this.optional(element)) {
		return true;
	}
	if (!(/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(value))) {
		return false;
	}
	// now '11 check'
	var account = value.replace(/ /g, ""), // remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring(pos, pos + 1);
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number");

$.validator.addMethod("bankorgiroaccountNL", function(value, element) {
	return this.optional(element) ||
			($.validator.methods.bankaccountNL.call(this, value, element)) ||
			($.validator.methods.giroaccountNL.call(this, value, element));
}, "Please specify a valid bank or giro account number");

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or one of the following digits ('0' for test (therefore not allowed), '1' for passive participant and '2' for active participant)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod("bic", function(value, element) {
    return this.optional( element ) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test( value );
}, "Please specify a valid BIC code");

/*
 * Código de identificación fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 */
$.validator.addMethod( "cifES", function( value ) {
	"use strict";

	var num = [],
		controlDigit, sum, i, count, tmp, secondDigit;

	value = value.toUpperCase();

	// Quick format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	for ( i = 0; i < 9; i++ ) {
		num[ i ] = parseInt( value.charAt( i ), 10 );
	}

	// Algorithm for checking CIF codes
	sum = num[ 2 ] + num[ 4 ] + num[ 6 ];
	for ( count = 1; count < 8; count += 2 ) {
		tmp = ( 2 * num[ count ] ).toString();
		secondDigit = tmp.charAt( 1 );

		sum += parseInt( tmp.charAt( 0 ), 10 ) + ( secondDigit === "" ? 0 : parseInt( secondDigit, 10 ) );
	}

	/* The first (position 1) is a letter following the following criteria:
	 *	A. Corporations
	 *	B. LLCs
	 *	C. General partnerships
	 *	D. Companies limited partnerships
	 *	E. Communities of goods
	 *	F. Cooperative Societies
	 *	G. Associations
	 *	H. Communities of homeowners in horizontal property regime
	 *	J. Civil Societies
	 *	K. Old format
	 *	L. Old format
	 *	M. Old format
	 *	N. Nonresident entities
	 *	P. Local authorities
	 *	Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
	 *	R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
	 *	S. Organs of State Administration and regions
	 *	V. Agrarian Transformation
	 *	W. Permanent establishments of non-resident in Spain
	 */
	if ( /^[ABCDEFGHJNPQRSUVW]{1}/.test( value ) ) {
		sum += "";
		controlDigit = 10 - parseInt( sum.charAt( sum.length - 1 ), 10 );
		value += controlDigit;
		return ( num[ 8 ].toString() === String.fromCharCode( 64 + controlDigit ) || num[ 8 ].toString() === value.charAt( value.length - 1 ) );
	}

	return false;

}, "Please specify a valid CIF number." );

/*
 * Brazillian CPF number (Cadastrado de Pessoas Físicas) is the equivalent of a Brazilian tax registration number.
 * CPF numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod("cpfBR", function(value) {
	// Removing special characters from value
	value = value.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "");

	// Checking value to have 11 digits only
	if (value.length !== 11) {
		return false;
	}

	var sum = 0,
		firstCN, secondCN, checkResult, i;

	firstCN = parseInt(value.substring(9, 10), 10);
	secondCN = parseInt(value.substring(10, 11), 10);

	checkResult = function(sum, cn) {
		var result = (sum * 10) % 11;
		if ((result === 10) || (result === 11)) {result = 0;}
		return (result === cn);
	};

	// Checking for dump data
	if (value === "" ||
		value === "00000000000" ||
		value === "11111111111" ||
		value === "22222222222" ||
		value === "33333333333" ||
		value === "44444444444" ||
		value === "55555555555" ||
		value === "66666666666" ||
		value === "77777777777" ||
		value === "88888888888" ||
		value === "99999999999"
	) {
		return false;
	}

	// Step 1 - using first Check Number:
	for ( i = 1; i <= 9; i++ ) {
		sum = sum + parseInt(value.substring(i - 1, i), 10) * (11 - i);
	}

	// If first Check Number (CN) is valid, move to Step 2 - using second Check Number:
	if ( checkResult(sum, firstCN) ) {
		sum = 0;
		for ( i = 1; i <= 10; i++ ) {
			sum = sum + parseInt(value.substring(i - 1, i), 10) * (12 - i);
		}
		return checkResult(sum, secondCN);
	}
	return false;

}, "Please specify a valid CPF number");

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod("creditcardtypes", function(value, element, param) {
	if (/[^0-9\-]+/.test(value)) {
		return false;
	}

	value = value.replace(/\D/g, "");

	var validTypes = 0x0000;

	if (param.mastercard) {
		validTypes |= 0x0001;
	}
	if (param.visa) {
		validTypes |= 0x0002;
	}
	if (param.amex) {
		validTypes |= 0x0004;
	}
	if (param.dinersclub) {
		validTypes |= 0x0008;
	}
	if (param.enroute) {
		validTypes |= 0x0010;
	}
	if (param.discover) {
		validTypes |= 0x0020;
	}
	if (param.jcb) {
		validTypes |= 0x0040;
	}
	if (param.unknown) {
		validTypes |= 0x0080;
	}
	if (param.all) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if (validTypes & 0x0001 && /^(5[12345])/.test(value)) { //mastercard
		return value.length === 16;
	}
	if (validTypes & 0x0002 && /^(4)/.test(value)) { //visa
		return value.length === 16;
	}
	if (validTypes & 0x0004 && /^(3[47])/.test(value)) { //amex
		return value.length === 15;
	}
	if (validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test(value)) { //dinersclub
		return value.length === 14;
	}
	if (validTypes & 0x0010 && /^(2(014|149))/.test(value)) { //enroute
		return value.length === 15;
	}
	if (validTypes & 0x0020 && /^(6011)/.test(value)) { //discover
		return value.length === 16;
	}
	if (validTypes & 0x0040 && /^(3)/.test(value)) { //jcb
		return value.length === 16;
	}
	if (validTypes & 0x0040 && /^(2131|1800)/.test(value)) { //jcb
		return value.length === 15;
	}
	if (validTypes & 0x0080) { //unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number.");

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 *  }
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 *  }
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 *  }
 */
$.validator.addMethod("currency", function(value, element, param) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[0],
        soft = isParamString ? true : param[1],
        regex;

    symbol = symbol.replace(/,/g, "");
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp(regex);
    return this.optional(element) || regex.test(value);

}, "Please specify a valid currency");

$.validator.addMethod("dateFA", function(value, element) {
	return this.optional(element) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(value);
}, $.validator.messages.date);

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod("dateITA", function(value, element) {
	var check = false,
		re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test(value)) {
		adata = value.split("/");
		gg = parseInt(adata[0], 10);
		mm = parseInt(adata[1], 10);
		aaaa = parseInt(adata[2], 10);
		xdata = new Date(Date.UTC(aaaa, mm - 1, gg, 12, 0, 0, 0));
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth () === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional(element) || check;
}, $.validator.messages.date);

$.validator.addMethod("dateNL", function(value, element) {
	return this.optional(element) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(value);
}, $.validator.messages.date);

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod("extension", function(value, element, param) {
	param = typeof param === "string" ? param.replace(/,/g, "|") : "png|jpe?g|gif";
	return this.optional(element) || value.match(new RegExp("\\.(" + param + ")$", "i"));
}, $.validator.format("Please enter a value with a valid extension."));

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod("giroaccountNL", function(value, element) {
	return this.optional(element) || /^[0-9]{1,7}$/.test(value);
}, "Please specify a valid giro account number");

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 */
$.validator.addMethod("iban", function(value, element) {
	// some quick simple tests to prevent needless work
	if (this.optional(element)) {
		return true;
	}

	// remove spaces and to upper case
	var iban = value.replace(/ /g, "").toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	// check the country code and find the country specific format
	countrycode = iban.substring(0, 2);
	bbancountrypatterns = {
		"AL": "\\d{8}[\\dA-Z]{16}",
		"AD": "\\d{8}[\\dA-Z]{12}",
		"AT": "\\d{16}",
		"AZ": "[\\dA-Z]{4}\\d{20}",
		"BE": "\\d{12}",
		"BH": "[A-Z]{4}[\\dA-Z]{14}",
		"BA": "\\d{16}",
		"BR": "\\d{23}[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		"CR": "\\d{17}",
		"HR": "\\d{17}",
		"CY": "\\d{8}[\\dA-Z]{16}",
		"CZ": "\\d{20}",
		"DK": "\\d{14}",
		"DO": "[A-Z]{4}\\d{20}",
		"EE": "\\d{16}",
		"FO": "\\d{14}",
		"FI": "\\d{14}",
		"FR": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"GE": "[\\dA-Z]{2}\\d{16}",
		"DE": "\\d{18}",
		"GI": "[A-Z]{4}[\\dA-Z]{15}",
		"GR": "\\d{7}[\\dA-Z]{16}",
		"GL": "\\d{14}",
		"GT": "[\\dA-Z]{4}[\\dA-Z]{20}",
		"HU": "\\d{24}",
		"IS": "\\d{22}",
		"IE": "[\\dA-Z]{4}\\d{14}",
		"IL": "\\d{19}",
		"IT": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"KZ": "\\d{3}[\\dA-Z]{13}",
		"KW": "[A-Z]{4}[\\dA-Z]{22}",
		"LV": "[A-Z]{4}[\\dA-Z]{13}",
		"LB": "\\d{4}[\\dA-Z]{20}",
		"LI": "\\d{5}[\\dA-Z]{12}",
		"LT": "\\d{16}",
		"LU": "\\d{3}[\\dA-Z]{13}",
		"MK": "\\d{3}[\\dA-Z]{10}\\d{2}",
		"MT": "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		"MR": "\\d{23}",
		"MU": "[A-Z]{4}\\d{19}[A-Z]{3}",
		"MC": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"MD": "[\\dA-Z]{2}\\d{18}",
		"ME": "\\d{18}",
		"NL": "[A-Z]{4}\\d{10}",
		"NO": "\\d{11}",
		"PK": "[\\dA-Z]{4}\\d{16}",
		"PS": "[\\dA-Z]{4}\\d{21}",
		"PL": "\\d{24}",
		"PT": "\\d{21}",
		"RO": "[A-Z]{4}[\\dA-Z]{16}",
		"SM": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"SA": "\\d{2}[\\dA-Z]{18}",
		"RS": "\\d{18}",
		"SK": "\\d{20}",
		"SI": "\\d{15}",
		"ES": "\\d{20}",
		"SE": "\\d{20}",
		"CH": "\\d{5}[\\dA-Z]{12}",
		"TN": "\\d{20}",
		"TR": "\\d{5}[\\dA-Z]{17}",
		"AE": "\\d{3}\\d{16}",
		"GB": "[A-Z]{4}\\d{14}",
		"VG": "[\\dA-Z]{4}\\d{16}"
	};

	bbanpattern = bbancountrypatterns[countrycode];
	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if (typeof bbanpattern !== "undefined") {
		ibanregexp = new RegExp("^[A-Z]{2}\\d{2}" + bbanpattern + "$", "");
		if (!(ibanregexp.test(iban))) {
			return false; // invalid country specific format
		}
	}

	// now check the checksum, first convert to digits
	ibancheck = iban.substring(4, iban.length) + iban.substring(0, 4);
	for (i = 0; i < ibancheck.length; i++) {
		charAt = ibancheck.charAt(i);
		if (charAt !== "0") {
			leadingZeroes = false;
		}
		if (!leadingZeroes) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(charAt);
		}
	}

	// calculate the result of: ibancheckdigits % 97
	for (p = 0; p < ibancheckdigits.length; p++) {
		cChar = ibancheckdigits.charAt(p);
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	}
	return cRest === 1;
}, "Please specify a valid IBAN");

$.validator.addMethod("integer", function(value, element) {
	return this.optional(element) || /^-?\d+$/.test(value);
}, "A positive or negative non-decimal number please");

$.validator.addMethod("ipv4", function(value, element) {
	return this.optional(element) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(value);
}, "Please enter a valid IP v4 address.");

$.validator.addMethod("ipv6", function(value, element) {
	return this.optional(element) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
}, "Please enter a valid IP v6 address.");

$.validator.addMethod("lettersonly", function(value, element) {
	return this.optional(element) || /^[a-zÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ'\s\-]+$/i.test(value);
}, "Letters only please");

$.validator.addMethod("letterswithbasicpunc", function(value, element) {
	return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
}, "Letters or punctuation only please");

$.validator.addMethod("mobileNL", function(value, element) {
	return this.optional(element) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(value);
}, "Please specify a valid mobile number");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod("mobileUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/);
}, "Please specify a valid mobile number");

/*
 * The número de identidad de extranjero ( NIE )is a code used to identify the non-nationals in Spain
 */
$.validator.addMethod( "nieES", function( value ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	// Test NIE
	//T
	if ( /^[T]{1}/.test( value ) ) {
		return ( value[ 8 ] === /^[T]{1}[A-Z0-9]{8}$/.test( value ) );
	}

	//XYZ
	if ( /^[XYZ]{1}/.test( value ) ) {
		return (
			value[ 8 ] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(
				value.replace( "X", "0" )
					.replace( "Y", "1" )
					.replace( "Z", "2" )
					.substring( 0, 8 ) % 23
			)
		);
	}

	return false;

}, "Please specify a valid NIE number." );

/*
 * The Número de Identificación Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}
	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === String.fromCharCode( 64 ) );
	}

	return false;

}, "Please specify a valid NIF number." );

jQuery.validator.addMethod( "notEqualTo", function( value, element, param ) {
	return this.optional(element) || !$.validator.methods.equalTo.call( this, value, element, param );
}, "Please enter a different value, values must not be the same." );

$.validator.addMethod("nowhitespace", function(value, element) {
	return this.optional(element) || /^\S+$/i.test(value);
}, "No white space please");

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod("pattern", function(value, element, param) {
	if (this.optional(element)) {
		return true;
	}
	if (typeof param === "string") {
		param = new RegExp("^(?:" + param + ")$");
	}
	return param.test(value);
}, "Invalid format.");

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod("phoneNL", function(value, element) {
	return this.optional(element) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(value);
}, "Please specify a valid phone number.");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod("phoneUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/);
}, "Please specify a valid phone number");

/**
 * matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod("phoneUS", function(phone_number, element) {
	phone_number = phone_number.replace(/\s+/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/);
}, "Please specify a valid phone number");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
//Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod("phonesUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/);
}, "Please specify a valid uk phone number");

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test( value );
}, "Please specify a valid postal code" );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod("postalcodeBR", function(cep_value, element) {
	return this.optional(element) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test( cep_value );
}, "Informe um CEP válido.");

/* Matches Italian postcode (CAP) */
$.validator.addMethod("postalcodeIT", function(value, element) {
	return this.optional(element) || /^\d{5}$/.test(value);
}, "Please specify a valid postal code");

$.validator.addMethod("postalcodeNL", function(value, element) {
	return this.optional(element) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value);
}, "Please specify a valid postal code");

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod("postcodeUK", function(value, element) {
	return this.optional(element) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(value);
}, "Please specify a valid UK postcode");

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod("require_from_group", function(value, element, options) {
	var $fields = $(options[1], element.form),
		$fieldsFirst = $fields.eq(0),
		validator = $fieldsFirst.data("valid_req_grp") ? $fieldsFirst.data("valid_req_grp") : $.extend({}, this),
		isValid = $fields.filter(function() {
			return validator.elementValue(this);
		}).length >= options[0];

	// Store the cloned validator for future validation
	$fieldsFirst.data("valid_req_grp", validator);

	// If element isn't being validated, run each require_from_group field's validation rules
	if (!$(element).data("being_validated")) {
		$fields.data("being_validated", true);
		$fields.each(function() {
			validator.element(this);
		});
		$fields.data("being_validated", false);
	}
	return isValid;
}, $.validator.format("Please fill at least {0} of these fields."));

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]},
 * description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:		{skip_or_fill_minimum: [2,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod("skip_or_fill_minimum", function(value, element, options) {
	var $fields = $(options[1], element.form),
		$fieldsFirst = $fields.eq(0),
		validator = $fieldsFirst.data("valid_skip") ? $fieldsFirst.data("valid_skip") : $.extend({}, this),
		numberFilled = $fields.filter(function() {
			return validator.elementValue(this);
		}).length,
		isValid = numberFilled === 0 || numberFilled >= options[0];

	// Store the cloned validator for future validation
	$fieldsFirst.data("valid_skip", validator);

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if (!$(element).data("being_validated")) {
		$fields.data("being_validated", true);
		$fields.each(function() {
			validator.element(this);
		});
		$fields.data("being_validated", false);
	}
	return isValid;
}, $.validator.format("Please either skip these fields or fill at least {0} of them."));

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 *  }
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 *  }
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 *  }
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 *  }
 *
 *
 *
 */

$.validator.addMethod("stateUS", function(value, element, options) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if (!includeTerritories && !includeMilitary) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if (includeTerritories && includeMilitary) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if (includeTerritories) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp(regex) : new RegExp(regex, "i");
	return this.optional(element) || regex.test(value);
},
"Please specify a valid state");

$.validator.addMethod("strippedminlength", function(value, element, param) {
	return $(value).text().length >= param;
}, $.validator.format("Please enter at least {0} characters"));

$.validator.addMethod("time", function(value, element) {
	return this.optional(element) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(value);
}, "Please enter a valid time, between 00:00 and 23:59");

$.validator.addMethod("time12h", function(value, element) {
	return this.optional(element) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(value);
}, "Please enter a valid time in 12-hour am/pm format");

// same as url, but TLD is optional
$.validator.addMethod("url2", function(value, element) {
	return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}, $.validator.messages.url);

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod("vinUS", function(v) {
	if (v.length !== 17) {
		return false;
	}

	var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
		VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
		FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
		rs = 0,
		i, n, d, f, cd, cdv;

	for (i = 0; i < 17; i++) {
		f = FL[i];
		d = v.slice(i, i + 1);
		if (i === 8) {
			cdv = d;
		}
		if (!isNaN(d)) {
			d *= f;
		} else {
			for (n = 0; n < LL.length; n++) {
				if (d.toUpperCase() === LL[n]) {
					d = VL[n];
					d *= f;
					if (isNaN(cdv) && n === 8) {
						cdv = LL[n];
					}
					break;
				}
			}
		}
		rs += d;
	}
	cd = rs % 11;
	if (cd === 10) {
		cd = "X";
	}
	if (cd === cdv) {
		return true;
	}
	return false;
}, "The specified vehicle identification number (VIN) is invalid.");

$.validator.addMethod("zipcodeUS", function(value, element) {
	return this.optional(element) || /^\d{5}(-\d{4})?$/.test(value);
}, "The specified US ZIP Code is invalid");

$.validator.addMethod("ziprange", function(value, element) {
	return this.optional(element) || /^90[2-5]\d\{2\}-\d{4}$/.test(value);
}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx");

$.validator.addMethod("regex_telephone", function(value, element, regexp) {
    if (regexp.constructor != RegExp)
        regexp = new RegExp(regexp);
    else if (regexp.global)
        regexp.lastIndex = 0;
return this.optional(element) || regexp.test(value);},"Erreur dans le numéro de téléphone (doit commencer par +33)")

$.validator.addMethod("regex_date", function(value, element, regexp) {
    if (regexp.constructor != RegExp)
        regexp = new RegExp(regexp);
    else if (regexp.global)
        regexp.lastIndex = 0;
return this.optional(element) || regexp.test(value);},"Erreur dans la date (format: dd/mm/yyyy)");


$.validator.addMethod("zipcode", function(value, element) {
    return this.optional(element) || /^\d{5}(?:-\d{4})?$/.test(value);
}, "Veuillez saisir un code postal valide");

}));
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: FR (French; français)
 */
$.extend($.validator.messages, {
	required: "Ce champ est obligatoire.",
	remote: "Veuillez corriger ce champ.",
	email: "Veuillez fournir une adresse électronique valide.",
	url: "Veuillez fournir une adresse URL valide.",
	date: "Veuillez fournir une date valide.",
	dateISO: "Veuillez fournir une date valide (ISO).",
	number: "Veuillez fournir un numéro valide.",
	digits: "Veuillez fournir seulement des chiffres.",
	creditcard: "Veuillez fournir un numéro de carte de crédit valide.",
	equalTo: "Veuillez fournir encore la même valeur.",
	extension: "Veuillez fournir une valeur avec une extension valide.",
	maxlength: $.validator.format("Veuillez fournir au plus {0} caractères."),
	minlength: $.validator.format("Veuillez fournir au moins {0} caractères."),
	rangelength: $.validator.format("Veuillez fournir une valeur qui contient entre {0} et {1} caractères."),
	range: $.validator.format("Veuillez fournir une valeur entre {0} et {1}."),
	max: $.validator.format("Veuillez fournir une valeur inférieure ou égale à {0}."),
	min: $.validator.format("Veuillez fournir une valeur supérieure ou égale à {0}."),
	maxWords: $.validator.format("Veuillez fournir au plus {0} mots."),
	minWords: $.validator.format("Veuillez fournir au moins {0} mots."),
	rangeWords: $.validator.format("Veuillez fournir entre {0} et {1} mots."),
	letterswithbasicpunc: "Veuillez fournir seulement des lettres et des signes de ponctuation.",
	alphanumeric: "Veuillez fournir seulement des lettres, nombres, espaces et soulignages.",
	lettersonly: "Veuillez fournir seulement des lettres.",
	nowhitespace: "Veuillez ne pas inscrire d'espaces blancs.",
	ziprange: "Veuillez fournir un code postal entre 902xx-xxxx et 905-xx-xxxx.",
	integer: "Veuillez fournir un nombre non décimal qui est positif ou négatif.",
	vinUS: "Veuillez fournir un numéro d'identification du véhicule (VIN).",
	dateITA: "Veuillez fournir une date valide.",
	time: "Veuillez fournir une heure valide entre 00:00 et 23:59.",
	phoneUS: "Veuillez fournir un numéro de téléphone valide.",
	phoneUK: "Veuillez fournir un numéro de téléphone valide.",
	mobileUK: "Veuillez fournir un numéro de téléphone mobile valide.",
	strippedminlength: $.validator.format("Veuillez fournir au moins {0} caractères."),
	email2: "Veuillez fournir une adresse électronique valide.",
	url2: "Veuillez fournir une adresse URL valide.",
	creditcardtypes: "Veuillez fournir un numéro de carte de crédit valide.",
	ipv4: "Veuillez fournir une adresse IP v4 valide.",
	ipv6: "Veuillez fournir une adresse IP v6 valide.",
	require_from_group: "Veuillez fournir au moins {0} de ces champs.",
	nifES: "Veuillez fournir un numéro NIF valide.",
	nieES: "Veuillez fournir un numéro NIE valide.",
	cifES: "Veuillez fournir un numéro CIF valide.",
	postalCodeCA: "Veuillez fournir un code postal valide.",
	iban: "Veuillez fournir un IBAN valide."
});

var form = $("#form-structure").show();

form.steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    labels: {
        cancel: "Annuler",
        current: "current step:",
        pagination: "Pagination",
        finish: "Fin",
        next: "Suivant",
        previous: "Précédent",
        loading: "Chargement ..."
    },
    onStepChanging: function (event, currentIndex, newIndex) {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex) {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (e, currentIndex) {
        // Uncomment the following line to submit the form using the defaultSubmit() method
        $('#form-structure').submit();
    }
})