function solution(A, B) {
    const l = A.length;
    var str=A;
    
    for(i = 1; i <= l; i++){
        str = str[l-1]+str.substr(0,l-1);
        if(str == B) {
            break;
        }
        else if(i==l) {
            i = -1;
            break;
        }
    }
    
    return i%l;
}
