function Graph() {
    var vertices = []; // 정점을 저장하는 리스트
    var graph = {}; // 인접 리스트 딕셔너리

    // 그래프의 정점을 추가하는 메소드
    this.addVertex = function(v) {
        vertices.push(v);
        graph[v] = [];
    }

    // 간선을 추가하는 메소드
    this.addEdge = function(v, w) {
        graph[v].push(w);
        graph[w].push(v);
    }
  
    this.bfs = function(start){
        var queue = [start];
        var visited = [];

        while(queue.length != 0){
            var current = queue.shift();
            visited.push(current);
            for(neighbor of graph[current]){
                if(visited.indexOf(neighbor) == -1){
                    queue.push(neighbor)
                }
            }
        }

        return visited
    }

    this.dfs = function(start) {
        var stack = [start];
        var visited = [];

        while(stack.length != 0){
            var current = stack.pop();
            visited.push(current)
            for(neighbor of graph[current].reverse()){
                if(visited.indexOf(neighbor) == -1){
                    stack.push(neighbor)
                }
            }
        }
        return visited
    }

    this.toString = function() {
        return graph;
    }
}


var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());
console.log(graph.bfs('A'));
console.log(graph.dfs('A'));
