function updateClock() {
    let now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let hStr = ('0' + hours).slice(-2);
    let mStr = ('0' + minutes).slice(-2);
    let sStr = ('0' + seconds).slice(-2);
    document.getElementById('h1').src = 'Anh/Bai13/' + hStr.charAt(0) + '.gif';
    document.getElementById('h2').src = 'Anh/Bai13/' + hStr.charAt(1) + '.gif';

    document.getElementById('m1').src = 'Anh/Bai13/' + mStr.charAt(0) + '.gif';
    document.getElementById('m2').src = 'Anh/Bai13/' + mStr.charAt(1) + '.gif';

    document.getElementById('s1').src = 'Anh/Bai13/' + sStr.charAt(0) + '.gif';
    document.getElementById('s2').src = 'Anh/Bai13/' + sStr.charAt(1) + '.gif';
    let greeting = '';
    if (hours >= 4 && hours < 11) {
        greeting = 'Chào buổi sáng!';
    } else if (hours >= 11 && hours < 14) {
        greeting = 'Chào buổi trưa!';
    } else if (hours >= 14 && hours < 18) {
        greeting = 'Chào buổi chiều!';
    } else {
        greeting = 'Chào buổi tối!';
    }

    document.getElementById('displayGreeting').innerText = greeting;
}
updateClock();
setInterval(updateClock, 1000);