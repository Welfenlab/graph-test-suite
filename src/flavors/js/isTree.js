function(g){
  var keys = Object.keys(g);
  var root = root(g);
  if(root == null) {
    return false;
  }

  var visited = {};
  var lastVisited = 0;

  var rec = function(node, visited, isDirected, lastVisited) {
    if(visited[node] == 1 && node != lastVisited) {
      return false;
    }

    if(isDirected) {
      lastVisited = node;
    }
    visited[node] = 1;

    var children = Object.keys(node._out);
  }
}
