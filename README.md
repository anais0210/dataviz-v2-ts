## Dataviz Cinéma – France (React + TypeScript)

Application de datavisualisation pour explorer l’activité cinématographique en France à partir de données publiques, avec un focus initial sur les lieux de tournage à Paris.

### Fonctionnalités

- Pages: Accueil, Analyse, Mentions légales (routing inclus)
- Analyse:
  - Nombre de tournages par année (ligne)
  - Types × Année (aire empilée, top 5 types + "Autres")
  - Répartition par type de tournage (barres)
  - Tournages par arrondissement (barres triées)
  - Top réalisateurs (barres, top 10)
  - Top réalisateur·ices par année (sélecteur d’année + barres)


### Stack

- React + TypeScript (Vite)
- Recharts (graphiques)
- @tanstack/react-query (fetch + cache)
- React Router (routing)
- Zustand (état global – filtres prêts)

### Données et APIs

- Lieux de tournage à Paris (API Opendatasoft v2.1 – pagination):
  - Champs utilisés: `nom_tournage`, `nom_realisateur`, `type_tournage`, `annee_tournage`, `ardt_lieu`, `geo_point_2d`
  - Référence: [Paris Data – v2.1 records](https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records?offset=1000)

### Configuration (variables d’environnement)

Créez un fichier `.env.local` à la racine:

```env
# Pas de configuration requise pour les tournages (Paris Data publique)
```

Notes:
- L’API Opendatasoft v2.1 impose une pagination par `limit` (cap ~100 par page). Le code borne automatiquement `limit` à 100 et boucle sur `offset`.
- En cas d’erreur (400/404), la page Analyse affiche désormais le détail (code + URL appelée) pour faciliter le diagnostic.

### Démarrage

```bash
npm install
npm run dev
```

Build de production:

```bash
npm run build
npm run preview
```

### Structure du projet

```text
src/
  api/
    parisData.ts      # Lieux de tournage (Paris Data v2.1)
  components/
    ChartTitle.tsx
    BarChartGenre.tsx
    LineChartYears.tsx
    StackedAreaTypes.tsx
    DataTableAccessible.tsx
  pages/
    Accueil.tsx
    Analyse.tsx
    MentionsLegales.tsx
  store/
    filters.ts
  utils/
    a11y.ts
```

### Bonnes pratiques (accessibilité & sobriété)

- Cache et requêtes: React Query (staleTime) pour limiter les hits API
- Pagination Opendatasoft: taille de page bornée à 100
- Composants de tableau avec caption/headers pour l’a11y

### Problèmes fréquents

 

### Déploiement

- Vercel / Netlify / GitHub Pages (build: `npm run build`)
- Pensez à déclarer les variables d’environnement côté plateforme

### Licence

Projet pédagogique – données publiques citées en référence.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
