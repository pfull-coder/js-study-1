

//splice() : 배열의 특정 요소 제거

var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

//foods 배열에서 1번 인덱스부터 2개를 제거
//splice는 삭제한 요소들을 다시 배열로 저장시킬 수 있습니다.
var delFoods = foods.splice(1, 2);
console.log(foods);
console.log(delFoods);

//삭제하고 그 위치에 '치킨'을 삽입
foods.splice(0, 1, '치킨', '피자');
console.log(foods);

//2번인덱스자리에서 아무것도 삭제하지 않고 그 자리에 '파스타'를 삽입
foods.splice(2, 0, '파스타');
console.log(foods);

//2번 인덱스부터 끝까지 전체 삭제
foods.splice(2);
console.log(foods);

//특정 요소를 탐색하여 삭제
console.log('=====================================');

foods.push('보쌈');
foods.push('닭발');

console.log(foods);

//사용자의 삭제요구데이터
var input = '보쌈';

if (foods.includes(input)) {
    var targetIndex = foods.indexOf(input);
    foods.splice(targetIndex, 1);
    console.log(`${input} 삭제 완료!`);
} else {
    console.log(`${input}: 데이터가 존재하지 않습니다.`);
}
console.log(foods);



