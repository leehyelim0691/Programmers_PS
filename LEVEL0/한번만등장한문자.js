function solution(s) {	
    var result = [];
    while(s.length > 0){
        const regex = new RegExp(`[${s[0]}]`, 'g');
        if(s.match(regex).filter(item => item !== '').length === 1) result.push(s[0]);
        s = s.split(s[0]).join("");
    }
    return result.sort().join('');
}
