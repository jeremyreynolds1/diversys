/*
	jQuery reusable methods for animations. Created by Jeremy Reynolds on May 2, 2014.
	
	This file allows you to use animations on images. You do this by using each individual function.
	Every function has a name relating to how many images are to be used. 2, 3, 4, 5, and so on. This is the total number of images to be used. Use the one that you think is the best. 
	
	Starting File:
		Started by parsing the original src from image1.
		Added a parameter to select delay time.
		
	Update 1: 
		5/2/14 10:05 am ability to set animation name.	
		
	
		
	Features to add:
		ability to add custom animation delay and animation duration.
*/

//scenes with only a and b.
function twoImages(delay, animationName){
	var delay = delay;
	var animationName = animationName;
	//get src of first image
	var srcImage1 = $("#image1").attr("src");
	//split first image file path at "a".
	var src = srcImage1.split('a');
	//file path is now mod_XX_topic_XX_scene_XX_
	//when assigning new image must take into consideration adding letter of scene and .png
	var filepath = src[0];
	
	//need to assign animations to first image
	
	$("#image1").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
	$("#image1").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
	$("#image1").addClass("animated " + animationName);
	
	var timeoutID = window.setTimeout(change1, delay);
	
	function change1(){
		//$("#image1").remove();
		$("#image1").hide();
		//$("#images").empty();
		var newFile = filepath + "b.png";
		//alert(newFile);
		$("#images").append("<img id='image2' src="+ newFile + "/>");
		$("#image2").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image2").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image2").addClass("animated " + animationName);
		
	}
	
	
}

function threeImages(delay, animationName){
	var delay = delay;
	var animatonName = animationName;
	//alert(animationName);
	//get src of first image
	var srcImage1 = $("#image1").attr("src");
	//split first image file path at "a".
	var src = srcImage1.split('a');
	//alert(src[0]);
	//file path is now mod_XX_topic_XX_scene_XX_
	//when assigning new image must take into consideration adding letter of scene and .png
	var filepath = src[0];
	
	//need to assign animations to first image
	
	$("#image1").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
	$("#image1").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
	$("#image1").addClass("animated " + animationName);
	var timeoutID = window.setTimeout(change1, delay);
	
	function change1(){
		$("#image1").remove();
		//$("#images").empty();
		var newFile = filepath + "b.png";
		//alert(newFile);
		$("#images").append("<img id='image2' src="+ newFile + "/>");
		$("#image2").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image2").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image2").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID2 = window.setTimeout(change2, delay);
	
	function change2(){
		$("#image2").remove();
		//$("#images").empty();
		var newFile = filepath + "c.png";
		//alert(newFile);
		$("#images").append("<img id='image3' src="+ newFile + "/>");
		$("#image3").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image3").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image3").addClass("animated " + animationName);
		
	}
}
function fourImages(delay, animationName){
	var delay = delay;
	var animatonName = animationName;
	//alert(animationName);
	//get src of first image
	var srcImage1 = $("#image1").attr("src");
	//split first image file path at "a".
	var src = srcImage1.split('a');
	//alert(src[0]);
	//file path is now mod_XX_topic_XX_scene_XX_
	//when assigning new image must take into consideration adding letter of scene and .png
	var filepath = src[0];
	
	//need to assign animations to first image
	
	$("#image1").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
	$("#image1").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
	$("#image1").addClass("animated " + animationName);
	var timeoutID = window.setTimeout(change1, delay);
	
	function change1(){
		$("#image1").remove();
		var newFile = filepath + "b.png";
		//alert(newFile);
		$("#images").append("<img id='image2' src="+ newFile + "/>");
		$("#image2").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image2").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image2").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID2 = window.setTimeout(change2, delay);
	
	function change2(){
		$("#image2").remove();
		var newFile = filepath + "c.png";
		//alert(newFile);
		$("#images").append("<img id='image3' src="+ newFile + "/>");
		$("#image3").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image3").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image3").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID3 = window.setTimeout(change3, delay);
	
	function change3(){
		$("#image3").remove();
		var newFile = filepath + "d.png";
		//alert(newFile);
		$("#images").append("<img id='image4' src="+ newFile + "/>");
		$("#image4").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image4").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image4").addClass("animated " + animationName);
		
	}
}
function fiveImages(delay, animationName){
	var delay = delay;
	var animatonName = animationName;
	//alert(animationName);
	//get src of first image
	var srcImage1 = $("#image1").attr("src");
	//split first image file path at "a".
	var src = srcImage1.split('a');
	//alert(src[0]);
	//file path is now mod_XX_topic_XX_scene_XX_
	//when assigning new image must take into consideration adding letter of scene and .png
	var filepath = src[0];
	
	//need to assign animations to first image
	
	$("#image1").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
	$("#image1").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
	$("#image1").addClass("animated " + animationName);
	var timeoutID = window.setTimeout(change1, delay);
	
	function change1(){
		$("#image1").remove();
		var newFile = filepath + "b.png";
		//alert(newFile);
		$("#images").append("<img id='image2' src="+ newFile + "/>");
		$("#image2").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image2").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image2").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID2 = window.setTimeout(change2, delay);
	
	function change2(){
		$("#image2").remove();
		var newFile = filepath + "c.png";
		//alert(newFile);
		$("#images").append("<img id='image3' src="+ newFile + "/>");
		$("#image3").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image3").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image3").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID3 = window.setTimeout(change3, delay);
	
	function change3(){
		$("#image3").remove();
		var newFile = filepath + "d.png";
		//alert(newFile);
		$("#images").append("<img id='image4' src="+ newFile + "/>");
		$("#image4").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image4").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image4").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID4 = window.setTimeout(change4, delay);
	
	function change4(){
		$("#image4").remove();
		var newFile = filepath + "e.png";
		//alert(newFile);
		$("#images").append("<img id='image5' src="+ newFile + "/>");
		$("#image5").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image5").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image5").addClass("animated " + animationName);
		
	}

}
function sixImages(delay, animationName){
	var delay = delay;
	var animatonName = animationName;
	//alert(animationName);
	//get src of first image
	var srcImage1 = $("#image1").attr("src");
	//split first image file path at "a".
	var src = srcImage1.split('a');
	//alert(src[0]);
	//file path is now mod_XX_topic_XX_scene_XX_
	//when assigning new image must take into consideration adding letter of scene and .png
	var filepath = src[0];
	
	//need to assign animations to first image
	
	$("#image1").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
	$("#image1").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
	$("#image1").addClass("animated " + animationName);
	var timeoutID = window.setTimeout(change1, delay);
	
	function change1(){
		$("#image1").remove();
		var newFile = filepath + "b.png";
		//alert(newFile);
		$("#images").append("<img id='image2' src="+ newFile + "/>");
		$("#image2").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image2").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image2").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID2 = window.setTimeout(change2, delay);
	
	function change2(){
		$("#image2").remove();
		var newFile = filepath + "c.png";
		//alert(newFile);
		$("#images").append("<img id='image3' src="+ newFile + "/>");
		$("#image3").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image3").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image3").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID3 = window.setTimeout(change3, delay);
	
	function change3(){
		$("#image3").remove();
		var newFile = filepath + "d.png";
		//alert(newFile);
		$("#images").append("<img id='image4' src="+ newFile + "/>");
		$("#image4").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image4").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image4").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID4 = window.setTimeout(change4, delay);
	
	function change4(){
		$("#image4").remove();
		var newFile = filepath + "e.png";
		//alert(newFile);
		$("#images").append("<img id='image5' src="+ newFile + "/>");
		$("#image5").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image5").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image5").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID5 = window.setTimeout(change5, delay);
	
	function change5(){
		$("#image5").remove();
		var newFile = filepath + "f.png";
		//alert(newFile);
		$("#images").append("<img id='image6' src="+ newFile + "/>");
		$("#image6").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image6").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image6").addClass("animated " + animationName);
		
	}

}
function sevenImages(delay, animationName){
	var delay = delay;
	var animatonName = animationName;
	//alert(animationName);
	//get src of first image
	var srcImage1 = $("#image1").attr("src");
	//split first image file path at "a".
	var src = srcImage1.split('a');
	//alert(src[0]);
	//file path is now mod_XX_topic_XX_scene_XX_
	//when assigning new image must take into consideration adding letter of scene and .png
	var filepath = src[0];
	
	//need to assign animations to first image
	
	$("#image1").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
	$("#image1").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
	$("#image1").addClass("animated " + animationName);
	var timeoutID = window.setTimeout(change1, delay);
	
	function change1(){
		$("#image1").remove();
		var newFile = filepath + "b.png";
		//alert(newFile);
		$("#images").append("<img id='image2' src="+ newFile + "/>");
		$("#image2").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image2").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image2").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID2 = window.setTimeout(change2, delay);
	
	function change2(){
		$("#image2").remove();
		var newFile = filepath + "c.png";
		//alert(newFile);
		$("#images").append("<img id='image3' src="+ newFile + "/>");
		$("#image3").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image3").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image3").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID3 = window.setTimeout(change3, delay);
	
	function change3(){
		$("#image3").remove();
		var newFile = filepath + "d.png";
		//alert(newFile);
		$("#images").append("<img id='image4' src="+ newFile + "/>");
		$("#image4").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image4").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image4").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID4 = window.setTimeout(change4, delay);
	
	function change4(){
		$("#image4").remove();
		var newFile = filepath + "e.png";
		//alert(newFile);
		$("#images").append("<img id='image5' src="+ newFile + "/>");
		$("#image5").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image5").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image5").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID5 = window.setTimeout(change5, delay);
	
	function change5(){
		$("#image5").remove();
		var newFile = filepath + "f.png";
		//alert(newFile);
		$("#images").append("<img id='image6' src="+ newFile + "/>");
		$("#image6").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image6").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image6").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID6 = window.setTimeout(change6, delay);
	
	function change6(){
		$("#image6").remove();
		var newFile = filepath + "g.png";
		//alert(newFile);
		$("#images").append("<img id='image7' src="+ newFile + "/>");
		$("#image7").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image7").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image7").addClass("animated " + animationName);
		
	}


}
function eightImages(delay, animationName){
	var delay = delay;
	var animatonName = animationName;
	//alert(animationName);
	//get src of first image
	var srcImage1 = $("#image1").attr("src");
	//split first image file path at "a".
	var src = srcImage1.split('a');
	//alert(src[0]);
	//file path is now mod_XX_topic_XX_scene_XX_
	//when assigning new image must take into consideration adding letter of scene and .png
	var filepath = src[0];
	
	//need to assign animations to first image
	
	$("#image1").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
	$("#image1").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
	$("#image1").addClass("animated " + animationName);
	var timeoutID = window.setTimeout(change1, delay);
	
	function change1(){
		$("#image1").remove();
		var newFile = filepath + "b.png";
		//alert(newFile);
		$("#images").append("<img id='image2' src="+ newFile + "/>");
		$("#image2").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image2").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image2").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID2 = window.setTimeout(change2, delay);
	
	function change2(){
		$("#image2").remove();
		var newFile = filepath + "c.png";
		//alert(newFile);
		$("#images").append("<img id='image3' src="+ newFile + "/>");
		$("#image3").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image3").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image3").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID3 = window.setTimeout(change3, delay);
	
	function change3(){
		$("#image3").remove();
		var newFile = filepath + "d.png";
		//alert(newFile);
		$("#images").append("<img id='image4' src="+ newFile + "/>");
		$("#image4").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image4").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image4").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID4 = window.setTimeout(change4, delay);
	
	function change4(){
		$("#image4").remove();
		var newFile = filepath + "e.png";
		//alert(newFile);
		$("#images").append("<img id='image5' src="+ newFile + "/>");
		$("#image5").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image5").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image5").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID5 = window.setTimeout(change5, delay);
	
	function change5(){
		$("#image5").remove();
		var newFile = filepath + "f.png";
		//alert(newFile);
		$("#images").append("<img id='image6' src="+ newFile + "/>");
		$("#image6").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image6").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image6").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID6 = window.setTimeout(change6, delay);
	
	function change6(){
		$("#image6").remove();
		var newFile = filepath + "g.png";
		//alert(newFile);
		$("#images").append("<img id='image7' src="+ newFile + "/>");
		$("#image7").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image7").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image7").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID6 = window.setTimeout(change7, delay);
	
	function change7(){
		$("#image7").remove();
		var newFile = filepath + "h.png";
		//alert(newFile);
		$("#images").append("<img id='image8' src="+ newFile + "/>");
		$("#image8").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image8").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image8").addClass("animated " + animationName);
		
	}
}
function nineImages(delay, animationName){
	var delay = delay;
	var animatonName = animationName;
	//alert(animationName);
	//get src of first image
	var srcImage1 = $("#image1").attr("src");
	//split first image file path at "a".
	var src = srcImage1.split('a');
	//alert(src[0]);
	//file path is now mod_XX_topic_XX_scene_XX_
	//when assigning new image must take into consideration adding letter of scene and .png
	var filepath = src[0];
	
	//need to assign animations to first image
	
	$("#image1").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
	$("#image1").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
	$("#image1").addClass("animated " + animationName);
	var timeoutID = window.setTimeout(change1, delay);
	
	function change1(){
		//$("#image1").remove();
		$("#image1").hide();
		//$("#images").empty();
		var newFile = filepath + "b.png";
		//alert(newFile);
		$("#images").append("<img id='image2' src="+ newFile + "/>");
		$("#image2").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image2").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image2").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID2 = window.setTimeout(change2, delay);
	
	function change2(){
		//$("#image2").remove();
		//$("#images").empty();
		$("#image2").hide();
		var newFile = filepath + "c.png";
		//alert(newFile);
		$("#images").append("<img id='image3' src="+ newFile + "/>");
		$("#image3").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image3").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image3").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID3 = window.setTimeout(change3, delay);
	
	function change3(){
		//$("#image3").remove();
		//$("#images").empty();
		$("#image3").hide();
		var newFile = filepath + "d.png";
		//alert(newFile);
		$("#images").append("<img id='image4' src="+ newFile + "/>");
		$("#image4").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image4").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image4").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID4 = window.setTimeout(change4, delay);
	
	function change4(){
		//$("#image4").remove();
		//$("#images").empty();
		$("#image4").hide();
		var newFile = filepath + "e.png";
		//alert(newFile);
		$("#images").append("<img id='image5' src="+ newFile + "/>");
		$("#image5").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image5").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image5").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID5 = window.setTimeout(change5, delay);
	
	function change5(){
		//$("#image5").remove();
		//$("#images").empty();
		$("#image5").hide();
		var newFile = filepath + "f.png";
		//alert(newFile);
		$("#images").append("<img id='image6' src="+ newFile + "/>");
		$("#image6").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image6").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image6").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID6 = window.setTimeout(change6, delay);
	
	function change6(){
		//$("#image6").remove();
		//$("#images").empty();
		$("#image6").hide();
		var newFile = filepath + "g.png";
		//alert(newFile);
		$("#images").append("<img id='image7' src="+ newFile + "/>");
		$("#image7").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image7").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image7").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID6 = window.setTimeout(change7, delay);
	
	function change7(){
		//$("#image7").remove();
		//$("#images").empty();
		$("#image7").hide();
		var newFile = filepath + "h.png";
		//alert(newFile);
		$("#images").append("<img id='image8' src="+ newFile + "/>");
		$("#image8").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image8").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image8").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID7 = window.setTimeout(change8, delay);
	
	function change8(){
		//$("#image8").remove();
		//$("#images").empty();
		$("#image8").hide();
		var newFile = filepath + "i.png";
		//alert(newFile);
		$("#images").append("<img id='image9' src="+ newFile + "/>");
		$("#image9").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image9").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image9").addClass("animated " + animationName);
		
	}
}
function tenImages(delay, animationName){
	var delay = delay;
	var animatonName = animationName;
	//alert(animationName);
	//get src of first image
	var srcImage1 = $("#image1").attr("src");
	//split first image file path at "a".
	var src = srcImage1.split('a');
	//alert(src[0]);
	//file path is now mod_XX_topic_XX_scene_XX_
	//when assigning new image must take into consideration adding letter of scene and .png
	var filepath = src[0];
	
	//need to assign animations to first image
	
	$("#image1").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
	$("#image1").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
	$("#image1").addClass("animated " + animationName);
	
	var timeoutID = window.setTimeout(change1, delay);
	
	function change1(){
		$("#image1").remove();
		var newFile = filepath + "b.png";
		//alert(newFile);
		$("#images").append("<img id='image2' src="+ newFile + "/>");
		$("#image2").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image2").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image2").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID2 = window.setTimeout(change2, delay);
	
	function change2(){
		$("#image2").remove();
		var newFile = filepath + "c.png";
		//alert(newFile);
		$("#images").append("<img id='image3' src="+ newFile + "/>");
		$("#image3").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image3").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image3").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID3 = window.setTimeout(change3, delay);
	
	function change3(){
		$("#image3").remove();
		var newFile = filepath + "d.png";
		//alert(newFile);
		$("#images").append("<img id='image4' src="+ newFile + "/>");
		$("#image4").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image4").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image4").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID4 = window.setTimeout(change4, delay);
	
	function change4(){
		$("#image4").remove();
		var newFile = filepath + "e.png";
		//alert(newFile);
		$("#images").append("<img id='image5' src="+ newFile + "/>");
		$("#image5").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image5").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image5").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID5 = window.setTimeout(change5, delay);
	
	function change5(){
		$("#image5").remove();
		var newFile = filepath + "f.png";
		//alert(newFile);
		$("#images").append("<img id='image6' src="+ newFile + "/>");
		$("#image6").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image6").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image6").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID6 = window.setTimeout(change6, delay);
	
	function change6(){
		$("#image6").remove();
		var newFile = filepath + "g.png";
		//alert(newFile);
		$("#images").append("<img id='image7' src="+ newFile + "/>");
		$("#image7").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image7").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image7").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID6 = window.setTimeout(change7, delay);
	
	function change7(){
		$("#image7").remove();
		var newFile = filepath + "h.png";
		//alert(newFile);
		$("#images").append("<img id='image8' src="+ newFile + "/>");
		$("#image8").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image8").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image8").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID7 = window.setTimeout(change8, delay);
	
	function change8(){
		$("#image8").remove();
		var newFile = filepath + "i.png";
		//alert(newFile);
		$("#images").append("<img id='image9' src="+ newFile + "/>");
		$("#image9").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image9").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image9").addClass("animated " + animationName);
		
	}
	delay += 5000;
	var timeoutID8 = window.setTimeout(change9, delay);
	
	function change9(){
		$("#image9").remove();
		var newFile = filepath + "j.png";
		//alert(newFile);
		$("#images").append("<img id='image10' src="+ newFile + "/>");
		$("#image10").css("animation-delay", "2s").css("-webkit-animation-delay", "2s");
		$("#image10").css("animation-duration","2s").css("-webkit-animation-duration", "2s");
		$("#image10").addClass("animated " + animationName);
		
	}

}