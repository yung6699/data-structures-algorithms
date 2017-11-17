'''
Created on 2017. 11. 6.

@author: Yoon
'''

def bubble_sort(array):
    for i in range(0, len(array)):
        for j in range(0, len(array) - 1):
            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
                 

d = [6, 8, 3, 9, 10, 1, 2, 4, 7, 5]
bubble_sort(d)
print(d)                
