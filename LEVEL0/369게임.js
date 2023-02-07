function solution(order) {
    order = order+"";
    var length = order.length;
    var game = ['3', '6', '9'];
    for(g of game){
        order = order.split(g).join('');
    }
    return length - order.length;
}
