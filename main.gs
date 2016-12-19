
function cssToObj(css){
  //  CSS = 'body {background-color:rgb(255, 255, 255)}.block {color:rgb(0, 0, 0);background-color:rgb(147, 147, 147)}';
  var cssAsArray,thisStyle,thisProperty,thisElements,thisElementsObj,cssAsObj,thisElementsStyle,thisElementsStyleProperty,thisElementsStyleElement,thisElementsStyleObj;
  cssAsObj ={};
  thisElementsObj ={};
  thisElementsStyleObj ={};
  
  css = css.replace(/\s+/g, '');
  cssAsArray = css.split("}");//Convert CSS to an Array
  cssAsArray.pop(); //Remove the last element which is empty
  
  for (i in cssAsArray){
    thisStyle = cssAsArray[i].split("{");
    thisProperty = thisStyle[0];
    thisElements = thisStyle[1].split(';');
    thisElementsStyleObj = {};
    
    for (j in thisElements){
      thisElementsStyle = thisElements[j].split(/:(?!\/\/)/g); // split elements except if they are part of :// like in http://
      thisElementsStyleProperty = thisElementsStyle[0];
      thisElementsStyleElement = thisElementsStyle[1];
      thisElementsStyleObj[thisElementsStyleProperty] = thisElementsStyleElement;
    }
    cssAsObj[thisProperty] = thisElementsStyleObj;
  }
  return cssAsObj;
}


function objToCss(obj){
//  obj = {"body":{"background-color":"rgb(255, 255, 255)"},".block":{"color":"rgb(0, 0, 0)","background-color":"rgb(147, 147, 147)"}};
  var objAsCss='';
  
  for (i in obj){
    objAsCss += i + JSON.stringify(obj[i]);
  }
  return objAsCss;
};
