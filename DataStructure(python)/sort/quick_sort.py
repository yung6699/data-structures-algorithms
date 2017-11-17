'''
Created on 2017. 11. 6.

@author: Yoon
'''

def quick_sort_sub(array, start, end):
    if end - start <= 0:
        return
    
    pivot = array[end]
    i = start
    
    # 파이썬 range end는 end 이전 까지 루프를 돈다.
    for j in range(start, end):
        if array[j] <= pivot:
            array[i], array[j] = array[j], array[i]
            i += 1
    array[i], array[end] = array[end], array[i]
    
    quick_sort_sub(array, start, i - 1)
    quick_sort_sub(array, i + 1, end)
    

def quick_sort(array):
    quick_sort_sub(array, 0, len(array) - 1)
       
d = [6, 8, 3, 9, 10, 1, 2, 4, 7, 5]
quick_sort(d)
print(d)
