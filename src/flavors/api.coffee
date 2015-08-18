
module.exports = 
  api: ->
    anyGraph: (msg, fn) ->
      any = false;
      graphs.forEach (g) ->
        try
          fn g
          any = true
        catch e
      
      if !any
        throw msg
