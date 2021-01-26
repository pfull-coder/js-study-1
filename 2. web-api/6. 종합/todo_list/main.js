//일정 데이터가 들어 있는 배열 선언
const todos = [
    {
        id: 1,
        text: '할 일 1',
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
    const $divMod = document.createElement('div');

    //divMod태그 작업
    $divMod.classList.add('modify');
    $divMod.innerHTML = `<span class="lnr lnr-undo"></span>`;

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
    $itemLi.appendChild($divMod);
    $itemLi.appendChild($div);

    // console.log($itemLi);
    return $itemLi;
}

//할 일 추가 처리 함수
function insertToDoData() {

    const $todoText = document.getElementById('todo-text');
    //사용자가 입력을 하지 않았을 때 함수를 종료 시켜야함.
    //trim(): 문자열의 앞 뒤 공백을 제거
    if($todoText.value.trim() === '') {
        // alert('필수 입력사항입니다!');
        $todoText.setAttribute('placeholder', '필수 입력사항입니다!');
        $todoText.style.background = 'orangered';
        $todoText.value = '';
        return;
    } else {
        $todoText.setAttribute('placeholder', '할 일을 입력하세요');
        $todoText.removeAttribute('style');
    }


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

//배열 인덱스 탐색 함수(dataId이용)
function findIndexByDataId(dataId) {

    for (let i=0; i < todos.length; i++) {
        let todo = todos[i];
        if (dataId === todo.id) {
            return i;
        }
    }
    return null;
}

//체크 박스 이벤트의 세부처리 수행함수
function changeCheckState($checkbox) {
    //1. label에 클래스 checked를 추가해야한다
    //   이 함수는 label 노드를 가지고 있어야 한다.
    const $label = $checkbox.parentElement;
    $label.classList.toggle('checked');

    //2. 실제로 서버가 있다면 서버에도 체크 상태를 반영시켜야 함.
    //   배열의 done 값을 변경해야 함.
    const $li = $label.parentElement;
    const dataId = +$li.dataset.id;
    // console.log(dataId);

    //3. 배열의 탐색하여 data-id와 일치하는 id프로퍼티를 
    //   가진 객체의 인덱스를 얻어옴.
    const foundIndex = findIndexByDataId(dataId);

    //4. 찾아낸 인덱스로 배열에서 해당 객체 접근한 뒤 done을 수정
    todos[foundIndex].done = !todos[foundIndex].done;

    console.log(todos[foundIndex]);

}

//할 일 삭제 처리 수행 함수
function removeToDoData($delSpan) {
    //1. DOM 요소 삭제
    const $delLi = $delSpan.parentElement.parentElement;
    // console.log($delLi);

    document.querySelector('.todo-list').removeChild($delLi);

    //2. 배열에서도 삭제
    const dataId = +$delLi.dataset.id;
    const foundIndex = findIndexByDataId(dataId);
    if (foundIndex !== null) {
        todos.splice(foundIndex, 1);
    }
    console.log(todos);
}

//수정 이벤트 처리 함수
function modifyToDoText($modSpan) {

    //label의 span을 input으로 교체
    const $label = $modSpan.parentElement.previousElementSibling;
    // console.log($label);

    const $textSpan = $label.lastElementChild;
    // console.log($textSpan);

    const $modInput = document.createElement('input');
    $modInput.setAttribute('type', 'text');
    $modInput.setAttribute('value', $textSpan.textContent);
    $modInput.classList.add('modify-input');
    $label.replaceChild($modInput, $textSpan);
    $modInput.focus();
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

    //할 일 완료 체크 이벤트
    const $todoList = document.querySelector('ul.todo-list');

    $todoList.addEventListener('change', function(e) {
        if (!e.target.matches('.todo-list label.checkbox input[type=checkbox]')) {
            return;
        }
        //console.log('체크박스 이벤트 실행됨!');
        //console.log(e.target.parentElement);
        changeCheckState(e.target);
    });

    //할 일 삭제 이벤트
    $todoList.addEventListener('click', function(e) {
        // console.log(e.target);
        if (!e.target.matches('.todo-list div.remove span')) {
            return;
        }

        removeToDoData(e.target);
    });

    //할 일 수정 이벤트
    $todoList.addEventListener('click', function(e) {
        // console.log(e.target);
        if (!e.target.matches('.todo-list div.modify span')) {
            return;
        }
        // console.log('수정 이벤트 발생!');
        modifyToDoText(e.target);
    });

}());