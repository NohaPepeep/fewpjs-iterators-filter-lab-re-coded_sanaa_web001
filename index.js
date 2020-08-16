// Code your solution here
function finished100(array){
    array.filter(function(item){
        if(item.finishedLessons>100){
            console.log(item.name);
        }
    })
    }