"use strict";function _navMenu(){$(".mobile-nav-menu__burger").click(function(){$(".mobile-nav-menu__burger").toggleClass("burger_toggle"),$(".mobile-nav-menu__list").slideToggle("slow")}),$(".tablet-nav-menu__burger").click(function(){$(".tablet-nav-menu__burger").toggleClass("burger_toggle"),$(".tablet-nav-menu__list").toggleClass("tablet-nav-menu__list_show")}),$(".nav-list li a").click(function(){$(".nav-list li a").each(function(){$(".nav-list li a").toggleClass("active")})}),$(window).on("load resize",function(){"1440"<=$(window).width()?$(".nav-menu").css("margin-left","calc((100% - 1440px)/2)"):$(".nav-menu").css("margin-left","0")})}function reserveBtn(e){$("#reserve-date").datepicker(),$("#reserve-date-action").datepicker(),$(document.body).on("click",function(e){$("#res-btn").removeClass("display-none")})}function slowScroll(e){$("".concat(e)).on("click",function(e){console.log(e.target),e.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top;$("body,html").animate({scrollTop:n},1500)})}function mainPageMenu(){function e(){for(var e=[],t=0,n=0;n<l;n++){for(t=Math.floor(Math.random()*r);-1<e.indexOf(t);)t=Math.floor(Math.random()*r);e[n]=t}$(".main-menu__item").each(function(){$(this).removeClass("main-menu__item_active")});for(var o=0;o<l;o++){$("body").find(".main-menu__items > div:eq("+e[o]+")").addClass("main-menu__item_active");var a=$(".main-menu__items > div:eq("+e[o]+")"),i=a.outerWidth();a.attr("style","height: "+i+"px")}}var r=$(".main-menu__items > div").length;console.log(r),console.log($("body").outerWidth());var l=0;l=980<$(".main-menu__items").outerWidth()?4:3,e(),setInterval(e,2e3),$(window).on("resize",function(){$(".main-menu__item").each(function(){var e=$(document).find(".main-menu__item").outerWidth();$(this).attr("style","height:"+e+"px;")}),l=980<$(".main-menu__items").outerWidth()?4:3})}function slickSlider(){$(".slick-carousel").slick({variableHeight:!0,arrows:!0,dots:!0,centerMode:!0,centerPadding:"250px",slidesToShow:1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:980,settings:{arrows:!1,centerMode:!0,centerPadding:"0",slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"0",slidesToShow:1}}]})}function initWhiteMap(){mapboxgl.accessToken="pk.eyJ1IjoidmFsZW50aW5hNTMyIiwiYSI6ImNqb3cxaHVmdTFia2gza3M1MzNpcGowcTUifQ.aF2_XmuIhvKLDm4gPZGcUw";var n=new mapboxgl.Map({container:"map",style:"mapbox://styles/valentina532/cjpstjqno3hfb2rnqai46wm83",center:[30.5933111,50.4284607],zoom:14});n.on("load",function(){n.loadImage("../../img/index/map-marker-green.png",function(e,t){if(e)throw e;n.addImage("custom-marker",t),n.addLayer({id:"markers",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:["30.5933111","50.4284607"]}}]}},layout:{"icon-image":"custom-marker"}})})})}$(document).ready(function(){slowScroll("#smoke-btn"),slowScroll("#smoke-btn-tab"),slowScroll("#smoke-btn-mob"),slowScroll("#res-btn"),slowScroll("#contacts-btn"),slowScroll("#contacts-btn-tab"),slowScroll("#contacts-btn-mob")}),_navMenu(),reserveBtn(!1),mainPageMenu(),$(slickSlider()),initWhiteMap();