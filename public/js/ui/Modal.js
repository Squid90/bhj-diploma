/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью Modal.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element){
    if(element === undefined) {
      return error;
    } else {
      Modal.element = element;
      Modal.registerEvents(); // Выдает ошибку, что это не функция.
    }
    
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    const dataModal = [...document.querySelectorAll("button[data-dismiss='modal']")];
    dataModal.forEach(e => {
      e.addEventListener('click', function() {
        Modal.onClose(e);
      });
    });
  }

  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose(e) {
    const dataModal = [...document.querySelectorAll("button[data-dismiss='modal']")];
    dataModal.forEach(e => {
      e.addEventListener('click', function() {
        Modal.close();
      });
      e.onclick = function() {
        return false;
      };
    });
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    Modal.element.style.setProperty("display", "block");
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    Modal.element.style.removePropety("display");
  }
}