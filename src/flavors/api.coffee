
module.exports =
  prepare: (code) -> "var anyGraph = it;\n#{code}"
  api: () ->
    internal:
      anyGraph: """function(msg,fn){
          it(msg,function(){
            var any = false;
            graphs.forEach(function(g){
              try {
                fn(g)
                any = true
              }
              catch(e){}
            });
            if(!any)
              throw msg;
          }
        }
        """
