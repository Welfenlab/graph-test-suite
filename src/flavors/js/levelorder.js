function(g){
  var rootnode = root(g);
  var queue = [rootnode];
  var i=0;
  while(i<queue.length){
    var children = Object.keys(g._out[queue[i]]);
    for(var j=0; j<children.length; j++) {
      queue = queue.concat([g._edgeObjs[children[j]].w]);
    }
    i++;
  }
  return queue;
}
