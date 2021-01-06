

console.log(10 / 2);
console.log(5 / 2);
console.log(10 % 4);
console.log(4 % 10);

var number = 3;
console.log(number ** 3 ** 2); //ES7문법 거듭제곱 연산자
console.log(Math.pow(number, 3)); // ES7 이전

// Math.pow(Math.pow(number, 3), 2);

//단항 산술 연산자 ++, --
console.log('==============================');

var x = 3;
x++;
x++;
x--;
console.log(`x: ${x}`);

//전위(prefix)연산, 후위(postfix)연산
console.log('================================');

var a = 10, result;

//후위연산은 선할당 후연산
result = a++;
console.log(`result: ${result}, a: ${a}`); // 10, 11

//전위연산은 선연산 후할당
result = ++a;
console.log(`result: ${result}, a: ${a}`); // 12, 12


result = a--;
console.log(`result: ${result}, a: ${a}`); // 12, 11

result = --a;
console.log(`result: ${result}, a: ${a}`); // 10, 10
