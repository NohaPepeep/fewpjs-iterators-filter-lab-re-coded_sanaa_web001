// Code your solution here
function findMatching(array,str){
  const newArr=[];
    array.filter(function(item){
        if(item.toLowerCase()===str.toLowerCase()){
          newArr.push(item);
        }
    })
    return newArr;
    }