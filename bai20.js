const img = document.getElementById('effectImage');

function applyEffect(effectName, buttonElement) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    img.style.filter = 'none';
    img.style.transform = 'none';

    switch (effectName) {
        case 'gray':
            img.style.filter = 'grayscale(1)';
            break;
        case 'xray':
            img.style.filter = 'grayscale(1) invert(1)';
            break;
        case 'invert':
            img.style.filter = 'invert(1)';
            break;
        case 'fliph':
            img.style.transform = 'scaleX(-1)';
            break;
        case 'flipv':
            img.style.transform = 'scaleY(-1)';
            break;
        case 'glow':
            img.style.filter = 'drop-shadow(0 0 10px #ff00de) drop-shadow(0 0 20px #ff00de)';
            break;
        case 'shadow':
            img.style.filter = 'drop-shadow(5px 5px 5px rgba(0,0,0,0.8))';
            break;
        case 'boldshadow':
            img.style.filter = 'drop-shadow(10px 10px 10px rgba(0,0,0,0.9))';
            break;
        case 'dropshadow':
            img.style.filter = 'drop-shadow(4px 8px 12px rgba(255,255,255,0.4))';
            break;
        case 'blur':
            img.style.filter = 'blur(3px)';
            break;
        case 'wave':
            img.style.filter = 'url(#waveFilter)';
            break;
        case 'mask':
            img.style.filter = 'contrast(200%) brightness(150%)';
            break;
        case 'alpha':
            img.style.filter = 'opacity(0.4)';
            break;
        default:
            img.style.filter = 'none';
    }
}