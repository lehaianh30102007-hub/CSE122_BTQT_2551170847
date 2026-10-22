const form = document.getElementById('registerForm');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = checkInputs();
    if (isValid) {
        alert('Đăng ký tài khoản thành công!');
        form.reset(); // Làm sạch ô nhập
        clearValidationState();
    }
});
fullname.addEventListener('input', checkFullname);
email.addEventListener('input', checkEmail);
password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input', checkConfirmPassword);
function checkInputs() {
    let isFullnameValid = checkFullname();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
    let isConfirmValid = checkConfirmPassword();

    return isFullnameValid && isEmailValid && isPasswordValid && isConfirmValid;
}
function checkFullname() {
    const val = fullname.value.trim();
    if (val === '') {
        setError(fullname, '✗ Họ và tên không được để trống');
        return false;
    } else {
        setSuccess(fullname, '✓ Hợp lệ');
        return true;
    }
}
function checkEmail() {
    const val = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (val === '') {
        setError(email, '✗ Email không được để trống');
        return false;
    } else if (!emailRegex.test(val)) {
        if (!val.includes('@')) {
            setError(email, '✗ Email không hợp lệ (thiếu ký tự @)');
        } else if (!val.split('@')[1] || !val.split('@')[1].includes('.')) {
            setError(email, '✗ Email không hợp lệ (thiếu tên miền)');
        } else {
            setError(email, '✗ Định dạng Email không hợp lệ');
        }
        return false;
    } else {
        setSuccess(email, '✓ Hợp lệ');
        return true;
    }
}

function checkPassword() {
    const val = password.value.trim();
    if (val === '') {
        setError(password, '✗ Mật khẩu không được để trống');
        return false;
    } else if (val.length < 6) {
        setError(password, '✗ Mật khẩu phải có ít nhất 6 ký tự');
        return false;
    } else {
        setSuccess(password, '✓ Hợp lệ');
        return true;
    }
}
function checkConfirmPassword() {
    const confirmVal = confirmPassword.value.trim();
    const passVal = password.value.trim();

    if (confirmVal === '') {
        setError(confirmPassword, '✗ Xác nhận mật khẩu không được để trống');
        return false;
    } else if (confirmVal !== passVal) {
        setError(confirmPassword, '✗ Mật khẩu xác nhận không khớp');
        return false;
    } else {
        setSuccess(confirmPassword, '✓ Hợp lệ');
        return true;
    }
}

function setError(inputElement, message) {
    const formGroup = inputElement.parentElement;
    formGroup.className = 'form-group error';
    const msgBox = formGroup.querySelector('.msg-box');
    msgBox.innerText = message;
}

function setSuccess(inputElement, message) {
    const formGroup = inputElement.parentElement;
    formGroup.className = 'form-group success';
    const msgBox = formGroup.querySelector('.msg-box');
    msgBox.innerText = message;
}
function clearValidationState() {
    const groups = document.querySelectorAll('.form-group');
    groups.forEach(group => {
        group.className = 'form-group';
        group.querySelector('.msg-box').innerText = '';
    });
}