function solution(my_str, n) {
    var answer = [];
    var start = 0;
    while(start<my_str.length){
        answer.push(my_str.substring(start,start+n));
        start+=n;
    }
    return answer;
}
