def arithmetic_middle(numbers):
    if len(numbers) == 0:
        return 0  
    total = sum(numbers)
    return total / len(numbers)


numbers = [1, 9, 4, 6, 7]
print("Arithmetic middle:", arithmetic_middle(numbers))

def filter_positive_and_negative(numberslist):
    positive_numbers = [num for num in numberslist if num > 0]
    negative_numbers = [num for num in numberslist if num < 0]
    return positive_numbers, negative_numbers

numberslist = [-5, -10, -1, 0, 0.4, 200, 23]
positive, negative = filter_positive_and_negative(numberslist)
print("positive numbers:", positive)
print("negative numbers:", negative)
