
Num1 = int(input("ჩაწერეთ პირველი მთელი რიცხვი:" ))

Num2 = int(input("ჩაწერეთ მეორე მთელი რიცხვი:" ))

print(str(Num1)+"-ის და "+str(Num2)+"-ის ჯამი არის "+str(Num1+Num2))
print(str(Num1)+"-ის და "+str(Num2)+"-ის სხვაობა არის "+str(Num1-Num2))
print(str(Num1)+"-ის და "+str(Num2)+"-ის ნამრავლი არის "+str(Num1*Num2))
print(str(Num1)+"-ის და "+str(Num2)+"-ის განაყოფი არის "+str(Num1/Num2))

if Num1 > Num2:
 print(str(Num1)+" მეტია "+str(Num2)+"-ზე")
elif Num1 < Num2:
 print(str(Num1)+" ნაკლებია "+str(Num2)+"-ზე")
else:
 print(str(Num1)+" ტოლია "+str(Num2)+"-ის")