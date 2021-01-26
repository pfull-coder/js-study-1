//일정 데이터가 들어 있는 배열 선언
const todos = [{
        id: 1,
        text: '할 일 1',
        done: true
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];

//새로운 할 일의 id값을 만들어주는 함수
function makeNewId() {
    if (todos.length > 0) {
        const lastIndex = todos.length - 1;
        // console.log(todos[lastIndex].id);
        return todos[lastIndex].id + 1;
    } else {
        return 1;
    }
}

//화면에 추가할 todo-list-item 노드를 생성하는 함수
function makeNewToDoNode(newToDo) {
    const $itemLi = document.createElement('li');
    const $label = document.createElement('label');
    const $div = document.createElement('div');

    //label태그 작업
    $label.classList.add('checkbox');
    $label.innerHTML = `<input type="checkbox"> 
    <span class="text">${newToDo.text}</span>`;

    //div태그 작업
    $div.classList.add('remove');
    $div.innerHTML = `<span class="lnr lnr-cross-circle"></span>`;

    //li태그 작업
    $itemLi.dataset.id = newToDo.id;
    $itemLi.classList.add('todo-list-item');
    $itemLi.appendChild($label);
    $itemLi.appendChild($div);

    // console.log($itemLi);
    return $itemLi;
}

//할 일 추가 처리 함수
function insertToDoData() {

    const $todoText = document.getElementById('todo-text');

    //1. todos 배열에 객체를 셋팅.
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    // console.log(newToDo);

    //2. todos 배열에 해당 객체를 삽입
    todos.push(newToDo);
    //console.log(todos);

    //3. 추가된 데이터를 화면에 렌더링
    const $todoList = document.querySelector('.todo-list');
    $todoList.appendChild(makeNewToDoNode(newToDo));

    //4. 입력 완료 후 잔존 문자열 제거
    $todoText.value = '';
}

//메인 실행 함수
(function () {

    //할 일 추가 이벤트
    const $addBtn = document.getElementById('add');

    $addBtn.addEventListener('click', function (e) {
        e.preventDefault(); //버튼의 서버 전송 기능을 막음.
        //console.log('추가 버튼이 잘 클릭됩니다~');

        insertToDoData();
    });

}());