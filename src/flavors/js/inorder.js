function(g){
  var inorderToArray = function(node) {
    var children = Object.keys(g._out[node]);
    var order = [];

    if(children.length > 0) {
      var childNode = g._edgeObjs[children[0]].w;
      order = order.concat(inorderToArray(childNode));
    }
    order = order.concat([node]);
    if(children.length > 1) {
      var childNode = g._edgeObjs[children[1]].w;
      order = order.concat(inorderToArray(childNode));
    }

    return order;
  }

  return inorderToArray(root(g));
}
