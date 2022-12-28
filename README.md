
# Blogging application - ECE Webtech project

Welcome to our website, we provide the articles creation and commenting service. The platform allow you to make a profile and publish article in your own name for other to see and give their opinions on the matter. 

## Production 

- Vercel URL: (we couldn't deploy our app with vercel due to 'run build' error)
- Supabase project URL: http://localhost:3001/
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
  supabase/
  
  Readme.md<br>
  licence
* Git   
  **Git is used to keep up with the version from remote and local repository. Conventional commit is used for every commit**
  used branches :
  main:<br>
    The default branch <br>
components:<br>
    Description of components modifications ,including color switch and Dark mode<br>
articles:<br>
    Description of article creation,delete and modify branch<br>
comments:<br>
    Description of comments creation,delete and modify branch<br>
css-color-switch-dark-mode:<br>
    Description of dark mode and color switching branch<br>

* Code quality   
  **Indent and folder management is established for easily readable code**
* Design, UX, and content   
  **Tailwind and TypeScript is used for the design of the website**
  Resources:<br>
  https://tailwindui.com/components/marketing/sections/heroes<br>
  https://flowbite.com/<br>
  https://tailwindcomponents.com/

**Application development:**

* Home page   
  **User is able to access to allowed page via the home page without being registred**
  he could also find some brief information about  the company pick the page color and 
  visualize the latest articles.
  
* Login and profile page   
  **Login/Logout button in the header push you to the Auth component**
* New articles creation   
  to create an article, the user should get to `artcr.js` page where he could pick the slug,title,message,categories
  and then submit the article when clicking the button submit.<br>
  for better use , it is recommended to use https://app.supabase.com/projects instead of local use.
  
* New comment creation   
  **Authorized user can comment on articles**<br>
  `commentShow.js` page is used to create comments.
  
  Ressources:
    https://dev.to/hoonweedev/build-comments-section-with-nextjs-and-supabase-1o6c
  
* Resource access control   
  **RLS is used to limit the access of information from certain users who does not have the**<br>
  for each table we actived the RLS mode and we added the correspondant policy.
  
* Article modification   
  when clicking on the button `edit` in the article page it will transfer you to the `update` page
  where you can modify the submitted article.
  
* Article removal   
  when clicking on the button `delete` in the article page it will delete the article.Unfortunaltely, we faced some issues 
  concerning getting the proper id of the requested article
  ````
    .eq('id',data.id)
  ````
  
  however,when we change `data.id`
  
* Comment modification   
  created a spcefic button for comment modification that reacts for this function:
  
* Comment removal   
  another button for comment removal 
  
* Account settings   
  **User can modify their profile page**<br>
  when auth with supabase the user will be taken to a profile page where he could put its data.<br>
  with the help of the `Account.js` component.
  (we could visualize it with `components` branch)
* WYSIWYG integration   
  **User can create content based on WYSIWYG theorem**


* Gravatar integration   
  **User can use their own avatar (profile picture) for other to see**<br>
  We created a `Avatar.js` component inspired by : https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs<br>
  after login in will be transferred to the account settings feature with the ability to add an avatar picture personalized for the user.<br>
  
  due to this part:
  ````
   <Avatar
      uid={user.id}
      url={avatar_url}
      size={150}
      onUpload={(url) => {
        setAvatarUrl(url)
        updateProfile({ username, website, avatar_url: url })
      }}
    />
  ````
* Light/dark theme   
  **User can switch between dark and light, the change is persist on the local storage**<br>
  we used these React functions to enable this feature (use `components` branch to visualise)

  
````
  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } 
    else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
````

* Accent color selection   
  **Created four buttons that defines 4 colors: red yellow,purple,blue in the Layout component page and that allows us to switch color each time**<br>
  we used this react function in `Layout` component to enable it:
  
  ````
   const [color, setColor] = useState('white');
  const handleColorChange = (event) => {
    setColor(event.target.value);
  }
  
  ````

## Bonus

* DockerFile and Dockerignore  
  **Docker is used to monitor the health of the website**
