/*function isInArray(arr, el) {
    return arr.includes(el)? true : false;
}

isInArray([1, 2, '3' , 4, `hello`], '3');*/

/*function modifyArr(arr, el, newEl){
   if (arr.includes(el) == false){ 
   return `element ${el} not found in array ${arr}`
        } else { 
   return arr.map( item => (item == el)? item = newEl : item)
        }                           
}

modifyArr([1,2,3,4,5], 6, `hello`);*/

function transformString(str, el, newEl){
    let lowStr=str.toLowerCase();
    let lowEl=el.toLowerCase();
    let lowNewEl=newEl.toLowerCase();
    let firstPart=str.slice(0,lowStr.indexOf(lowEl));
    let thirdPart=str.length-firstPart.length-el.length;
    if (lowStr.indexOf(lowEl) == -1){ 
   return `element ${el} not found in string ${str}`
        } else { 
   return `${str.slice(0,lowStr.indexOf(lowEl))}${newEl} ${str.slice(thirdPart)}`;
        }                           

}
transformString(`my naMe is Alex`,`name`, `coolName`);