function solution(numbers) {
    const num = {
        "zero" : '0',
        "one" : '1',
        "two" : '2',
        "three" : '3',
        "four" : '4',
        "five" : '5',
        'six' : '6',
        'seven' : '7',
        'eight' : '8',
        'nine' : '9',
    }
    
    for(k of Object.keys(num)){
        var regex = new RegExp(k, 'g');
        numbers = numbers.replace(regex, num[k])
    }
    
    return +numbers;
}
