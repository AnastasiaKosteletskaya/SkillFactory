document.addEventListener('DOMContentLoaded', () => {
    const wsUrl = 'wss://echo-ws-service.herokuapp.com';
    const socket = new WebSocket(wsUrl);

    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const geoButton = document.getElementById('geoButton');
    const chatWindow = document.getElementById('chatWindow');

    function addMessageToChat(message, sender = false, isGeo = false) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        if (sender) messageElement.classList.add('sender');
        if (isGeo) messageElement.classList.add('geo');
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message) {
            socket.send(message);
            addMessageToChat(message, true);
            messageInput.value = '';
        }
    });

    geoButton.addEventListener('click', () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const geoMessage = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=18/${latitude}/${longitude}`;
                addMessageToChat(geoMessage, true, true);
            });
        } else {
            alert('Геолокация недоступна');
        }
    });

    socket.onmessage = (event) => {
        addMessageToChat(event.data);
    };

    socket.onerror = (error) => {
        console.error('WebSocket Error:', error);
    };
});
