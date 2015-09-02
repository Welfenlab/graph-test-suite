function(g){
  var preorderToArray = function(node) {
    var children = Object.keys(g._out[node]);
    var order = [node];

    for (var i=0; i<children.length; i++) {
      var childNode = g._edgeObjs[children[i]].w;
      order = order.concat(preorderToArray(childNode));
    }

    return order;
  }

  return preorderToArray(root(g));
}
