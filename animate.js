/*
	New javascript. 
	1 function to run all animations.
	Dynamically create all animations as needed.
	
	Created on May 7, 2014 by Jeremy Reynolds
	
*/
//initalize imageArray for use later.
var imageArray = new Array();

function animate(animationDuration, numImages, delayArray, customNames){
	//num images is always going to be 1 more than needed because image a is already in document.
	//represents the name of the animation from animate.css
	var animationName = animationName;
	//represents how long the animation should run
	var animationDuration = animationDuration;
	//number of total images in the scene
	var stringNumImages = numImages;
	//represents delay of animations
	//var animationDelay = delay;
	//getting number value of string
	var numImages = Number(stringNumImages);
	//src of first image
	var srcImage1 = $("#image1").attr("src");
	//split first image file path at "a".
	var src = srcImage1.split('a');
	//file path is now mod_XX_topic_XX_scene_XX_
	//when assigning new image must take into consideration adding letter of scene and .png
	var filepath = src[0];
	
	//link copyDelay defined in html by array to copyDelay 
	var copyDelay = new Array(delayArray.length);
	for (var j = 0; j < delayArray.length; j++) {
		copyDelay[j] = delayArray[j];
		}
	
	//need to link customNames to copyNames
	var copyNames = new Array(customNames.length);
	for(var i = 0; i < customNames.length; i++){
		copyNames[i] = customNames[j];
	}
			
	//alert(copyDelay[0]);
	
	//adding animations to first image
	$("#image1").css("animation-duration", animationDuration).css("-webkit-animation-duration", animationDuration);
	$("#image1").addClass("animated "+ copyNames[0]);
	
	var arrayLetters = new Array();
	//final path for images.
	var finalPath = new Array();
	
	//97 in ASCII is 'a'
	//122 in ASCII is 'z'
	var lowercaseBegin = 98;
	var count = 0;
	//dynamically creating links for images.
	while(count < numImages-1){
		arrayLetters[count] = String.fromCharCode(lowercaseBegin);
		/*if(count > 25){
				lowercaseBegin = 98;
				arrayLetters[count] = String.fromCharCode(lowercaseBegin) + String.fromCharCode(uppercaseBegin);
				uppercaseBegin++;
			}*/
		count++;
		lowercaseBegin++;
	}	
	
	//for loop assigning each letter to their respective file paths and putting that information inside finalPath
	for(var i = 0; i < numImages-1; i++){
		finalPath[i] = filepath + arrayLetters[i];
		//alert(finalPath[i]);
	}
	
	for(var i=0; i<finalPath.length; i++){
		//create each "image" as an object containing essential variables relating to the image.
		var image = {
			animationName: copyNames[i],
			animationDuration: animationDuration,
			filepath: finalPath[i]
		};
		
		//add "image" object to imageArray
		imageArray[i] = image;
	}
	
	var countDelay = 0;
	//alert(copyDelay[countDelay]);
	count = 0;
	var currentImage = 1;
	var nextImage = 2;
		//passing imageArray to change function
		change(imageArray);
		
		function change(imageArray){
			setTimeout(function(){
				$("#image"+currentImage).remove();
				$("#images").append("<img id=image"+ nextImage + " src="+ imageArray[count].filepath + ".png />");
				$("#image"+ nextImage).css("animation-duration", imageArray[count].animationDuration).css("-webkit-animation-duration", imageArray[count].animationDuration);
				$("#image"+ nextImage).addClass("float-right padded-top padded-bottom padded-left animated "+ imageArray[count].animationName);
				currentImage++;
				nextImage++
				count++;
				//delay += 5000;
				if(count < imageArray.length){
					countDelay++;
					change(imageArray);
				}
				//was animationDelay
			}, copyDelay[countDelay]);
		}
}