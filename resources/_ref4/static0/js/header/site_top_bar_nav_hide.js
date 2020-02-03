var lastScroll = 0, hundert;
$(window).scroll(function(){
// 	//NAVIGATION FADEIN/OUT
	var st = $(document).scrollTop();
	if (st > 48 && st > lastScroll){
		$('#siteTopBarNavHide').addClass('hidden');
		hundert = st;
	}
	else if(st < (hundert - 33)){
		$('#siteTopBarNavHide').removeClass('hidden');
	}
  lastScroll = st;
  });
