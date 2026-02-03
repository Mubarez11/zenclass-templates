# ZenClass 3D Skills Cube

Un composant CSS/JavaScript interactif pour afficher vos compétences de manière originale avec un cube 3D rotatif.

## ✨ Fonctionnalités

- 🎲 **Cube 3D pur CSS** - Pas de librairie externe nécessaire
- 🖱️ **Interactif** - Cliquez sur les faces ou utilisez les boutons
- 🔄 **Auto-rotation** - Mode carrousel automatique
- 🌓 **Mode sombre/clair** - Thème adaptable
- 📱 **Responsive** - Fonctionne sur mobile
- 🎨 **Personnalisable** - Couleurs via variables CSS

## 📁 Fichiers

```
cube-template/
├── index.html    # Page de démonstration
├── cube.css      # Styles du composant
├── cube.js       # Logique JavaScript
└── README.md     # Documentation
```

## 🚀 Intégration rapide

### 1. Copiez les fichiers CSS et JS dans votre projet

### 2. Ajoutez le HTML du cube dans votre page

```html
<section class="skills-section">
  <div class="skills-layout">
    <div class="skills-cube-side">
      <!-- Cube 3D -->
      <div class="cube-container">
        <div class="cube-scene">
          <div class="skills-cube" id="skillsCube">
            <!-- Vos faces ici -->
          </div>
        </div>
      </div>
      <!-- Contrôles -->
      <div class="cube-controls">
        <!-- Vos boutons ici -->
      </div>
    </div>
    
    <!-- Panel des compétences -->
    <div class="skill-details" id="skillDetails">
      <!-- Vos catégories ici -->
    </div>
  </div>
</section>
```

### 3. Personnalisez les couleurs

```css
:root {
    --violet-accent: #a855f7;
    --cyan-accent: #22d3ee;
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🎨 Personnalisation des faces

Chaque face a sa propre couleur de gradient :

```css
.cube-front { 
    background: linear-gradient(145deg, rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.6));
}
```

## ⚙️ Configuration JavaScript

Modifiez le mapping des faces vers les catégories :

```javascript
const faceToCategory = {
    front: 'frontend',
    back: 'backend',
    right: 'design',
    left: 'tools',
    top: 'languages',
    bottom: 'soft'
};
```

## 📧 Contact

Créé par **Mohammad Shabana**
- GitHub: [@Mubarez11](https://github.com/Mubarez11)
- Portfolio: [ZenClass](https://tecfaetu.unige.ch/etu-maltt/freya/mohamsa1/)

---
**Licence:** MIT - Libre d'utilisation et de modification 🎉
