function(g){
  if(!isBinaryTree(g)) {
    return false;
  }
  var treeHeight = height(g);
  var rootnode = root(g);

  var recHeap = function(node, h){
    var children = Object.keys(g._out[node]);
    if(h<treeHeight-1){
      if(children.length!=2){
        return false;
      }
      for(var i=0; i<children.length; i++) {
        if(!recHeap(g._edgeObjs[children[i]].w,h+1)) {
          return false;
        }
      }
      return true;
    }
    else if(h==treeHeight-1){
      var neighbour = getNeighbour(node);

      if(neighbour !== null){
        if(children.length < 2 && Object.keys(g._out[neighbour]).length > 0) {
          return false;
        }
      }
      return true;

    }
    else{
      return true;
    }
  };

  var nodeHeight = function(start, searchedNode, height) {
    var children = Object.keys(g._out[start]);
    for(var i=0; i<children.length; i++) {
      if(g._edgeObjs[children[i]].w == searchedNode) {
        return height + 1;
      } else {
        var childHeight = nodeHeight(g._edgeObjs[children[i]].w, searchedNode, height + 1);
        if(childHeight > 0) {
          return childHeight;
        }
      }
    }
    return 0;
  };

  var getNeighbour = function(node) {
    var queue = levelorder(g);
    for(var i=0; i<queue.length; i++) {
      if(queue[i] == node && i<(queue.length -1) && nodeHeight(rootnode, queue[i+1], 0) == nodeHeight(rootnode, node, 0)) {
        return queue[i+1];
      }
    }
    return null;
  };

  return recHeap(rootnode,1);
}
