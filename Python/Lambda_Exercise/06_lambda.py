#6. Write a Python program to square and cube every number in a given list of integers using Lambda. Go to the editor

domain=[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20]

cube_function=lambda n: n**3
square_function=lambda n: n**2

print(f"Square values: {list(map(square_function,domain))}")
print("Cube values",list(map(cube_function,domain)))
