function solution(num, total) {
    var answer = [];
    var a = total/num+(1-num)/2
    for(i = a; i < a+num; i++){
        answer.push(i);
    }
    return answer;
}
