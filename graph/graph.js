class Graph {
  constructor() {
    this.AdjList = new Map();
  }

  addVertex(vertex) {
    if (!this.AdjList.has(vertex)) this.AdjList.set(vertex, []);
    else Error('Already Exist');
  }

  addEdge(vertex, node) {
    if (this.AdjList.has(vertex)) {
      if (this.AdjList.has(node)) {
        const arr = this.AdjList.get(vertex);

        if (!arr.includes(node)) arr.push(node);
      } else Error('Can"t add non-existing vertex');
    } else Error('Vertex does not exist');
  }

  print() {
    for (const [key, value] of this.AdjList) console.log(key, value);
  }

  createdVisitedObject() {
    const visited = {};

    for (const i of this.AdjList.keys()) visited[i] = false;

    return visited;
  }

  breathFirstSearch(startNode) {
    const visited = this.createdVisitedObject();
    const queue = [];

    visited[startNode] = true;
    queue.push(startNode);

    while (queue.length) {
      const currentVertex = queue.pop();
      console.log(currentVertex);

      const edges = this.AdjList.get(currentVertex);

      for (const i of edges) {
        if (!visited[i]) {
          visited[i] = true;
          queue.unshift(i);
        }
      }
    }
  }

  depthFirstSearch(startingNode) {
    const visited = this.createVisitedObject();
    this.dfsHelper(startingNode, visited);
  }

  dfsHelper(startingNode, visited) {
    visited[startingNode] = true;
    console.log(startingNode);

    const arr = this.AdjList.get(startingNode);

    for (const elem of arr) {
      if (!visited[elem]) {
        this.dfsHelper(elem, visited);
      }
    }
  }

  doesPathExist(firstNode, secondNode) {
    const path = [];
    const visited = this.createVisitedObject();
    const queue = [];
    visited[firstNode] = true;
    queue.push(firstNode);
    while (queue.length) {
      const node = queue.pop();
      path.push(node);
      const elements = this.AdjList.get(node);
      if (elements.includes(secondNode)) {
        console.log(path.join('->'));
        return true;
      }

      for (const elem of elements) {
        if (!visited[elem]) {
          visited[elem] = true;
          queue.unshift(elem);
        }
      }
    }
    return false;
  }
}

const g = new Graph();
const arr = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < arr.length; i++) {
  g.addVertex(arr[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
g.print();
