function solution(k, m, score) {
    var result = 0;
    score.sort((a, b) => a - b)
    while(score.length >= m){
        const box = score.splice(score.length - m, m);
        result += m * Math.min(...box);
    }
    return result;
}
