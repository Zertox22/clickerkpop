// Fonctions de basculement entre connexion et inscription
function switchToSignup() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('active');
}

function switchToLogin() {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
}

// Gestion de la connexion
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Pour l'instant, on simule une connexion réussie
    console.log('Tentative de connexion:', { email, password });

    // Message de succès temporaire
    showMessage('Connexion réussie ! Redirection...', 'success');

    // Redirection vers la page principale après 1.5 secondes
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Gestion de l'inscription
function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;

    // Vérification que les mots de passe correspondent
    if (password !== confirmPassword) {
        showMessage('Les mots de passe ne correspondent pas !', 'error');
        return;
    }

    // Vérification de la longueur du mot de passe
    if (password.length < 6) {
        showMessage('Le mot de passe doit contenir au moins 6 caractères !', 'error');
        return;
    }

    // Pour l'instant, on simule une inscription réussie
    console.log('Tentative d\'inscription:', { username, email, password });

    // Message de succès temporaire
    showMessage('Compte créé avec succès ! Redirection...', 'success');

    // Redirection vers la page principale après 1.5 secondes
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Fonction pour afficher des messages
function showMessage(message, type) {
    // Supprimer les anciens messages
    const oldMessage = document.querySelector('.auth-message');
    if (oldMessage) {
        oldMessage.remove();
    }

    // Créer le nouveau message
    const messageDiv = document.createElement('div');
    messageDiv.className = `auth-message ${type}`;
    messageDiv.textContent = message;

    // Style du message
    messageDiv.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    `;

    if (type === 'success') {
        messageDiv.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        messageDiv.style.color = '#fff';
    } else if (type === 'error') {
        messageDiv.style.background = 'linear-gradient(135deg, #f44336, #da190b)';
        messageDiv.style.color = '#fff';
    }

    document.body.appendChild(messageDiv);

    // Supprimer le message après 3 secondes
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// Ajouter les animations CSS pour les messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
