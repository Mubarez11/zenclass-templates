# 🤖 AI Agent Widget Template

Un widget chatbot moderne, élégant et entièrement personnalisable pour vos sites web.

![AI Agent Widget](https://img.shields.io/badge/Version-1.0.0-purple)
![License](https://img.shields.io/badge/License-MIT-green)
![Pure JS](https://img.shields.io/badge/Dependencies-None-blue)

## ✨ Caractéristiques

- **Design Glassmorphism** - Effet de verre moderne avec blur
- **Animations fluides** - Transitions et micro-interactions
- **100% Personnalisable** - Variables CSS faciles à modifier
- **Responsive** - Adapté mobile, tablette et desktop
- **Léger** - Pur HTML/CSS/JS, aucune dépendance
- **Accessible** - ARIA labels et navigation clavier

## 🚀 Installation

1. Copiez les fichiers dans votre projet :
   - `agent.css`
   - `agent.js`

2. Ajoutez le HTML du widget dans votre page :

```html
<!-- Dans le <head> -->
<link rel="stylesheet" href="agent.css">

<!-- Avant </body> -->
<div class="ai-agent-widget" id="aiAgentWidget">
  <!-- Toggle Button -->
  <button class="agent-toggle" id="agentToggle" title="Assistant IA">
    <svg class="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
    </svg>
    <svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M6 18 18 6M6 6l12 12"/>
    </svg>
    <span class="agent-pulse"></span>
  </button>
  
  <!-- Chat Window -->
  <div class="agent-window" id="agentWindow">
    <!-- Voir index.html pour le code complet -->
  </div>
</div>

<script src="agent.js"></script>
```

## 🎨 Personnalisation

### Variables CSS

Modifiez les couleurs dans `agent.css` :

```css
:root {
    /* Couleurs principales */
    --agent-primary: #667eea;      /* Couleur primaire */
    --agent-secondary: #764ba2;    /* Couleur secondaire */
    --agent-accent: #a855f7;       /* Couleur d'accent */
    
    /* Arrière-plans */
    --agent-bg-dark: #1a1a2e;
    --agent-glass-bg: rgba(15, 15, 35, 0.98);
    
    /* Tailles */
    --agent-window-width: 380px;
    --agent-window-height: 500px;
    --agent-toggle-size: 60px;
}
```

### Réponses du Bot

Personnalisez les réponses dans `agent.js` :

```javascript
const botResponses = {
    services: "Vos services ici...",
    tarifs: "Vos tarifs ici...",
    contact: "Vos coordonnées ici...",
    aide: "Votre message d'aide ici...",
    default: "Message par défaut..."
};
```

## 📁 Structure

```
ai-agent-template/
├── index.html      # Page de démonstration
├── agent.css       # Styles du widget
├── agent.js        # Logique JavaScript
└── README.md       # Documentation
```

## 🔧 Fonctionnalités Avancées

### Mode Clair

Ajoutez la classe `light-mode` au body :

```html
<body class="light-mode">
```

### Auto-ouverture

Décommentez dans `agent.js` :

```javascript
setTimeout(() => {
    if (!widget.classList.contains('open')) {
        toggleWidget();
    }
}, 5000);
```

### Intégration API

Remplacez `getResponse()` par un appel API :

```javascript
async function getResponse(message) {
    const response = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message })
    });
    return response.json();
}
```

## 📝 License

MIT License - Libre d'utilisation pour projets personnels et commerciaux.

## 👨‍💻 Auteur

Créé par **Mohammad Shabana** - Master MALTT, Université de Genève

---

⭐ Si ce template vous a été utile, n'hésitez pas à mettre une étoile sur GitHub !
