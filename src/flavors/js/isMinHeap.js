function(g){
  if(!isAlmostCompleteTree(g)) {
    return false;
  }

  var nodes = Object.keys(g._nodes);
  var isNumber = !isNaN(parseInt(nodes[0]));
  for(var j=1; j<nodes.length; j++){
    if(isNaN(parseInt(nodes[j])) == isNumber) {
      return false;
    }
  }

  var levelOrderHeap = levelorder(g);

  for(var i=0; i<levelOrderHeap.length; i++) {
    var child;
    var parent = levelOrderHeap[i];
    if(!isNaN(parseInt(parent))) {
      parent = parseInt(parent);
    } else {
      parent = parent.toLowerCase();
    }
    if(2*i+1 < levelOrderHeap.length) {
      child = levelOrderHeap[2*i+1];
      if(!isNaN(parseInt(child))) {
        child = parseInt(child);
      } else {
        child = child.toLowerCase();
      }
      if(parent > child) {
        return false;
      }
    }
    if(2*i+2 < levelOrderHeap.length) {
      child = levelOrderHeap[2*i+2];
      if(!isNaN(parseInt(child))) {
        child = parseInt(child);
      } else {
        child = child.toLowerCase();
      }
      if(parent > child) {
        return false;
      }
    }
  }

  return true;
}
