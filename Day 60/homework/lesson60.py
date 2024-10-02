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

def meore(array1, array2):
    sumofdiff = 0
    length = len(array1)    
    for i in range(length):
        diff = array1[i] - array2[i]
        sumofdiff += diff ** 2   
    return sumofdiff / length

print(meore([1, 2, 3], [4, 5, 6]))