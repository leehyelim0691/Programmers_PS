function solution(my_string) {
    var result = [];
    for(str of my_string){
        if(str.match(new RegExp(/[A-Z]/))) result.push(str.toLowerCase())
        else result.push(str.toUpperCase());
    }
    return result.join('')
}
