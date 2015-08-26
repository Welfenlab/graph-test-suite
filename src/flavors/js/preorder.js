function(g){
  return preorderToString(root(g));

  var preorderToString = function(node) {
    var children = Object.keys(g._out[node]);
    var string = "" + node;

    for (int i=0; i<children.length; i++) {
      var childNode = g._edgeObjs[children[i]].w;
      string += ",";
      string += preorderToString(childNode);
    }

    return string
  }
}
