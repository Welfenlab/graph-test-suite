
var chai = require("chai");
chai.should()

var dot = require("graphlib-dot");
var fs = require("fs");

var load = function(js_path){
  var path = require("path");
  var files = fs.readdirSync(js_path);
  evalString = "var api = {};";
  var funDefs = "";
  files.forEach(function(f) {
    var varName = path.basename(f,".js");
    var filePath = path.join(js_path, f);
    evalString += "var " + varName +";";
    funDefs += varName + "=" + fs.readFileSync(filePath,"utf8") + ";api[\""+varName+"\"]="+varName+";";
  });
  evalString += funDefs + "api;"
  console.log(evalString);
  return eval(evalString);
}

var api = load("./lib/flavors/js");

describe("Tree tests", function(){
  it("should recognize one node as a tree", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/one_node.dot","utf8"));
    
    api.isTree(graph).should.be.true;
  });
});
