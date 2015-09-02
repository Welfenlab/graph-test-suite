
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

describe("isBinaryTree tests", function(){
  it("should recognize one node as a tree", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/one_node.dot","utf8"));
    api.isTree(graph).should.be.true;
  });

  it("should not recognize a directed circle as a tree", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/directed_circle.dot","utf8"));
    api.isBinaryTree(graph).should.be.false;
  });

  it("should not recognize a self loop as a tree", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/directed_self.dot","utf8"));
    api.isBinaryTree(graph).should.be.false;
  });

  it("should recognize a simple directed tree as a tree", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/simple_tree.dot","utf8"));
    api.isBinaryTree(graph).should.be.true;
  });

  it("should recognize a simple undirected tree as a tree", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/simple_undirected_tree.dot","utf8"));
    api.isBinaryTree(graph).should.be.true;
  });

  it("should not recognize an undirected circle as a tree", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/undirected_circle.dot","utf8"));
    api.isBinaryTree(graph).should.be.false;
  });

  it("should not recognize two roots as a tree", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/tworoots.dot","utf8"));
    api.isBinaryTree(graph).should.be.false;
  });

  it("should not recognize a normal tree as a binaryTree", function(){
    graph = dot.read(fs.readFileSync("./test/dot_files/notBinary.dot","utf8"));
    api.isBinaryTree(graph).should.be.false;
  });
});
