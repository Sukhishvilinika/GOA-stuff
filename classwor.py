def outliner(integers):
    even = []
    odd = []
    for i in integers:
        if i % 2 == 0:
            even.append(i)
        else:
            odd.append(i)
    if len(even) == 1:
        return str('the number that is out of place is' + even)
    else:
        return str('the number that is out of place is' + odd)

print(outliner([2, 16, 8, 8, 10, 3]))