function solution(survey, choices) {
    const type = {
        0: 'R',
        1: 'T',
        2: 'C',
        3: 'F',
        4: 'J',
        5: 'M',
        6: 'A',
        7: 'N'
    }
    var score = new Array(8).fill(0);
    var answer = '';
    
    function getKey(index, value){
        const arr = Object.keys(type).filter((item) => type[item] === survey[index].charAt(value));
        return +arr[0];
    }
    
    for(i = 0; i < survey.length; i++){
        if(choices[i] < 4) score[getKey(i, 0)] += (4-choices[i]);
        else if(choices[i] > 4) score[getKey(i, 1)] += (choices[i]-4);
    }

    for(i = 0; i < score.length; i += 2){
        if(score[i] == score[i+1]){
            if(type[i] < type[i+1]) answer += type[i];
            else answer += type[i+1];
        }
        else if(score[i] > score[i+1]) answer += type[i];
        else answer += type[i+1];
    }
        
    return answer;
}
