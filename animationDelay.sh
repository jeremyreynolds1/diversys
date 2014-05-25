#!/bin/bash
# creates file called animation.txt containing all animation times.

echo "Please enter number of images"
read input
touch animation.txt

count=1
while [ $count -le $input ]
do
	echo "What is image $count's delay? "
	read input1
	echo "$input1,"  >> animation.txt 
		
	count=$(($count + 1))
	#echo $count
done