def unique_in_order(sequence):
    if not sequence:
        return []

    unique_list = [sequence[0]]
    
    for current in sequence[1:]:
        if current != unique_list[-1]:
            unique_list.append(current)
    
    return unique_list


def sort_string_by_number(s):
    if not s:
        return ""

    words = s.split()
    
    def extract_first_digit(word):
        for char in word:
            if char.isdigit():
                return int(char)
        return float('inf')  
    
    sorted_words = sorted(words, key=extract_first_digit)
    
    return " ".join(sorted_words)


def max_multiple(divisor, bound):
    return (bound // divisor) * divisor


def get_issuer(card_number):
    card_number = str(card_number).strip()
    length = len(card_number)
    
    issuers = [
        (['34', '37'], {15}, 'AMEX'),
        (['6011'], {16}, 'Discover'),
        (['51', '52', '53', '54', '55'], {16}, 'Mastercard'),
        (['4'], {13, 16}, 'VISA')
    ]
    
    for prefixes, valid_lengths, issuer in issuers:
        if length in valid_lengths and any(card_number.startswith(prefix) for prefix in prefixes):
            return issuer
    
    return "Unknown"


def switch_a_b(s):
    return s.translate(str.maketrans('ab', 'ba'))


def count_people_on_bus(stops):
    current_passengers = 0
    
    for on, off in stops:
        current_passengers += on
        current_passengers -= off
    
    return current_passengers
