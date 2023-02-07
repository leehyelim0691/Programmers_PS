function solution(array, n) {
    var gap = Math.abs(array[0]-n)
    var answer = array[0];
    for(a of array){
        if(Math.abs(a-n) < gap) {
            gap = Math.abs(a-n);
            answer = a;
        }
        else if(Math.abs(a-n) == gap) {
            if(a < answer) answer = a
        }
    }
    return answer;
}
