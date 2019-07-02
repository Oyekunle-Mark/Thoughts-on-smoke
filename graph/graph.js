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
