function(g) {
  var keys = Object.keys(g._nodes);
  var breadthFirst = {};

  var count = 0;
  var breadth;
  for(var i=0; i<keys.length; i++){
    breadth = breadthFirstSearch(g, keys[i]);
    breadth = breadth.sort();
    if(breadthFirst[breadth] != 1) {
      breadthFirst[breadth] = 1;
      count++;
    }
  }
  return count;
}
