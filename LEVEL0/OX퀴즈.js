function solution(quiz) {
    var answer = quiz.map((item) => {
        var exp = item.split(' ');
        
        if(exp[1]==='+') var result = Number(exp[0]) + Number(exp[2]) 
        else var result = Number(exp[0]) - Number(exp[2]) 
    
        return result === Number(exp[4]) ? "O" : "X" 
    })
    return answer;
}
