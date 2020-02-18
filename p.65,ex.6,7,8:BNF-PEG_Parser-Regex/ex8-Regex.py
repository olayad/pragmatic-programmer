#!/usr/bin/env/ python3

import re

pattern = r'(^|\s)([1,2]?\d)(am|pm|AM|PM)|(^|\s)([1,2]?\d):([0-5]\d)(am|pm|AM|PM)?'
# group1: space
# group2: hour
# group3: am,pm
# group4: space
# group5: hour
# group6: minute
# group7: am,pm


def calculate_minutes_past_midnight(hours, minutes, meridian):
    result = 0
    if meridian == 'AM':
        result = (hours % 12) * 60 + minutes
    elif meridian == 'PM':
        result = (hours + 12) * 60 + minutes
    else:
        result = (hours * 60) + minutes
    print(f'Minutes past midnight:{result}')


def analyze_input(input):
    match = re.search(pattern, input)
    if re.match(pattern, input):
        hours_meridian_format = True if match.group(2) is not None else False
        hours_minutes_format = True if match.group(7) is None else False
        if hours_meridian_format:  # matches <hour><meridian>
            hours = int(match.group(2))
            minutes = 0
            meridian = match.group(3).upper()
        elif hours_minutes_format:  # matches <hour><:><minutes>
            hours = int(match.group(5))
            minutes = int(match.group(6))
            meridian = None
        else:   # matches <hour><:><minutes><meridian>
            hours = int(match.group(5))
            minutes = int(match.group(6))
            meridian = match.group(7).upper()
        calculate_minutes_past_midnight(hours, minutes, meridian)
    else:
        print(f'Patter given is not recognized')


if __name__ == '__main__':
    user_input = input("Enter a time in one of the following formats (4pm, 7:38pm, 23:42, 3:16, 3:16am): ")
    analyze_input(user_input)
