#!/bin/bash

echo "Please enter number of images"
read input
echo "What would you like your file to be called?"
read fileName
touch $fileName
counter=0

while [ $counter -lt $input ] 
do
	echo The counter is $counter
	let counter=counter+1
done