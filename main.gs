
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
      thisElementsStyleElement = thisElementsStyle[1].replace('"',"'");  // make sure only single quotes surround http url's
      thisElementsStyleObj[thisElementsStyleProperty] = thisElementsStyleElement;
    }
    cssAsObj[thisProperty] = thisElementsStyleObj;
  }
  return cssAsObj;
}


function objToCss(obj){
//  obj = {"body":{"background-image":"url('http://www.lifestylestone.com/wp-content/uploads/2012/12/Slate-Slab-Blue-Grey.jpg')","background-color":"#ffffff"},".block":{"color":"#ff0000","background-color":"#000000"}};
  var objAsCss='';
  
  for (i in obj){
    var elementString = '';
    for (j in obj[i]){
      elementString += j + ":" + obj[i][j] + ";";
    }
    objAsCss += i +'{'+ elementString + "}";
  }
  return objAsCss;
};
