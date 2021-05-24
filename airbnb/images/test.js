function solution(numbers, hand) {
    let answer = '';
    
    let leftHandPosition = [3,0];
    let rightHandPosition = [3,2];

    let pad = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['*',0,'#']
    ];
    
    const findTatgetPosition = number => {
        for (let i=0; i < pad.length i++){
            for(let j=0; j < pad[i].length; j++){
                if(number === pad[i][j]){
                    return [i,j];
                }
            }
        }
    }
    const calcdistance = (handPosition, targetPosition)=>{
        let sum = 0;
        
        for(let i =0; i < handPosition.length; i++){
            sum += Math.abs(handPosition[i])-targetPostion[i];
        }
        return sum;
    }
    for(let num of numbers){
        const targetPosition = findTargetPosition(num);
        
        if([1,4,7].includes(num)){
            leftGandPosition = targetPosition;
            andswer =+ 'L';
            
        }
        else if ([3,6,9].includes(num)){
            rightHandPosition = targetPosition;
            answer += 'R';
        } else{
            if (calcdistance(leftHandPosition, targetPosition)> calcdistance(rightHandPosition,targetPosition)) {
                leftHandPosition = targetPosition;
                answer +='L';
            }else{
                switch(hand){
                        case 'left';
                        leftHandPosition = targetPosition;
                        answer += 'L';
                        break;
                        case 'right';
                        rightHandPosition = targetPosition;
                answer +='R';
                break;
                }
            }
        }
    }
 
    
return answer;}