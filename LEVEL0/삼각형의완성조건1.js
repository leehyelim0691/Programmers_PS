function solution(sides) {
    const max = Math.max(...sides);
    var total = sides.reduce((prev, curr) => prev + curr, 0);
    if(total-max > max) return 1; 
    else return 2;
}
