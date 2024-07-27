def squareandputthemtogether(number):
    numberstr = str(number)
    result = ""
    for digit in numberstr:
        digit_insquare = int(digit) ** 2
        result += str(digit_insquare)
    return int(result)

print(squareandputthemtogether(int(input('insert the number: '))))