function(g){
  var postorderToArray = function(node) {
    var children = Object.keys(g._out[node]);
    var order = [];

    for (var i=0; i<children.length; i++) {
      var childNode = g._edgeObjs[children[i]].w;
      order = order.concat(postorderToArray(childNode));
    }

    return order.concat([node]);
  }

  return postorderToArray(root(g));
}
