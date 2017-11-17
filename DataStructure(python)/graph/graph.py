'''
Created on 2017. 11. 6.

@author: Yoon
'''


def bfs(g, start):
    queue = [start]
    visited = []
        
    while queue:
        current = queue.pop(0)
        visited.append(current)
        for neighbor in g[current]:
            if neighbor not in visited:
                queue.append(neighbor)
    return visited            




def dfs(g, start):
    stack = [start]
    visited = []
    
    while stack:
        current = stack.pop()
        visited.append(current)
        while g[current]:
            neighbor = g[current].pop()
            if neighbor not in visited:
                stack.append(neighbor)
    return visited             
                
g = {
      0 : [1, 2],
      1 : [0, 3],
      2 : [0, 4, 5],
      3 : [1],
      4 : [2, 6],
      5 : [2],
      6 : [4]
    }                
                 
# g = {
#       1 : [2, 3],
#       2 : [1, 4, 5],
#       3 : [1],
#       4 : [2],
#       5 : [2]
#     }

# g = {'A': ['B', 'C', 'E'],
#      'B': ['A', 'D', 'F'],
#      'C': ['A', 'G'],
#      'D': ['B'],
#      'E': ['A', 'F'],
#      'F': ['B', 'E'],
#      'G': ['G']}

# g = {'세종': ['서울', '강릉', '대구', '광주'],
#          '서울': ['평양', '인천', '세종'],
#          '강릉': ['독도', '세종'],
#          '광주': ['세종', '여수'],
#          '대구': ['세종', '울산'],
#          '평양': ['서울', ],
#          '인천': ['서울', ],
#          '독도': ['강릉', ],
#          '여수': ['광주', '부산'],
#          '울산': ['대구', '부산'],
#          '부산': ['여수', '울산'],
#          }



print(bfs(g, 0))
print('------------------------------------')
print(dfs(g, 0))
