def pirveli(s):
    i = len(s) - 1
    while i >= 0 and s[i].isdigit():
        i -= 1
    if i == len(s) - 1:
        new_s = s + '1'
    else:
        num_str = s[i + 1:]
        new_num = str(int(num_str) + 1)
        new_s = s[:i + 1] + new_num   
    return new_s

def meore(arr1, arr2):
    total_diff = 0
    length = len(arr1)
    
    for i in range(length):
        diff = arr1[i] - arr2[i]
        total_diff += diff ** 2
    
    return total_diff / length

print(meore([1, 2, 3], [4, 5, 6]))