(function () {
	var is_mobi = true;
	var dW = 0;
	var maxW = 0;
	var minW = 0;
	is_mobi = navigator.userAgent.toLowerCase().match(
		/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|  blackberry|wince)/i) != null;
	if (is_mobi) {
		dW = 800;
		maxW = 800;
		minW = 320;
	} else {
		dW = 1900;
		maxW = 1900;
		minW = 1200;
	}
	window['adaptive'].desinWidth = dW;
	window['adaptive'].baseFont = 16;
	window['adaptive'].maxWidth = maxW;
	window['adaptive'].minWidth = minW;
	window['adaptive'].scaleType = 1;
	window['adaptive'].init();

//获取屏幕缩放比例
function getRatio()
{
    var ratio=0;
    var screen=window.screen;
    var ua=navigator.userAgent.toLowerCase();
 
    if(window.devicePixelRatio !== undefined)
    {
        ratio=window.devicePixelRatio;    
    }
    else if(~ua.indexOf('msie'))
    {
        if(screen.deviceXDPI && screen.logicalXDPI)
        {
            ratio=screen.deviceXDPI/screen.logicalXDPI;        
        }
    
    }
    else if(window.outerWidth !== undefined && window.innerWidth !== undefined)
    {
        ratio=window.outerWidth/window.innerWidth;
    }
 
    if(ratio)
    {
        ratio=Math.round(ratio*100);    
    }
    return ratio;
}

if(window.innerWidth>1920) {
	$('.tabsnav ').css('zoom',100/getRatio())
	$('.v-content ').css('zoom',100/getRatio())
	$('.nav').css('zoom',100/getRatio())
	$('.tabscontent__item').css('zoom',100/getRatio())
	$('.nav_head_inner').css('zoom',100/getRatio())
	$('.nav_body').css('zoom',100/getRatio())
	$('.p2').css('zoom',100/getRatio())
}

	// Initialize the TabsNav.
	var navCloseBtn = $('.NavClose');
$('.header_right_btn').on("click", (function (e) {
    $('#Nav').addClass('active')
})
)
$('.NavClose').on("click", (function (e) {
    $('#Nav').removeClass('active')
})
)
$('.has_sub span').on("click", (function (e) {
    $(this).parent('.has_sub').toggleClass('hover').siblings().removeClass('hover')
    $('.header_list').removeClass('hover')
}))
$('.has_sub2 span').on("click", (function (e) {
    $('.header_list').toggleClass('hover')
}))
$('.sub_menu2_ul_ul2 li').on("hover", (function (e) {
    $(this).toggleClass('hover')
}))
})();