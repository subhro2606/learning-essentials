#4. Write a Python program to sort a list of dictionaries using Lambda. Go to the editor

models = [{'make':'Nokia', 'model':216, 'color':'Black'}, {'make':'Mi Max', 'model':'2', 'color':'Gold'}, {'make':'Samsung', 'model': 7, 'color':'Blue'}]
sort_by="model"
print(models)
models.sort(key=lambda dic: int(dic[sort_by]))
print(models)