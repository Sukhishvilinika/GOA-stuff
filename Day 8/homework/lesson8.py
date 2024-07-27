name = input("ჩაწერეთ თქვენი სახელი: ")
password = input("ჩაწერეთ თქვენი პაროლი: ")

repeat_password = input("ახლიდან ჩაწერე პაროლი: ")

if password != repeat_password:
    print("პაროლები არ ემთხვევა. ახლიდან ჩაწერეთ.")
else:
    print("რეგისტრაცია შესრულდა.")