function(g){
  var keys = Object.keys(g._nodes);
  var rootNode;
  var isDirected = g._isDirected;
  if(g._isDirected) {
    rootNode = root(g);
    if(rootNode === null) {
      return false;
    }
  } else {
    rootNode = keys[0];
  }

  var visited = {};

  var rec = function(node, visited, lastVisited) {
    if(visited[node] == 1 && node != lastVisited) {
      return false;
    }
    visited[node] = 1;

    var children = Object.keys(g._out[node]);
    for(var i=0; i<children.length; i++) {
      if(isDirected) {
        lastVisited = node;
      }
      if(g._edgeObjs[children[i]].w == node) {
        return false;
      }
      if(!rec(g._edgeObjs[children[i]].w, visited, lastVisited)) {
        return false;
      }
    }

    return true;
  };

  if(rec(rootNode, visited, null)) {
    for(var i=0; i<keys.length; i++) {
      if(visited[keys[i]] != 1) {
        return false;
      }
    }
    return true;
  }
  return false;
}
