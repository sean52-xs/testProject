//轮播图
$(function(){
	// var sta = 2;//当sta为1时 不能点击，为2时可以点击
	var s = 0;

		setInterval(function(){
			s++;
			if(s==5){
				$('.swiper-container .swiper-wrapper').css({'left':'0px'});
				s=1;
			}
			var gt = s * -1755;
		$('.swiper-container .swiper-wrapper').animate({'left':gt+'px'},1000);

		},2000);
	// var timer = setInterval(run,2000);
});