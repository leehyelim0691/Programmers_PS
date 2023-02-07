function solution(number, limit, power) {
    var result = 0;
    for(n = 1; n <= number; n++){
        var index = 1;
        var num = 0;
        var flag = false;
        
        while(index*index <= n){
            if(n % index === 0) {
                num++;
                if(index * index !== n) num++;
            }
            index++;
            if(num > limit) {
                flag = true;
                break;
            }
        }
        result += flag ? power : num;
    }
    return result
}
