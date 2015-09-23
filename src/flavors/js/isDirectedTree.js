function(g){
  var keys = Object.keys(g._nodes);
  var rootNode;
  rootNode = root(g);
  if(rootNode === null) {
    return false;
  }

  var visited = {};

  var rec = function(node, visited) {
    if(visited[node] == 1) {
      return false;
    }
    visited[node] = 1;

    var children = Object.keys(g._out[node]);
    for(var j=0; j<children.length; j++){
      children[j] = g._edgeObjs[children[j]].w;
    }
    for(var i=0; i<children.length; i++) {
      if(!rec(children[i], visited)) {
        return false;
      }
    }
    return true;
  };

  if(rec(rootNode, visited)) {
    for(var i=0; i<keys.length; i++) {
      if(visited[keys[i]] != 1) {
        return false;
      }
    }
    return true;
  }
  return false;
}
