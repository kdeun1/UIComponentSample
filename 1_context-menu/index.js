import "./style.css";

const items = document.querySelectorAll('.item');

const onClick = (e) => {
  const targetClassList = e.target.classList;
  // context 내부를 선택하는 경우에는 리턴
  if (targetClassList.contains('context')) return;

  if (targetClassList.contains('item')) {
    // wrapper를 클릭한 경우 (내부에 item이 있는 경우)
    for (let itemEl of items) {
      if (e.target === itemEl) {
        itemEl.classList.toggle('open');
      } else {
        itemEl.classList.remove('open');
      }
    }
  } else {
    // remove className
    for (let itemEl of items) {
      itemEl.classList.remove('open');
    }
  }
}

document.body.addEventListener('click', onClick);

/*
= 방법론
모든 DOM에 addEventListener 붙이게 된다면 이벤트 리스너가 많아지고 메모리가 증가됨
리스너 개수가 DOM 개수만큼 생성되며, DOM이 동적으로 추가되는 경우 리스너도 추가적으로 달아야함
따라서, 상위노드에 리스너를 달도록 한다

= Event
e.stopPropagation() : 버블링을 막기 위한 것. 현재 메소드 내 이벤트 발생 후 다음 동작이 더 상위의 이벤트 동작인 경우에 버블링으로 인해 원하는 동작이
 나타나지 않는 것을 방지한다. 원하는 화면 요소의 이벤트만 신경쓰고 싶을 때 사용한다.
e.preventDefault() : a 태그나 submit 태그 들의 고유의 동작을 중단시킬 때 사용한다.

= Element.classList 란?
Element.classList는 엘리먼트의 클래스 속성의 컬렉션인 DOMTokenList를 반환하는 읽기 전용 속성이다.
클래스 속성이 설정되지 않거나 비어있다면 elementClasses.length는 0을 반환한다.
classList는 읽기 전용 속성이지만, add()와 remove()메소드를 이용하여 변형할 수 있다.

Element.classList.add() : 클래스 명 추가
Element.classList.remove() : 클래스 명 제거, 존재하지 않는 클래스명을 지워도 에러가 나지 않는다.
Element.classList.item() : 콜렉션의 인덱스를 이용하여 클래스 값을 반환한다.
Element.classList.contains() : 클래스 값이 존재하는지 체크한다.
Element.classList.toggle() : 클래스 값을 토글링한다. 클래스 값이 없으면 추가하고, 있으면 제거한다.

 */
