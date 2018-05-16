/*
    자료구조 그래프
    BFS, DFS
 */

function Graph() {
    this.vertices = {};
}


function Vertex() {
    this.edge = [];
    this.visited = false;
}


Graph.prototype.addVertex = function (value) {
    this.vertices[value] = new Vertex();
}


Graph.prototype.addEdge = function (v, w) {
    this.vertices[v].edge.push(w);
    this.vertices[w].edge.push(v);
}


// 그래프 출력시
Graph.prototype.printGraph = function () {
    for (let key in this.vertices) {
        console.log(key + " --> " + this.vertices[key].edge);
    }
}

// 검색을 위해 원상 복구
Graph.prototype.resetVisited = function () {
    for (var key in this.vertices) {
        this.vertices[key].visited = false;
    }
}


Graph.prototype.bfs = function (V, result) {
    var queue = [V];
    var vertices = this.vertices;
    vertices[V].visited = true;


    while (queue.length) {
        var current = queue.shift();
        result.push(current)
        var array = vertices[current].edge;
        for (var i = 0; i < array.length; i++) {
            if (!vertices[array[i]].visited) {
                vertices[array[i]].visited = true;
                queue.push(array[i])
            }
        }
    }

    return result;
}

Graph.prototype.dfs = function (V, result) {
    var vertices = this.vertices;
    vertices[V].visited = true;
    result.push(V);
    var array = vertices[V].edge;
    for (var i = 0; i < array.length; i++) {
        if (!vertices[array[i]].visited) {
            this.dfs(array[i], result)
        }
    }
    return result;
}


const graph = new Graph();
const myVertices = ['1', '2', '3', '4'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}


graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.printGraph();


console.log(graph.bfs(1, []));
graph.resetVisited();
console.log(graph.dfs(1, []));
