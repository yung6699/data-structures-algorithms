/*
    자료구조 그래프
    BFS, DFS
 */

function Graph(){
    this.vertices = {};
}

function GraphNode(value){
    this.value = value;
    this.edge = [];
    this.visited = false;
}

// 그래프의 정점을 추가하는 메소드
Graph.prototype.addVertex = function(value){
    this.vertices[value] = new GraphNode(value);
}

// 간선을 추가하는 메소드
Graph.prototype.addEdge = function(v, w){
    this.vertices[v].edge.push(w);
    this.vertices[w].edge.push(v);
}

// 그래프 출력시
Graph.prototype.printGraph = function() {
    for (let key in this.vertices) {
        console.log(key + " --> " + this.vertices[key].edge);
    }
}

// 검색을 위해 원상 복구
Graph.prototype.resetVisited = function() {
    for (let key in this.vertices) {
        this.vertices[key].visited = false;
    }
}


Graph.prototype.bfs = function(start) {

    const queue = [start];
    const vertices = this.vertices;

    vertices[start].visited = true;

    while (queue.length) {
        let current = queue.shift();
        console.log(current);
        for (neighbor of vertices[current].edge) {
            if (!vertices[neighbor].visited) {
                vertices[neighbor].visited = true;
                queue.push(neighbor)
            }
        }
    }
}


Graph.prototype.dfs = function(start) {

    const stack = [start];

    const vertices = this.vertices;
    vertices[start].visited = true

    while(stack.length){
        let current = stack.pop();
        console.log(current);
        const temp = vertices[current].edge.reverse();
        for(neighbor of temp){
            if(!vertices[neighbor].visited){
                vertices[neighbor].visited = true;
                stack.push(neighbor)
            }
        }
    }

}


const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}


graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
// graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('E', 'I');
graph.printGraph();

// graph.bfs('A');
// graph.resetVisited();
graph.dfs('A');
