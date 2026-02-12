// ============================================
// CONFIGURATION FEEDBACK (MAILTO)
// ============================================
const FEEDBACK_EMAIL = 'zertox5922@gmail.com';

// Form Elements
const feedbackForm = document.getElementById('feedback-form');
const submitBtn = document.getElementById('submit-btn');
const statusMessage = document.getElementById('status-message');

// Form Submission Handler
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const sujet = document.getElementById('sujet').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic Validation
    if (!nom || !prenom || !email || !sujet || !message) {
        showMessage('error', '❌ Veuillez remplir tous les champs.');
        return;
    }

    // Construct Mailto Link
    const subjectEncoded = encodeURIComponent(`[Feedback K-Pop Stan] ${sujet}`);
    const bodyText = `
De: ${prenom} ${nom}
Email: ${email}

Message:
${message}
    `.trim();
    const bodyEncoded = encodeURIComponent(bodyText);

    const mailtoLink = `mailto:${FEEDBACK_EMAIL}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open Default Mail Client
    window.location.href = mailtoLink;

    // Show Success Message
    showMessage('success', '✅ Votre application de messagerie va s\'ouvrir avec le message pré-rempli.');

    // Optional: Reset form
    // feedbackForm.reset();
});

// Show Status Message function
function showMessage(type, text) {
    statusMessage.className = `status-message ${type}`; // 'success' or 'error' defined in CSS
    statusMessage.textContent = text;
    statusMessage.classList.remove('hidden');

    // Auto-hide after 5 seconds
    setTimeout(() => {
        statusMessage.classList.add('hidden');
    }, 5000);
}

// Real-time styling logic
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value && !emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = 'var(--primary-pink)';
        } else {
            emailInput.style.borderColor = 'var(--glass-border)';
        }
    });
}
