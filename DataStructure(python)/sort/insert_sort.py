'''
Created on 2017. 11. 6.

@author: Yoon
'''

def insert_sort(array):
    for i in range(1, len(array)):
        temp = array[i]
        j = i
        while j > 0 and array[j - 1] > temp:
            array[j] = array[j - 1]
            j -= 1
            
        array[j] = temp

d = [6, 8, 3, 9, 10, 1, 2, 4, 7, 5]
insert_sort(d)
print(d)         