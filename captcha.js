  const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let currentCaptcha = '';

  // Güvenli rastgele sayı üretimi (0..max-1)
  function secureRandomInt(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }

  // Uzunluk 4 veya 5 (rastgele)
  function randomLength() {
    return (secureRandomInt(2) === 0) ? 4 : 5;
  }

  // Captcha üret
  function generateCaptcha() {
    const len = randomLength();
    let s = '';
    for (let i = 0; i < len; i++) {
      s += CHARSET.charAt(secureRandomInt(CHARSET.length));
    }
    currentCaptcha = s;
    // Görsel gösterim: harfleri aralıklı göstermeyi tercih ettim
    document.getElementById('captchaBox').textContent = s.split('').join(' ');
    document.getElementById('captchaInput').value = '';
  }

  // İlk captcha üretimi
  generateCaptcha();
