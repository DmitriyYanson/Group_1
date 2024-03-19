console.log('Hello World!');

function generatePassword() {
    // Допустимые символы для генерации пароля
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";

    // Длина пароля
    const length = 12;

    let password = "";
    for (let i = 0; i < length; i++) {
      // Выбираем случайный символ из chars и добавляем его к паролю
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    // Отображаем сгенерированный пароль на странице
    document.getElementById("password").textContent = password;
  }