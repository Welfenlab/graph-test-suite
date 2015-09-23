function(g, node){
  var startnode = node;

  var visited = {};
  var queue = [startnode];
  var i=0;
  while(i<queue.length){
    visited[queue[i]] = 1;
    var children = Object.keys(g._out[queue[i]]);
    var inChildren = Object.keys(g._in[queue[i]]);
    var allChildren = [];
    for(var j=0; j<children.length; j++) {
      if(visited[g._edgeObjs[children[j]].w] != 1) {
        allChildren = allChildren.concat([g._edgeObjs[children[j]].w]);
        visited[g._edgeObjs[children[j]].w] = 1;
      }
    }

    if(!g._isDirected) {
      for(var u=0; u<inChildren.length; u++) {
        if(visited[g._edgeObjs[inChildren[u]].v] != 1) {
          allChildren = allChildren.concat([g._edgeObjs[inChildren[u]].v]);
          visited[g._edgeObjs[inChildren[u]].v] = 1;
        }
      }
    }
    allChildren = allChildren.sort();
    queue = queue.concat(allChildren);
    i++;
  }
  return queue;
}
