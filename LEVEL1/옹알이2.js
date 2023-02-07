function solution(babbling) {
    var result = 0;
    const words = ['aya', 'ye', 'woo', 'ma'];
    for(b of babbling){
        for(w of words){
            if(b.includes(w.repeat(2))) break;
            else b = b.split(w).join('z');
        }
        if(b.split('z').join('').length == 0) result++;
    }
    return result;
}
