def likescount(names):
    numoflikes = len(names)
    if numoflikes == 0:
        return "no one likes this"
    elif numoflikes == 1:
        return ((names[0]) + " likes this")
    elif numoflikes == 2:
        return ((names[0]) + " and " + (names[1]) + " like this")
    elif numoflikes == 3:
        return ((names[0]+', ') + (names[1]) + "and " + (names[2]) + " like this")
    else:
        return ((names[0]+', ') + (names[1]) + " and " + (str(numoflikes - 2)) + " others like this")
 

print(likescount(['zezva', 'mzia', 'datunia', 'gosha', 'vaska']))

#თუ ჩამოვთვლით 10-ის ქვემოთ ყველა ნატურალურ რიცხვს, რომლებიც არიან 3 ან 5-ის ჯერადები, მივიღებთ 3, 5, 6 და 9. ამ ჯერადების ჯამი არის 23.
#დაასრულეთ ამონახსნები ისე, რომ დააბრუნოს 3-ის ან 5-ის ყველა ჯერადის ჯამი ჩაწერილი რიცხვის ქვემოთ.
#გარდა ამისა, თუ რიცხვი უარყოფითია, დააბრუნეთ 0.
#შენიშვნა: თუ რიცხვი არის 3-ისა და 5-ის ჯერადი, მხოლოდ ერთხელ დათვალეთ.

def multiplessum(number):
    sum = 0
    if number <= 0:
        return 0
    else:
        for i in range(number):
            if i % 3 == 0 or i % 5 == 0:
                sum += i
        return sum

print(multiplessum(25))