const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const aLert = document.querySelector('#aLert');

aLert.addEventListener('click', () => {
    alert('Служит для вывода текстового сообщения черед диалоговое окно с кнопкой Ок');
})

const prompt = document.querySelector('#prompt');

prompt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})