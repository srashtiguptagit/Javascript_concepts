function getDaata() {

var visitedElements = [];
  var counter = 0;
  visitedElements.push(arr[0]);
  for (let i = 1; i<=arr.length; i++) {
   
    if(visitedElements.includes(arr[i])){
      counter+= 1;
      var elementToRemove = visitedElements.indexOf(arr[i]);
      visitedElements = visitedElements.slice(0, elementToRemove );
      for(let key in visitedElements){
      }
    }
    else {
      visitedElements.push(arr[i]);
      
    }
  }
  
    console.log(counter);
}