function(g) {
  var breadth = function(graph, node){
    var startnode = node;

    var visited = {};
    var queue = [startnode];
    var i=0;
    while(i<queue.length){
      visited[queue[i]] = 1;
      var children = Object.keys(graph._out[queue[i]]);
      var inChildren = Object.keys(graph._in[queue[i]]);
      var allChildren = [];
      for(var j=0; j<children.length; j++) {
        if(visited[graph._edgeObjs[children[j]].w] != 1) {
          allChildren = allChildren.concat([graph._edgeObjs[children[j]].w]);
          visited[graph._edgeObjs[children[j]].w] = 1;
        }
      }
      for(var u=0; u<inChildren.length; u++) {
        if(visited[graph._edgeObjs[inChildren[u]].v] != 1) {
          allChildren = allChildren.concat([graph._edgeObjs[inChildren[u]].v]);
          visited[graph._edgeObjs[inChildren[u]].v] = 1;
        }
      }
      allChildren = allChildren.sort();
      queue = queue.concat(allChildren);
      i++;
    }
    return queue;
  }

  var keys = Object.keys(g._nodes);
  var visitedNodes = {};
  connectedComp = 0;

  for(var w=0; w<keys.length; w++){
    if(visitedNodes[keys[w]] != 1){
       var breadthFirst = breadth(g, keys[w]);
       connectedComp++;
       for(var q =0; q<breadthFirst.length; q++){
         visitedNodes[breadthFirst[q]] = 1;
       }
    }
  }
  return connectedComp;
}
