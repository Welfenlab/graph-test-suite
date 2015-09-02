
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
  return eval(evalString);
}

var api = load("./lib/flavors/js");

describe("preorder tests", function(){
  it("should find a as order", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/one_node.dot","utf8"));
    api.postorder(graph).should.deep.equal(["a"]);
  });

  it("should find a, b, c, d as order", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/simple_tree.dot","utf8"));
    api.postorder(graph).should.deep.equal(["b", "d", "c", "a"]);
  });
});
