function(g){

  var isDirected = g._isDirected;
  if(isDirected) {
    return isDirectedTree(g);
  } else {
     return isUndirectedTree(g);
  }

}
