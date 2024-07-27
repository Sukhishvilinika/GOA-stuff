first_name = input("Enter your first name: ")
surname = input("Enter your last name: ")
age = input("Enter your age: ")
residence = input("Enter your place of residence: ")
list = []
list.append(first_name)
list.append(surname)
list.append(age)
list.append(residence)
print("1:", list[:2])
print("2:", list[1:3])
print("3:", list[:3])
print("4:", list[1:])

negative_number = int(input("enter a negative number: "))
negative_numbers_to_zero = []
for i in range(negative_number, 0):
    negative_numbers_to_zero.append(i)
print("list of negative numbers:", negative_numbers_to_zero)

full_name = "nika sukhishvili"
print("first name:", full_name[:4])
print("last name:", full_name[5:])

ფaვorit_movies = ["saving private ryan", "barbie", "Nika keshelava the movie", "Pirates of the Shavi sea", "Fight clan"]
print("Combination 1:", ფaვorit_movies[:3])
print("Combination 2:", ფaვorit_movies[2:])
print("Combination 3:", ფaვorit_movies[1:4])
print("Combination 4:", ფaვorit_movies[:-2])

academy_name = input("enter the name of the academy: ")
if academy_name.startswith("Goa"):
    print("Goa is the best!!!1!111!1!! +10000000 social credits!!11!1111")
else:
    print("You FOOL! GO to Jail")
