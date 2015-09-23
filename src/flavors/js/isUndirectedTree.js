function(g){
  var keys = Object.keys(g._nodes);
  var rootNode;
  if(keys.length > 0) {
    rootNode = keys[0];
  } else {
    return false;
  }

  var visited = {};

  var rec = function(node, visited, lastVisited) {
    if(visited[node] == 1) {
      return false;
    }
    visited[node] = 1;

    var children = Object.keys(g._out[node]);
    var inChildren = Object.keys(g._in[node]);
    for(var j=0; j<children.length; j++){
      children[j] = g._edgeObjs[children[j]].w;
    }
    for(var u=0; u<inChildren.length; u++) {
      inChildren[u] = g._edgeObjs[inChildren[u]].v;
    }
    children = children.concat(inChildren);

    for(var i=0; i<children.length; i++) {
      if(children[i] != lastVisited && !rec(children[i], visited, node)) {
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
