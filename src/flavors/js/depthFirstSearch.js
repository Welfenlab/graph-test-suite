function(g, node) {

  var stack = [node];
  var depthFirst = [];
  var visited = [];
  while(stack.length != 0){
    depthFirst = depthFirst.concat(stack.splice(stack.length-1, 1));
    if(visited[depthFirst[depthFirst.length - 1]] == 1) {
      stack.splice(depthFirst.length - 1, 1);
    } else {
      visited[depthFirst[depthFirst.length - 1]] = 1;
      var children = Object.keys(g._out[depthFirst[depthFirst.length-1]]);
      var inChildren = Object.keys(g._in[depthFirst[depthFirst.length-1]]);
      var wholeChildren = [];
      for(var j=children.length - 1; j>=0; j--) {
        wholeChildren = wholeChildren.concat([g._edgeObjs[children[j]].w]);
      }
      for(var i=inChildren.length - 1; i>=0; i--) {
        wholeChildren = wholeChildren.concat([g._edgeObjs[inChildren[i]].v]);
      }
      wholeChildren.sort().reverse();
      stack = stack.concat(wholeChildren);
    }
  }
  return depthFirst;
}
