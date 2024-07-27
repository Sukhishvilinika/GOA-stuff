def manual_pop(lst, index=-1):
    if 0 <= index < len(lst):
        return lst[:index] + lst[index+1:]
    else:
        return lst[-1]

def manual_count(lst, element=None):
    count = 0
    
    for item in lst:
        if item == element:
            count += 1
            return count
        elif element == None:
            element = (int(sum(lst) / len(lst)))
            for item in lst:
             if item == element:
              count += 1
              return count
            else:
                break
            
    
    


def manual_min(list=None):  # Default list is None
    if list == None:
        list = range(1, 11)  # Default list from 1 to 10
    min_value = list[0]
    for num in list:
        if num < min_value:
            min_value = num
    return min_value

def manual_max(lst=None):  # Default list is None
    if lst == None:
        lst = list(range(1, 11))  # Default list from 1 to 10
    max_value = lst[0]
    for num in lst:
        if num > max_value:
            max_value = num
    return max_value

# Test cases
print(manual_pop([1, 2, 3, 4, 5], ))  
print(manual_count([5, 5, 5, 5], 5 ))
print(manual_min()) 