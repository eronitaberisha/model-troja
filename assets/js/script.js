function toggleChat() {
    var chatbox = document.getElementById('chatbox');
    var chatIcon = document.querySelector('.chat-icon');

    if (chatbox.style.display === 'none') {
        // If the chatbox is hidden
        chatbox.style.display = 'block';
        chatIcon.style.backgroundColor = '#ccc'; // Change color to indicate open state
    } else {
        // If the chatbox is visible
        chatbox.style.display = 'none';
        chatIcon.style.backgroundColor = '#007bff'; // Change color to indicate closed state
    }
}

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageContainer = document.getElementById('message-container');

    var messageText = messageInput.value;
    if (messageText.trim() === '') {
        return;
    }

    // Display the user's message in the chat
    messageContainer.innerHTML += '<p class="mb-2"><strong>You:</strong> ' + messageText + '</p>';

    // Send the message to Facebook (implement your Facebook Messenger API logic here)

    // Clear the input field
    messageInput.value = '';
}
