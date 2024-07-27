def user_contacts(users):
    contacts = {}
    for user in users:
        if len(user) == 2:
            name, zip = user
        else:
            name, zip = user[0], None        
    return contacts