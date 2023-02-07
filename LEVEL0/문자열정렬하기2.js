function solution(my_string) {
    my_string = my_string.toLowerCase();
    const arr = my_string.split('');
    arr.sort();
    return arr.join('')
}
