document.getElementById('btnPrint').addEventListener('click', function() {
    let day = parseInt(document.getElementById('inputDay').value);
    let month = parseInt(document.getElementById('inputMonth').value);
    let year = parseInt(document.getElementById('inputYear').value);
    if (isNaN(day) || isNaN(month) || isNaN(year) || month < 1 || month > 12 || day < 1 || day > 31) {
        alert('Vui lòng nhập ngày và tháng hợp lệ!');
        return;
    }
    let dateObj = new Date(year, month - 1, day);
    if (dateObj.getFullYear() !== year || dateObj.getMonth() !== (month - 1) || dateObj.getDate() !== day) {
        alert('Ngày tháng năm không tồn tại trong thực tế!');
        return;
    }
    let dayOfWeekIndex = dateObj.getDay();
    let weekdays = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    let weekdayString = weekdays[dayOfWeekIndex];
    let now = new Date();
    let currentHour = now.getHours();
    let greeting = '';
    if (currentHour >= 4 && currentHour < 11) {
        greeting = 'Chào buổi sáng!';
    } else if (currentHour >= 11 && currentHour < 14) {
        greeting = 'Chào buổi trưa!';
    } else if (currentHour >= 14 && currentHour < 18) {
        greeting = 'Chào buổi chiều!';
    } else {
        greeting = 'Chào buổi tối!';
    }
    document.getElementById('displayYear').innerText = year;
    document.getElementById('displayMonth').innerText = 'Tháng ' + month;
    document.getElementById('displayDay').innerText = day;
    document.getElementById('displayWeekday').innerText = weekdayString;
    document.getElementById('displayGreeting').innerText = greeting;
});