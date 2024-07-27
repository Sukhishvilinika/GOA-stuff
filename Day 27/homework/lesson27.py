def special_number_multiplier(numbers):
    new_list = []
    for i in numbers:
        if i == int(i):
            new_list.append(i*2)
        else:
            new_list.append(i*4)
    return new_list
    
print(special_number_multiplier([10, 6.7, 89, 0]))

def naming(names):
    converted_names = []
    for i in range(len(names)):
        if i % 2 == 0:
            converted_names.append(names[i].upper())
        else:
            converted_names.append(names[i].lower())
    return converted_names

print(naming(['data', 'nika', 'gela']))

def occurrences(collection, searchfor):
    count = 0
    for a in collection:
        if a == searchfor:
            count += 1
    return count

def only_odd_numbers(numbers):
    odd_numbers = []
    for num in numbers:
        if num % 2 != 0:
            odd_numbers.append(num)
    return odd_numbers

print(only_odd_numbers([3, 2, 1, 89, 70]))