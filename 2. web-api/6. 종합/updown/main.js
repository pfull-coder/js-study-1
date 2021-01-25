
//게임에 필요한 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null, //사용자가 선택한 숫자
    min: 1,
    max: 100,
    numberOfIcons: 100 //현재 렌더링되어 있는 아이콘의 개수
};

//숫자 아이콘 생성 함수
function makeNumberIcons() {
    const $numbers = document.getElementById('numbers');

    const $frag = document.createDocumentFragment();

    for (let i = gameDatas.min; i <= gameDatas.max; i++) {
        const $icon = document.createElement('div');
        $icon.textContent = i;
        $icon.classList.add('icon');
        $frag.appendChild($icon);
    }
    $numbers.appendChild($frag);
    return $numbers;
}

//아이콘 전체 삭제 함수 정의
function clearNumberIcons() {
    const $numbers = document.getElementById('numbers');
    for(let $icon of [...$numbers.children]) {
        $numbers.removeChild($icon);
    }
}

//정답을 맞췄을 때 처리할 함수 정의
function processCorrectAnswer(eventTarget) {
    console.log('process:', eventTarget);

    const $finishBox = document.getElementById('finish');
    $finishBox.classList.add('show');
    //정답 숫자 아이콘에 id=move 부여
    eventTarget.setAttribute('id', 'move');
}

//정답 체크 함수 정의
function checkAnswer(eventTarget) {

    console.log('checkAnswer:',eventTarget);

    //const secret = gameDatas.secret;
    //const answer = gameDatas.answer;

    //객체 디스트럭쳐링
    const {secret, answer} = gameDatas;

    const $up = document.getElementById('up');
    const $down = document.getElementById('down');

    //정답을 맞춘 경우
    if (secret === answer) {
        processCorrectAnswer(eventTarget);
        return;
    } else if (secret < answer) {
        //DOWN인 경우
        gameDatas.max = answer - 1;
        document.getElementById('end').textContent = answer;
        $down.classList.add('selected');
        $up.classList.remove('selected');
    } else {
        //UP인 경우
        gameDatas.min = answer + 1;
        document.getElementById('begin').textContent = answer;
        $up.classList.add('selected');
        $down.classList.remove('selected');
    }

    //정답 체크 후 아이콘 재배치 처리
    clearNumberIcons(); //현재 아이콘들을 전체 삭제
    makeNumberIcons(); // min, max의 변화대로 재배치

}

//메인 로직을 실행할 즉시실행 함수
(function (){
    const $numbers = makeNumberIcons();
    //실제 정답
    console.log(gameDatas.secret);

    //숫자 아이콘 클릭 이벤트
    $numbers.addEventListener('click', function(e) {

        if (!e.target.matches('div.icon')) {
            return;
        }
        
        // console.log('아이콘이 클릭됨!', e.target.textContent);

        //gameDatas의 answer프로퍼티에 사용자가 선택한 숫자를 저장.
        gameDatas.answer = +e.target.textContent;
        // console.log(gameDatas);

        //정답 체크 함수 호출
        checkAnswer(e.target);
    });
}());