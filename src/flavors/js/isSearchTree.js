function(g){
  if(!isBinaryTree(g)){
    return false;
  }
  var nodes = Object.keys(g._nodes);
  var isNumber = !isNaN(parseInt(nodes[0]));
  for(var j=1; j<nodes.length; j++){
    if(isNaN(parseInt(nodes[j])) == isNumber) {
      return false;
    }
  }

  var order = inorder(g);
  if(isNumber){
    for(var l=0; l<order.length; l++){
      order[i] = parseInt[order[i]];
    }
  }
  else{
    for(var k=0;k<order.length; k++){
      order[k] = order[k].toLowerCase();
    }
  }

  for(var i=0; i<order.length-1; i++) {
    if(order[i]>order[i+1]){
      return false;
    }
  }
  return true;
}
