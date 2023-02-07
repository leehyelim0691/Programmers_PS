function solution(k, score) {
    var answer = [];
    var target = [];
    score.map((s, index) => {
        target.push(s);
        target.sort((a,b) => a - b)
        if(target.length > k) target.shift();
        answer.push(target[0]);
    })
    return answer;
}
