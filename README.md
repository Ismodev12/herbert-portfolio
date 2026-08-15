# Portfolio - Herbert · Funnel Builder & Monteur Vidéo IA

Portfolio one-page **React + Vite + Tailwind CSS** (animations Framer Motion).
Design **éditorial chaud** : crème `#F3ECE3` + noir chaud `#100D09` + accent **orange terracotta** `#E0542A`,
sections alternées (sombre / crème). Typographies **Archivo** (titres/UI) + **Fraunces** italique (accents) + **Sacramento** (signature).

## 🚀 Démarrer

```bash
npm install
npm run dev
```

Puis ouvrez http://localhost:5173

## 📸 Ajouter la photo de Herbert

Déposez la photo dans `public/` sous le nom **`herbert.jpg`** :

```
public/herbert.jpg
```

Tant que le fichier n'existe pas, un placeholder « VOTRE PHOTO » s'affiche automatiquement
(dans la Hero et la section À propos). Format conseillé : portrait ~3/4, min. 800×1000 px.

## 🖼️ Visuels des projets

Les vignettes des projets (section Réalisations) sont des **illustrations vectorielles (SVG)
générées sur-mesure** dans `src/components/ProjectCovers.jsx` - une par type :
film produit, tunnel de vente, campagne sociale, tunnel high-ticket, YouTube, VSL.
Elles sont nettes à toute taille et thématisées aux couleurs du site.
Pour utiliser de vraies captures, remplacez `<ProjectCover type=… />` par une `<img />` dans `Work.jsx`.

## 🏗️ Build de production

```bash
npm run build && npm run preview
```

## 🎨 Personnalisation rapide

| Élément            | Fichier |
|--------------------|---------|
| Couleurs / polices | `tailwind.config.js` |
| Textes hero        | `src/components/Hero.jsx` |
| Projets fictifs    | `src/components/Work.jsx` |
| Visuels projets    | `src/components/ProjectCovers.jsx` |
| Services           | `src/components/Services.jsx` |
| Process            | `src/components/Process.jsx` |
| Email / téléphone  | `src/components/Contact.jsx`, `Footer.jsx` |

## 📂 Sections

Hero · Réalisations · Services · À propos · Processus · Contact · Footer
