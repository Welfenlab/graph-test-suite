function(g){
  if(!isAlmostCompleteTree(g)) {
    return false;
  }

  var levelOrderHeap = levelorder(g);

  for(var i=0; i<levelOrderHeap.length; i++) {
    var parent = levelOrderHeap[i];
    if(!isNaN(parseInt(parent))) {
      parent = parseInt(parent);
    }
    var child = levelOrderHeap[2*i+1];
    if(!isNaN(parseInt(child))) {
      child = parseInt(child);
    }
    if(2*i+1 < levelOrderHeap.length && parent > child) {
      return false;
    }
    child = levelOrderHeap[2*i+2];
    if(!isNaN(parseInt(child))) {
      child = parseInt(child);
    }
    if(2*i+2 < levelOrderHeap.length && parent > child) {
      return false;
    }
  }

  return true;
}
