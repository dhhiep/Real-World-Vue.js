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

  ### 2.6 Customize configuration
  See [Configuration Reference](https://cli.vuejs.org/config/).
