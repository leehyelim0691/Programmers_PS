function solution(n) {
    const arr = String(n).split('');
    return arr.reduce(function(sum, curr){
        return +sum + +curr
    },0);
}
