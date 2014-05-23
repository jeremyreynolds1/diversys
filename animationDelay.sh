#!/bin/bash

echo "Please enter number of images"
read input
echo "What would you like your file to be called?"
read fileName
touch $fileName
count=1
while [ $count -le $input ]
do
	echo "What is image $count's delay? "
	read input1
	echo "$input1,"  >> $fileName 
	count=$(($count + 1))
	#echo $count
done

#x=1
#while [ $x -le 5 ]
#do
#	echo "Welcome $x times"
#	x=$(($x + 1))
#done