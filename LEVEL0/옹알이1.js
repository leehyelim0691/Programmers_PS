function solution(babbling) {
    const words =["aya","ye","woo","ma"];
    var result = 0;

    babbling.map((b,index) => {
        var include_words = words.filter((word,idx) => {
            return b.includes(word) && word
        });

        if(include_words.join('').length === b.length) result = result+1;
    });

    return result;
}
