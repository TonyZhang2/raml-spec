$(document).ready(function(){$(window).scroll(function(){var t=$(this).scrollTop();t>220?$(".cta-mini").fadeIn("fast"):$(".cta-mini").fadeOut("fast")});var t=$(".content-wrapper-pages h2"),a=$("aside nav a");if(t.waypoint({handler:function(t){var i;if(i=$(this),"up"===t){var e=i.attr("id");i=$("#"+e).waypoint("prev")}var n=$('aside nav a[href="#'+i.attr("id")+'"]');a.removeClass("active"),n.addClass("active")},offset:95}),$(function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top-95},400),!1}})}),$(window).scroll(function(){$(window).scrollTop()+$(window).height()==$(document).height()&&($("aside nav a").removeClass("active"),$("aside nav ul:first-of-type li:last-child a").addClass("active"))}),$("#ss-form").submit(function(){$(".signup input").hide(),$("#ss-form-response").fadeIn()}),$(function(){$(".copy-clipboard").clipboard({path:"jquery.clipboard.swf",copy:function(){return $(".copy-clipboard span").fadeIn("fast"),$("#home .content code").text()}})}),$("#section-projects").length>0){$(".projects-subnav a").click(function(){var t=$(this).attr("href").replace("#","");return window.location.hash=t,i(),!1}),$("h3 a.anchor").click(function(){var t=$(this).attr("href").replace("#","");return window.location.hash=t,i(),!1});var i=function(){if(section=window.location.hash.substring(1)){var t="";if(section.indexOf("-")>=0){t=section;var a=section.split("-");section=a[0]}$(".projects-subnav a").removeClass("active").each(function(){$(this).attr("href")=="#"+section&&$(this).addClass("active")}),$("#section-projects section").hide(),$("#section-"+section).show(),t&&$("h3 a[href=#"+t+"]").length>0&&$("html,body").animate({scrollTop:$("h3 a[href=#"+t+"]").offset().top-105},400)}};i()}});