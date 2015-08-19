
module.exports =
  api: ->
    internal:
      anyGraph: """function(msg, fn){
          var any = false;
          graphs.forEach(function(g){
            try {
              fn(g)
              any = true
            }
            catch(e){}
          });
          if(!any)
            throw msg
        }
        """
