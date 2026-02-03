// ============================================
// CONFIGURATION EMAILJS
// ============================================
// IMPORTANT: Remplacez ces valeurs par vos propres identifiants EmailJS
// 1. Allez sur https://dashboard.emailjs.com/admin
// 2. Copiez votre "Public Key" depuis Account > General
// 3. Copiez votre "Service ID" depuis Email Services
// 4. Copiez votre "Template ID" depuis Email Templates

const EMAILJS_CONFIG = {
    publicKey: 'VOTRE_PUBLIC_KEY_ICI',      // Ex: 'user_abc123xyz'
    serviceId: 'VOTRE_SERVICE_ID_ICI',      // Ex: 'service_gmail'
    templateId: 'VOTRE_TEMPLATE_ID_ICI'     // Ex: 'template_feedback'
};

// ============================================
// INSTRUCTIONS POUR CRÉER LE TEMPLATE EMAILJS
// ============================================
// Dans votre template EmailJS, utilisez ces variables:
// - {{from_name}}      : Nom de l'utilisateur
// - {{from_surname}}   : Prénom de l'utilisateur
// - {{from_email}}     : Email de l'utilisateur
// - {{subject}}        : Sujet du message
// - {{message}}        : Contenu du message
//
// Exemple de template:
// Subject: Nouveau Feedback - {{subject}}
// Body:
// Nouveau message de feedback reçu !
//
// De: {{from_name}} {{from_surname}}
// Email: {{from_email}}
// Sujet: {{subject}}
//
// Message:
// {{message}}
// ============================================

// Initialize EmailJS
(function () {
    // Vérifier si la configuration est complète
    if (EMAILJS_CONFIG.publicKey.includes('VOTRE_')) {
        console.warn('⚠️ EmailJS n\'est pas encore configuré. Veuillez remplir les identifiants dans feedback-script.js');
    } else {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        console.log('✅ EmailJS initialisé avec succès');
    }
})();

// Form Elements
const feedbackForm = document.getElementById('feedback-form');
const submitBtn = document.getElementById('submit-btn');
const statusMessage = document.getElementById('status-message');

// Form Submission Handler
feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Vérifier la configuration
    if (EMAILJS_CONFIG.publicKey.includes('VOTRE_')) {
        showMessage('error', '❌ EmailJS n\'est pas configuré. Veuillez contacter l\'administrateur.');
        return;
    }

    // Get form values
    const formData = {
        from_name: document.getElementById('nom').value.trim(),
        from_surname: document.getElementById('prenom').value.trim(),
        from_email: document.getElementById('email').value.trim(),
        subject: document.getElementById('sujet').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // Validate all fields
    if (!validateForm(formData)) {
        showMessage('error', '❌ Veuillez remplir tous les champs correctement.');
        return;
    }

    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Envoi en cours...';

    try {
        // Send email via EmailJS
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            formData
        );

        console.log('✅ Email envoyé avec succès:', response);

        // Show success message
        showMessage('success', '✅ Message envoyé avec succès ! Merci pour votre feedback.');

        // Reset form
        feedbackForm.reset();

        // Optional: Redirect after 3 seconds
        setTimeout(() => {
            // window.location.href = 'index.html';
        }, 3000);

    } catch (error) {
        console.error('❌ Erreur lors de l\'envoi:', error);

        let errorMsg = '❌ Une erreur est survenue. Veuillez réessayer.';

        // Provide more specific error messages
        if (error.text) {
            if (error.text.includes('Invalid')) {
                errorMsg = '❌ Configuration EmailJS invalide. Vérifiez vos identifiants.';
            } else if (error.text.includes('network')) {
                errorMsg = '❌ Erreur de connexion. Vérifiez votre connexion internet.';
            }
        }

        showMessage('error', errorMsg);
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').textContent = 'Envoyer';
    }
});

// Validation Function
function validateForm(data) {
    // Check if all fields are filled
    if (!data.from_name || !data.from_surname || !data.from_email || !data.subject || !data.message) {
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.from_email)) {
        showMessage('error', '❌ Veuillez entrer une adresse email valide.');
        return false;
    }

    // Check minimum message length
    if (data.message.length < 10) {
        showMessage('error', '❌ Le message doit contenir au moins 10 caractères.');
        return false;
    }

    return true;
}

// Show Status Message
function showMessage(type, text) {
    statusMessage.className = `status-message ${type}`;
    statusMessage.textContent = text;

    // Auto-hide after 5 seconds
    setTimeout(() => {
        statusMessage.classList.add('hidden');
    }, 5000);
}

// Real-time validation feedback
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value && !emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = 'var(--primary-pink)';
    } else {
        emailInput.style.borderColor = 'var(--glass-border)';
    }
});

// Character counter for message (optional enhancement)
const messageInput = document.getElementById('message');
messageInput.addEventListener('input', () => {
    const length = messageInput.value.length;
    if (length > 0 && length < 10) {
        messageInput.style.borderColor = 'orange';
    } else if (length >= 10) {
        messageInput.style.borderColor = 'var(--accent-cyan)';
    } else {
        messageInput.style.borderColor = 'var(--glass-border)';
    }
});
