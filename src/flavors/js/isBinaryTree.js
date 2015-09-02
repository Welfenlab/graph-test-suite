function(g){
  if(!isTree(g)) {
    return false;
  }

  var keys = Object.keys(g._nodes);
  for(var i=0; i<keys.length; i++) {
    node = keys[i];
    var children = Object.keys(g._out[node]);
    if(children.length > 2) {
      return false;
    }
  }

  return true;
}
