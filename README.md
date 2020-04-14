# Real-World-Vue.js

Learn the Real World Vue.js course at https://www.vuemastery.com/courses/real-world-vue-js
In this course, I’ll be learn about VueJS, how to build a production-level single page application (SPA) with Vue.js.

## Learn best practices

We’ll be covering

- Optimizing your editor for Vue development
- Vue CLI: everything you need to know
- Vue Router
- Vue Components
- API calls with Axios

## Table of Contents

1. Intro to Real World Vue
2. Vue CLI 3 - Creating our Project
3. Optimizing your Editor
4. Vue Router Basics
5. Dynamic Routing and History Mode
6. Single File Vue Components
7. Global Components
8. Slots
9. API calls with Axios

## Setup Project

### 1. Setup environment

#### 1.1 Change current directory to your project

```bash
cd [your-project-directory]
```

#### 1.2 Create zsh_history_dev_env_docker file to store the zsh command history.

The command history will be re-useable for other docker container (just run once).

```bash
touch $HOME/.zsh_history_dev_env_docker
```

#### 1.3 Create docker container for development environment (Ubuntu 18.04, NodeJS, Ruby, zsh, fzf)

```bash
docker run -p 8000:8000 -p 8080:8080 \
  -it -d --name=real-world-vue-js \
  -v $(pwd):/var/workspace/ \
  -e HISTFILE=/root/.zsh_history \
  -v $HOME/.zsh_history_dev_env_docker:/root/.zsh_history \
  khoachilang/dev_env:latest
```

#### 1.4 Install Vue CLI

```bash
docker exec -it real-world-vue-js zsh
npm install -g --unsafe-perm @vue/cli && npm install -g --unsafe-perm @vue/cli-service-global
npm install -g @vue/cli && npm install -g @vue/cli-service-global
```

#### 1.4 Show Vue information

```bash
vue --version
vue info
vue create -h
```

### 2. Project setup

#### 2.1 Install node packages

```
npm install
```

#### 2.2 Compiles and hot-reloads for development

```
npm run serve
```

#### 2.3 Compiles and minifies for production

```
npm run build
```

#### 2.4 Run your unit tests

```
npm run test:unit
```

#### 2.5 Lints and fixes files

```
npm run lint
```

#### 2.6 Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 3. Optimize environment development

#### 3.1 Install VS Code

```
https://code.visualstudio.com/download
```

#### 3.2 Install package Vetur for syntax highlight and snippets

#### 3.3 Enable Emmet allows you to use shortcuts to build out your code.

If Emmet doesn’t appear to be working for you, you can add this to your User Settings:

```json
"emmet.includeLanguages": {
  "vue": "html"
},
```

#### 3.4 Installing ESLint & Prettier

Install package `ESLint` and `Prettier` from VS Code

Add `plugin:prettier/recommended` to `.eslintrc.js`

```js
'extends': [
  'plugin:vue/essential',
  'plugin:prettier/recommended', // we added this line
  '@vue/prettier'
],
```

Configuring Prettier

Create `.prettierrc.js` file at root project:

```js
module.exports = {
  singleQuote: true,
  semi: false
}
```

#### 3.5 Update VS Code User Settings

```json
{
  "editor.quickSuggestionsDelay": 5,
  "editor.fontFamily": "Source Code Pro",
  "editor.fontSize": 12,
  "window.openFilesInNewWindow": "off",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.formatOnPaste": true,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.snippetSuggestions": "top",
  "workbench.colorTheme": "FlatUI Dark",
  "liveServer.settings.donotShowInfoMsg": true,
  "vsc-covid-stats.pinned-countries": ["usa"],
  "vetur.validation.template": false,
  "vetur.completion.useScaffoldSnippets": false,
  "editor.formatOnSave": true,
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
