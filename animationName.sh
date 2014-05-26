#!/bin/bash
# creates file named animationNames.txt to use later for animation purposes
# possible animation names (MUST BE TYPED EXACTLY)
# fadeIn
# fadeInUp
# fadeInDown
# bounceIn
# more on http://daneden.me/animate

echo "How many images?"
read input1

touch animationNames.txt

count=1
while [ $count -le $input ]
do
	echo "What is image $count's delay? "
	read input1
	echo "$input1,"  >> animationNames.txt 
		
	count=$(($count + 1))
	#echo $count
done