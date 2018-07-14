;
$(function() {

	// Custom JS
	$(document).ready(function(){
		$('.main-slider').bxSlider({
			autoHeught: true,
			pager: false,
			controls: true,
		});
	});
	//tabs
	$(".tab-item").not(":first").hide();
	$(".main-content-tab").click(function() {
		$(".main-content-tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item").hide().eq($(this).index()).fadeIn(160)
	}).eq(0).addClass("active");

	//hidden-btn
	// $(".toggle-mnu").on('click',function() {
	// 	$(this).toggleClass("on");
	// 	$(".main-nav").slideToggle();
	// 	return false;
	// });

	function hideMenu(btn, hiddenPart){
		$(document).on('click',btn,function(){
			$(btn).toggleClass("on");
			$(hiddenPart).slideToggle();
			return false;
		});
		
	}

	
	hideMenu(".toggle-mnu",".main-nav");
	//canvas-menu
	$(".aside-menu-btn").on('click',function(){
		$(".main-sidebar").toggleClass('on');
		$(".categories-btn").toggleClass('on');
	});
//page2///////////////////////////////////////////////
	$(".tab-item1").not(":first").hide();
	$(".central-part .tab1").click(function() {
		$(".central-part .tab1").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item1").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");
});
