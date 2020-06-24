#16. Write a Python program to find the second lowest grade of any student(s) from the given names and grades of each student using lists and lambda. Input number of students, names and grades of each student.


student_list=[['S ROY', 1.0], ['B BOSE', 3.0], ['N KAR', 2.0], ['C DUTTA', 1.0], ['G GHOSH', 1.0]]
student_list=sorted(student_list,key=lambda x:x[1])

second_low=student_list[0][1]
for i in range(len(student_list)):
    if student_list[i][1]!=second_low:
        second_low=student_list[i][1]
        break

student_list_second_lowest=sorted(list(filter(lambda x: x[1]==second_low,student_list)),key=lambda x:x[0])
print(student_list_second_lowest)