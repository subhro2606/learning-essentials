#7. Write a Python program to find if a given string starts with a given character using Lambda. Go to the editor

str_domain="Jhontu is a good boy."
check_starts_with_s=lambda s:s.lower().startswith('s')
print(check_starts_with_s(str_domain))
check_starts_with_j=lambda s: True if s.lower().startswith('j') else False
print(check_starts_with_j(str_domain))