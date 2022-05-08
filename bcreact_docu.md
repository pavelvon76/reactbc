
# Jak instalovat React v prostředí Visual studio Code:

## Fáze I: Setup celé instalace
1. Instalace NodeJs 
https://nodejs.org/en/download/
nodeJs je balík se kterým se nainstaluje další potřebný sw jako npm, npx

1. Založení app ve svém projektu
Jak založit apku ve VSC:
https://code.visualstudio.com/docs/nodejs/reactjs-tutorial 
a novější je zde
https://create-react-app.dev/docs/getting-started/. 

## Fáze II: instalace aplikace - vytvoření projektu
Moje kroky po fázi I.:
1. <code>npx create-react-app@latest progress_react</code>. To <code>@latest</code> je potřeba, protože to jinak řve chybu o staré verzi.  
**Pozn.:** Nevím, kde se to bere, ale asi ase to snaží vytvořit apku podle nějaké první instalace v historii.
 
1. Script vytvoří aplikace do nového adresáře **progress_react** se všemi návaznostmi.
1. You don’t need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code.
1. Create a project, and you’re good to go.

pozn.:
gitignore má node_modules výjimku, protože to jsou tisíce a tisíce zdrojových kódů reactu. 
Tyto se prostě vždycky lokálně instalují pomocí npm install 
## Fáze III: Vývoj a test
- Inside the newly created project, you can run some built-in commands: <code>npm start</code>
Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
- The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

## Fáze X: Deploy
- When you’re ready to deploy to production, create a minified bundle with <code>npm run build</code>.
- Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.


## Fáze učení
- úvoj do React, který jsem prošel a funguje: https://code.visualstudio.com/docs/nodejs/reactjs-tutorial
- další tutor na vytváření React apky, podle kterého jsem jel https://code.visualstudio.com/docs/nodejs/reactjs-tutorial


vytvoren apky tsx
npx create-react-app@latest progressbar_tsx --template typescript

import fluent ui
npm i fluent-ui   .... pro javascript
npm i @fluentui/react --force   ... pro tsx

develop tsx

install the following packages:

npm install --save-dev gulp
npm install --save-dev gulp-clean-css
npm install --save-dev gulp-concat

// addd 
Update build script in package.json
Update "package.json" to execute gulp after completing build automatically.

"react-scripts build && gulp" :- will execute gulp (gulpfile.js) after being build.

 "scripts": {
 "start": "react-scripts start",
 "build": "react-script s build && gulp"
  },

## vytvor build
npm run build

## instalovat
- pro kód odchytavající keydown event pro skenovani
npm i rxjs 

## Business Central
- how to JSON
https://www.msnjournals.com/post/basics-of-json-data-types-in-business-central

