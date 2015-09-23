
fs = require 'fs'

module.exports =
  api: ->
    snippets:
      anyGraph: """function(msg,fn){it(msg, function(){
          var any = false;
          graphs.forEach(function(g){
            try {
              fn(g);
              any = true;
            }
            catch(e){}
          });
          if(!any){
            throw msg;
          }
        });}
        """
      isTree: fs.readFileSync __dirname + '/js/isTree.js', "utf8"

      isDirectedTree: fs.readFileSync __dirname + '/js/isDirectedTree.js', "utf8"

      isUndirectedTree: fs.readFileSync __dirname + '/js/isUndirectedTree.js', "utf8"

      root: fs.readFileSync __dirname + '/js/root.js', "utf8"

      height: fs.readFileSync __dirname + '/js/height.js', "utf8"

      preorder: fs.readFileSync __dirname + '/js/preorder.js', "utf8"

      postorder: fs.readFileSync __dirname + '/js/postorder.js', "utf8"

      levelorder: fs.readFileSync __dirname + '/js/levelorder.js', "utf8"

      isBinaryTree: fs.readFileSync __dirname + '/js/isBinaryTree.js', "utf8"

      inorder: fs.readFileSync __dirname + '/js/inorder.js', "utf8"

      isHeap: fs.readFileSync __dirname + '/js/isHeap.js', "utf8"

      isMaxHeap: fs.readFileSync __dirname + '/js/isMaxHeap.js', "utf8"

      isMinHeap: fs.readFileSync __dirname + '/js/isMinHeap.js', "utf8"

      isAlmostCompleteTree: fs.readFileSync __dirname + '/js/isAlmostCompleteTree.js', "utf8"

      depthFirstSearch: fs.readFileSync __dirname + '/js/depthFirstSearch.js', "utf8"

      isSearchTree: fs.readFileSync __dirname + '/js/isSearchTree.js', "utf8"

      breadthFirstSearch: fs.readFileSync __dirname + '/js/breadthFirstSearch.js', "utf8"

      undirectedConnectedComponents: fs.readFileSync __dirname + '/js/undirectedConnectedComponents.js', "utf8"

      directedWeakConnectedComponents: fs.readFileSync __dirname + '/js/directedWeakConnectedComponents.js', "utf8"

      directedStrongConnectedComponents: fs.readFileSync __dirname + '/js/directedStrongConnectedComponents.js', "utf8"
