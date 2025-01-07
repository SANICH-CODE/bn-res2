document.getElementById('authLink').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке

    const code = prompt('Содержимое защищено, введите код доступа!');
    const messageDiv = document.getElementById('message');

    if (code === null) {
        messageDiv.textContent = 'Действие отменено';
    } else if (code === 'sn2009sn') {
        window.location.href = './user_000666/'; // Переадресация
    } else {
        messageDiv.textContent = 'Неверный код';
    }
});
