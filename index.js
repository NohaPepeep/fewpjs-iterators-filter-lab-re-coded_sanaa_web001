// Code your solution here
function findMatching(array,str){
    array.filter(function(item){
        if(item.finishedLessons>100){
            console.log(item.name);
        }
    })
    }