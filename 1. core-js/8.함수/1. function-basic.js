//함수 정의
function calculateTotal(x) {
    console.log('함수 실행!');
    var total = 0;
    for (var n = 1; n <= x; n++) {
        total += n;
    }
    return total;
}

console.log('안녕하세요!');

//함수 호출
var result = calculateTotal(100);
console.log(result);

console.log(calculateTotal(50));


//함수 리터럴
var add = function (x, y) {
    return x + y;
};

/*
function add(x, y) {
    return x + y;
}
*/
console.log(add(10, 20));
console.log(add(100, 200));
console.log(add(-10, -20));

console.log('========================');

//함수를 변수에 할당가능
var ct = calculateTotal;

console.log(ct(10));
console.log(ct(100));
console.log(ct(20));