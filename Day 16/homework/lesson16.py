def greet(name):
    print("hello, " + name + "!")

def luwikenti(number):
    if number % 2 == 0:
        print(number, "is even")
    else:
        print(number, "is odd")

def calculate_triangle_area(base, height):
    return 0.5 * base * height

def is_palindrome(word):
    if word == word[::-1]:
        return True
    else:
        return 'the word is not a palindrome.'
def reverse_list(lst):
    return lst[::-1]

def sum_even_indices(numbers):
    return sum(numbers[::2])

def sum_odd_even(numbers):
    sum_odd = sum(num for num in numbers if num % 2 != 0)
    sum_even = sum(num for num in numbers if num % 2 == 0)
    return [sum_odd, sum_even]

def count_elements(lst):
    return len(lst)

def my_replace(string, old, new):
    return string.replace(old, new)

greet("Data")
luwikenti(9)
print("Area of triangle:", calculate_triangle_area(10, 5))
print("Is this a palindrome?", is_palindrome("racecar"))
print("Reversed list:", reverse_list([1, 2, 3, 4, 5]))

print("Sum of numbers at even indices:", sum_even_indices([1, 2, 3, 4, 5]))
print("Sum of odd and even numbers separately:", sum_odd_even([1, 2, 3, 4, 5]))
print("Count of elements in the list:", count_elements([1, 2, 3, 4, 5]))

print("Replace apple with banana:", my_replace("I like apple", "apple", "banana"))
