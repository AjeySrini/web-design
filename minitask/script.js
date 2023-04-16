function labelcreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
    }
    
    
   
    function inputele(tagname,attrname,attrvalue){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
        return ele;
    }
var text1=labelcreate("label","for","text","Type Text here");


var textarea=inputele("textarea","id","text");


textarea.addEventListener("input", function() {
  const text = textarea.value;
  console.log(text.length);
  
});
document.body.append(text1,textarea);