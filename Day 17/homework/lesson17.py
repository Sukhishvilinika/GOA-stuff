def function(string):
   return (string.lower(), string.upper(), string.capitalize(), string.find('enter here'))
print (function("goa"))

def modifyandjoin(names_list):
    change = int(input("Which index do you want to change? "))
    desired_string = input("Enter your desired string: ")
    names_list[change] = desired_string
    return ' '.join(names_list)

names = ["name1", "name2", "name3"]
modified_names = modifyandjoin(names)
print(modified_names)
