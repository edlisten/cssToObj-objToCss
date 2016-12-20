function cssToObj(css){
//    css = 'body{background-image:url("http://www.lifestylestone.com/wp-content/uploads/2012/12/Slate-Slab-Blue-Grey.jpg");background-color:#ffffff}.block{color:#ff0000;background-color:#000000}';
//    css = 'body{background-image:url("http://www.lifestylestone.com/wp-content/uploads/2012/12/Slate-Slab-Blue-Grey.jpg");background-color:#ffffff;}.block{color:#ff0000;background-color:#000000;}';
  var cssAsArray,thisStyle,thisProperty,thisElements,thisElementsObj,cssAsObj,thisElementsStyle,thisElementsStyleProperty,thisElementsStyleElement,thisElementsStyleObj;
  cssAsObj ={};
  thisElementsObj ={};
  thisElementsStyleObj ={};
  
  css = css.replace(/\s+/g, '');
  cssAsArray = css.split("}").filter(function(e){return e}); //Convert CSS to an Array and filter out empty arrays.
//  cssAsArray.pop(); //Remove the last element which is empty
//  cssAsArray = cssAsArray.filter(function(e){return e});  //Remove's empty elements from the array
  
  for (i in cssAsArray){
    thisStyle = cssAsArray[i].split("{").filter(function(e){return e});
    thisProperty = thisStyle[0];
    thisElements = thisStyle[1].split(';').filter(function(e){return e});
    thisElementsStyleObj = {};
    
    for (j in thisElements){
//      thisElementsStyle = thisElements[j].split(':');
      thisElementsStyle = thisElements[j].split(/:(?!\/\/)/g).filter(function(e){return e}); // split elements except if they are part of :// like in http://
      thisElementsStyleProperty = thisElementsStyle[0];
      thisElementsStyleElement = thisElementsStyle[1].replace(/"/g,"'");  // make sure only single quotes surround http url's
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


function hexToRGBA(color){
//  color = ["#b53e3e", "1"];
  var hex = color[0];
  var r = '0x' + hex[1] + hex[2] | 0;
  var g = '0x' + hex[3] + hex[4] | 0;
  var b = '0x' + hex[5] + hex[6] | 0;
  var a = color[1];
  var rgba = "rgba("+r+","+g+","+b+","+a+")";
  return rgba;
}

function rgbaToHex(rgba){
  rgba = 'rgba(226,43,43,.5)';
  var rgb = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d*)?|\.\d+)[\s+]?/i);
  var hex = (rgb && rgb.length === 6) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  var a = rgb[4];
  var color = [hex,a];
  return color;
}

