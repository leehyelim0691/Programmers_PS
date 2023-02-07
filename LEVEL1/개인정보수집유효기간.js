function solution(today, terms, privacies) {
    var result = [];
    
    function getTerm(s){
      return Number(terms.filter((item, index) => {
            return item[0]===s 
        })[0].split(' ')[1])
    }
    
    for(i = 0; i < privacies.length; i++){
        var date = new Date(privacies[i].split(' ')[0]);
        date.setMonth(date.getMonth() + getTerm(privacies[i].split(' ')[1]));
        if(new Date(today) >= date) result.push(i+1)
    }
    
    return result;
}
