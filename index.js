// Code your solution here
function findMatching(array,str){
  const newArr=[];
    array.filter(function(item){
        if(item===str){
          newArr.push(item);
        }
        return newArr;
    })
    }