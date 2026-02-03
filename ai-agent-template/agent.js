/**
 * AI Agent Widget - Interactive Chatbot
 * Modern, customizable chatbot template
 * Pure JavaScript - No dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const widget = document.getElementById('aiAgentWidget');
    const toggle = document.getElementById('agentToggle');
    const closeBtn = document.getElementById('agentCloseBtn');
    const messagesContainer = document.getElementById('agentMessages');
    const input = document.getElementById('agentInput');
    const sendBtn = document.getElementById('agentSend');

    // ===== CONFIGURATION =====
    // Customize these responses for your use case
    const botResponses = {
        services: "Nous proposons plusieurs services :<br><br>• <b>Développement Web</b> - Sites et applications<br>• <b>Design UI/UX</b> - Interfaces modernes<br>• <b>Consulting</b> - Stratégie digitale<br>• <b>Formation</b> - Technologies web",
        tarifs: "Nos tarifs dépendent de votre projet :<br><br>• <b>Site vitrine</b> : à partir de 500€<br>• <b>E-commerce</b> : à partir de 1500€<br>• <b>Application web</b> : sur devis<br><br>Contactez-nous pour un devis gratuit !",
        contact: "Vous pouvez nous contacter :<br><br>📧 <b>Email</b> : contact@exemple.com<br>📱 <b>Téléphone</b> : +33 1 23 45 67 89<br>📍 <b>Adresse</b> : Paris, France",
        aide: "Je peux vous aider avec :<br><br>• Informations sur nos services<br>• Demande de devis<br>• Questions techniques<br>• Prise de rendez-vous<br><br>Posez-moi votre question !",
        default: "Je suis là pour vous aider ! Posez-moi une question sur nos services, tarifs ou contactez-nous directement."
    };

    // Additional keywords for smart responses
    const keywords = {
        bonjour: "Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ?",
        salut: "Salut ! Ravi de vous accueillir. Que puis-je faire pour vous ?",
        merci: "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. 😊",
        prix: "Nos tarifs varient selon vos besoins. Cliquez sur 'Tarifs' pour plus d'infos ou demandez un devis gratuit !",
        devis: "Pour un devis personnalisé, envoyez-nous un email à contact@exemple.com avec les détails de votre projet.",
        delai: "Les délais dépendent de la complexité du projet. En général :<br>• Site vitrine : 2-4 semaines<br>• E-commerce : 4-8 semaines",
        rdv: "Pour prendre rendez-vous, contactez-nous par email ou téléphone. Nous serons ravis de discuter de votre projet !",
    };

    // ===== TOGGLE WIDGET =====
    function toggleWidget() {
        widget.classList.toggle('open');
        if (widget.classList.contains('open')) {
            input.focus();
        }
    }

    function closeWidget() {
        widget.classList.remove('open');
    }

    toggle.addEventListener('click', toggleWidget);
    closeBtn.addEventListener('click', closeWidget);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && widget.classList.contains('open')) {
            closeWidget();
        }
    });

    // ===== SEND MESSAGE =====
    function sendMessage(message) {
        if (!message.trim()) return;

        // Add user message
        addMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        const typingIndicator = showTyping();

        // Simulate response delay
        setTimeout(() => {
            typingIndicator.remove();
            const response = getResponse(message);
            addMessage(response, 'bot');
        }, 800 + Math.random() * 700);
    }

    function addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        messageDiv.innerHTML = `<div class="message-content">${content}</div>`;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showTyping() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return typingDiv;
    }

    function getResponse(message) {
        const lowerMsg = message.toLowerCase();

        // Check for suggestion keywords first
        for (const [key, response] of Object.entries(botResponses)) {
            if (lowerMsg.includes(key)) {
                return response;
            }
        }

        // Check for additional keywords
        for (const [key, response] of Object.entries(keywords)) {
            if (lowerMsg.includes(key)) {
                return response;
            }
        }

        return botResponses.default;
    }

    // Event listeners for sending
    sendBtn.addEventListener('click', () => sendMessage(input.value));
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage(input.value);
    });

    // ===== SUGGESTION BUTTONS =====
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.dataset.question;
            const questionMap = {
                services: "Quels sont vos services ?",
                tarifs: "Quels sont vos tarifs ?",
                contact: "Comment vous contacter ?",
                aide: "Comment pouvez-vous m'aider ?"
            };
            sendMessage(questionMap[question] || question);
        });
    });

    // ===== AUTO-OPEN AFTER DELAY (Optional) =====
    // Uncomment to auto-open after 5 seconds
    /*
    setTimeout(() => {
        if (!widget.classList.contains('open')) {
            toggleWidget();
        }
    }, 5000);
    */
});
