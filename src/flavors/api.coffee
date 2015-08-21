
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
