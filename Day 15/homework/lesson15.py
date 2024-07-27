def add(x, y):
    return x + y
def subtract(x, y):
    return x - y
def multiply(x, y):
    return x * y
def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "Cannot divide by zero"


def calculate_area(length, height):
    return length * height

def calculate_perimeter(height1, length1, height2, length2):
    if height1!=height2 or length1!=length2:
     return "it aint right chief, this is a rectangle not a whateverangle!"
    else:
     return height1 + length1 + height2 + length2

def calculate_list_sum(num_list):
    total = 0
    for num in num_list:
        total += num
    print("Sum:", total)

def find_min_max(num_list):
    if num_list:
        min_num = max_num = num_list[0]
        for num in num_list:
            if num < min_num:
                min_num = num
            elif num > max_num:
                max_num = num
        print("Minimum:", min_num)
        print("Maximum:", max_num)
    else:
        print("list is empty")


print("Addition:", add(5, 4))
print("Subtraction:", subtract(9, 4))
print("Multiplication:", multiply(10, 2))
print("Division:", divide(5, 2))

print("Area of rectangle:", calculate_area(5, 5))

print("Perimeter of rectangle:", calculate_perimeter(6, 5, 6, 5))

calculate_list_sum([1, 2, 3, 4, 5])

find_min_max([3, 8, 1, 6, 7])
