
# Blogging application - ECE Webtech project

Welcome to our website, we provide the articles creation and commenting service. The platform allow you to make a profile and publish article in your own name for other to see and give their opinions on the matter. 

## Production 

- Vercel URL: 
- Supabase project URL: 
## Usage

_how to start and use the application, run the tests, ..._

* Clone this repository, from your local machine:
  ```
  git clone https://github.com/Mohamed-MEKKI/project_webtech_2022.git
  cd app
  ```
* Start the the application
  ```bash
  cd app
  # Install dependencies (use yarn or npm)
  npm install
  npm run dev
  ```
* Start Supabase
  ```bash
  cd supabase
  docker-compose -f docker-compose.yml -f ./dev/docker-compose.dev.yml up
  ```

## Authors

*Mohamed MEKKI, mohamed.mekki@edu.ece.fr, ING4 S.I Gr03*\n
*Thanthai UDCHARCHON, thanthai.udcharchon@edu.ece.fr, ING4 S.I Gr03*

## Tasks
  
**Project management:**

* Naming convention   
  PascalCase is used for components and camelCase is used for pages and variable, the rest (such as asset etc.) is in snake_case
* Project structure   
  app/  
    compoenents  
    pages  
    public  
    styles  
    .DockerFile  
    .eslintrc.json  
    .gitignore  
    next.config.js  
    package-lock.json  
    package.json  
    postcss.config.js  
    tailwind.config.js  
    tsconfig.json  
    README.md  
* Git   
  **Git is used to keep up with the version from remote and local repository. Conventional commit is used for every commit**
* Code quality   
  **Indent and folder management is established for easily readable code**
* Design, UX, and content   
  **Tailwind and TypeScript is used for the design of the website**

**Application development:**

* Home page   
  **User is able to access to allowed page via the home page**
* Login and profile page   
  **Login/Logout button in the header push you to the Auth component**
* New articles creation   
  **Authorized user can create a new article** 
* New comment creation   
  **Authorized user can comment on articles**
* Resource access control   
  **RLS is used to limit the access of information from certain users who does not have the**
* Article modification   
  **Only the author of the articles can edit them**
* Article removal   
  **Only the author of the articles can delete them**
* Comment modification   
  **Only the author of the comments can edit them**
* Comment removal   
  **Only the author of the comment can delete them**
* Account settings   
  **User can modify their profile page**
* WYSIWYG integration   
  **User can create content based on WYSIWYG theorem**
* Gravatar integration   
  **User can use their own avatar (profile picture) for other to see**
* Light/dark theme   
  **User can switch between dark and light, the change is persist on the local storage**
* Accent color selection   
  **Created four buttons that defines 4 colors: red yellow,purple,blue in the Layout component page and that allows us to switch color each time**

## Bonus

* DockerFile and Dockerignore  
  **Docker is used to monitor the health of the website**
