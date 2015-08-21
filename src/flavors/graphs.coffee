
dot = require 'graphlib-dot'
_ = require 'lodash'


module.exports =
  prepare: (code, runner, elem, tokens) ->
    graphArray = _(tokens).chain()
      .filter "info": "dot"
      .pluck "content"
      .map dot.read
      .map JSON.stringify
      .value()
    graphCode = graphArray.join ","

    "graphs = [#{graphCode}];\n" + code
