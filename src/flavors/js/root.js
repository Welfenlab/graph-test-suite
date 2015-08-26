function(g){
  var keys = Object.keys(g._nodes);
  if(g._isDirected) {
    for(var i=0; i<keys.length; i++) {
      var inkeys = Object.keys(g._in[keys[i]]);
      if(inkeys.length == 0) {
        return keys[i];
      }
    }
  }
  return null;
}
