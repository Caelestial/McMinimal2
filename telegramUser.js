function getTelegramUserId() {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
        const userId = window.Telegram.WebApp.initDataUnsafe.user.id;
        return userId;
    } else {
        console.error("Telegram WebApp не ініціалізований або недоступний.");
        return null;
    }
}

    // Після завантаження сторінки
    window.onload = function () {
        const userId = getTelegramUserId();
        if (userId) {
            // Виклик функції в Unity з переданим userId
            SendMessage('GameObjectName', 'UnityFunctionName', userId);
        }
    }