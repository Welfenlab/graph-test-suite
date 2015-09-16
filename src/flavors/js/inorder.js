function(g){
  var inorderToArray = function(node) {
    var children = Object.keys(g._out[node]);
    var order = [];
    var childNode;
    if(children.length > 0) {
      childNode = g._edgeObjs[children[0]].w;
      order = order.concat(inorderToArray(childNode));
    }
    order = order.concat([node]);
    if(children.length > 1) {
      childNode = g._edgeObjs[children[1]].w;
      order = order.concat(inorderToArray(childNode));
    }

    return order;
  };
  var rootNode;
  if(g._isDirected){
    rootNode = root(g);
  } else{
    rootNode = Object.keys(g._nodes)[0];
  }
  return inorderToArray(rootNode);
}
