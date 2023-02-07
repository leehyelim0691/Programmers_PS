function solution(X, Y) {
    var xCount = new Array(10).fill(0);
    var yCount = new Array(10).fill(0);
    var answer = [];
    
    for(x of X)
        xCount[+x] ++;
    for(y of Y)
        yCount[+y] ++;

    for(i = 0; i < 10; i++){
        if(xCount[i] != 0 && yCount[i] != 0){
            for(j = 0; j < Math.min(xCount[i], yCount[i]); j++)
                answer.push(i);
        }
    }
    
    answer = answer.sort().reverse();
    if(answer.length == 0) return '-1';
    else if(answer[0] == '0') return '0';
    else return answer.join('')
}
