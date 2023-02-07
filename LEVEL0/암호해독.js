function solution(cipher, code) {
    var answer = [];
    for(i = code-1; i < cipher.length; i += code)
        answer.push(cipher.at(i))
    return answer.join('');
}
