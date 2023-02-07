function solution(n, numlist) {
    return numlist.filter(item => {
        return item % n == 0 && item;
    });
}
