'''
Created on 2017. 11. 6.

@author: Yoon
'''

def selection_sort(array):
    for i in range(0, len(array) - 1):
        min = i
        for j in range(i + 1, len(array)):
            if array[min] > array[j]:
                min = j
        array[i], array[min] = array[min], array[i]        

d = [6, 8, 3, 9, 10, 1, 2, 4, 7, 5]
selection_sort(d)
print(d)         