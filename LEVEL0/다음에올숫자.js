function solution(common) {
    var answer = 0;
    var last = common[common.length-1];
    var sub = common[1]-common[0];
    var div = common[0]!==0 && common[1]/common[0] ;

    if(common[2]-common[1]===sub) answer= last+sub;
    else answer=last*div;
    return answer;
}
