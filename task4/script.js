document.querySelector('#LinkTextField').addEventListener('click', (event) => {
    event.preventDefault();
    alert('Вы кликнули по ссылке и ничего не произошло');
    const LinkText = prompt('Введите текст для изменения названия ссылки');
    const LinkTextField = document.querySelector('#LinkTextField');
    LinkTextField.textContent = LinkText; 
    console.log('Текст в ссылке изменён на', LinkText);
}) 