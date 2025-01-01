// Находим элементы
const scaryImage = document.getElementById('scaryImage');
const scarySound = document.getElementById('scarySound');

// Функция, которая будет показывать картинку и воспроизводить звук
function showScaryContent() {
    // Показываем страшное изображение
    scaryImage.classList.add('show');
    
    // Воспроизводим звук
    scarySound.play().catch(function(error) {
        console.error("Ошибка при воспроизведении:", error);
    });
}

// Обработчик нажатия клавиши
document.addEventListener('keydown', function(event) {
    // Если нажата клавиша "Q" (код клавиши 81)
    if (event.key === 'q' || event.key === 'Q') {
        showScaryContent();
    }
});
