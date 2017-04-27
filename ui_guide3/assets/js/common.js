$(function(){
	var duration = 500;

	/*
	// anchor move
	$(".headroom .nav li a[href^='#']").click(function(e){
		e.preventDefault();
		var dropdown = $(this).parent().hasClass("dropdown");
		if(!dropdown){
			var target = $(this.hash);
			$("html, body").animate({scrollTop: target.offset().top}, duration);

			$(".headroom .nav li").removeClass("open");
			$(this).parent("li").addClass("open");
		}
	});
	*/

	$(".nav.navbar-nav li a").click(function(e){
		e.preventDefault();

		/*
		var link = $(this).attr("href");
		$("#sectorArea").attr("w3-include-html", link);
		*/
		var dropdownStat = $(this).parent("li").hasClass("dropdown");
		console.log(dropdownStat);
		if(dropdownStat){
			return;
		}else{
			var link = $(this).attr("href");
			$("#sectorArea").load(link + " #pageWrap", function(res, status, xhr){
				if(status == "error"){
					$("#error").html(xhr.status + " " + xhr.statusText);
				}
			});
			if($(document).scrollTop() != 0){
				$("html, body").animate({scrollTop: 0}, duration);
			}

			/*

			if($(".navbar-toggle, .navbar-collapse").attr("aria-expanded")){
				$("#bs-example-navbar-collapse-1").css({"height": 0});
				$("#bs-example-navbar-collapse-1").attr("aria-expanded", "false";)
			};
			*/
		}
	});

	// go Top
	$("#grGoTop").click(function(e){		
		e.preventDefault();

		$("html, body").animate({scrollTop: 0}, duration);
	});

	//headroom.js
	/*
	var myElement = document.querySelector(".headroom");
	var headroom = new Headroom(myElement, { 
		"tolerance": 5,
		"offset": 205,
		"classes": {
			"initial":"animated",
			"pinned":"slideUp",
			"unpinned":"slideUp"
		}
	});*/

	// init
	//headroom.init();
	//w3IncludeHTML();
	$("#sectorArea").load("/pub_test/ui_guide/include/ui-introduce.html #pageWrap");
});