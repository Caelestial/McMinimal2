function getTelegramUserId() {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
        const userId = window.Telegram.WebApp.initDataUnsafe.user.id;
        return userId;
    } else {
        console.error("Telegram WebApp не ініціалізований або недоступний.");
        return null;
    }
}