document.getElementById('generateBtn').addEventListener('click', function() {
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value.replace('#', '');

    if (url.trim() === '') {
        alert('Por favor, insira um URL válido.');
        return;
    }

    const qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = '';

    const qrCodeImg = document.createElement('img');
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=${size}x${size}&color=${color}`;
    qrCodeContainer.appendChild(qrCodeImg);
});
