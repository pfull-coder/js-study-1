


while (1) {    
    //0~5
    var rn = Math.floor(Math.random() * 6);
    console.log(`랜덤 값: ${rn}`);

    if (rn === 3) {
        console.log('반복문 종료!');
        break;
    }    
}


/*
var total = 0;

while (true) {
    var number = prompt('숫자를 입력하세요.');
    if (number === '그만') {
        break;
    }
    total += +number;
}
alert(`입력한 숫자의 총합: ${total}`);
*/

