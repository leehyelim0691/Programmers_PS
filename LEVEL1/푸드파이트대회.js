function solution(food) {
    var result = '';
    
    for(i = 0; i < food.length; i++)
        if(food[i] >= 2) result += String(i).repeat(+food[i]/2)
    
    return result+'0'+result.split('').reverse().join('') 
}
