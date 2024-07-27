programming_languages = ['Python', 'Java', 'JavaScript', 'C++', 'C#']

print("List of programming languages:", programming_languages)

print("Last programming language in the list:", programming_languages[4])


mixed_list = ['Data', 123, 3.1883278438, True]

string_element = mixed_list[0]
integer_element = mixed_list[1]
float_element = mixed_list[2]
boolean_element = mixed_list[3]

print("String element:", string_element)
print("Integer element:", integer_element)
print("Float element:", float_element)
print("Boolean element:", boolean_element)


multiples_of_4 = [i for i in range(0, 21, 4)]

print("List of multiples of 4:", multiples_of_4)

print("Largest multiple of 4 in the list:", max(multiples_of_4))


odd_numbers = [i for i in range(31, 51, 2)]

sum_of_smallest = sum(sorted(odd_numbers)[:3])

print("List of odd numbers from 30 to 50:", odd_numbers)

print("Sum of the three smallest elements:", sum_of_smallest)


multiples_of_three = [num for num in odd_numbers if num % 3 == 0]
print("Multiples of three from the list:", multiples_of_three)
