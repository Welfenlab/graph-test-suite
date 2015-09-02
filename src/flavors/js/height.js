function(g){
  var rootnode = root(g);

  var recHeight = function(node){
    var children = Object.keys(g._out[node]);
    var max = 0;
    for(var i=0; i<children.length; i++) {
      if(recHeight(g._edgeObjs[children[i]].w)>max){
        max = recHeight(g._edgeObjs[children[i]].w);
      }
    }
    return max + 1;
  }

  return recHeight(rootnode);
}
