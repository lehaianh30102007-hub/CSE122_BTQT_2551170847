const themeToggle = document.getElementById('themeToggle');
const bodyElement = document.body;
const statusText = document.getElementById('statusText');
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        bodyElement.classList.add('toi');
        statusText.innerText = 'Đây là giao diện ở chế độ TỐI (đang bật).';
    } else {
        bodyElement.classList.remove('toi');
        statusText.innerText = 'Đây là giao diện ở chế độ SÁNG (đang bật).';
    }
});