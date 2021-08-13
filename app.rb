=begin 
Ruby program to find number of words in a string.
=end

puts "Enter the String:"
str1=gets.chomp

count=1
for i in 1..str1.length
	if (str1[i] == ' ')
	count+=1
	end
end

puts "Number of words are #{count}"