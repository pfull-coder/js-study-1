
//랜덤값(난수) 생성 함수
//Math.random();  ->   0.0 이상 1.0미만의 랜덤값 생성.

var randomNumber = Math.random();
// console.log(`랜덤값: ${randomNumber}`);

if (randomNumber > 0.66) {
    console.log('오늘의 추천음식: 짜장면');
} else if (randomNumber > 0.33) {
    console.log('오늘의 추천음식: 감자탕');
} else {
    console.log('오늘의 추천음식: 김밥');
}

//Math.floor() : 내림값, Math.ceil()  : 올림값,  Math.round() : 반올림값
console.log('=========================================');

console.log(Math.floor(3.3));
console.log(Math.ceil(3.3));
console.log(Math.round(3.3));

//0이상 10미만의 랜덤 정수 만들기
var randomInt = Math.floor(Math.random() * 10);

console.log(`랜덤 정수: ${randomInt}`);

// 11 ~ 38미만
var randomInt2 = Math.floor(Math.random() * 27) + 11;

/*
   # x ~ y (이상 미만개념)의 랜덤 정수 생성 공식

   - Math.floor(Math.random() * (y - x)) + x;  
*/

// 1 ~ 45 
var lottoNum = Math.floor(Math.random() * 45) + 1;
console.log(`랜덤 로또번호: ${lottoNum}`);