
# Blogging application - ECE Webtech project

*presentation, introduction, ...*

## Production 

- Vercel URL: 
- Supabase project URL: 
## Usage

*how to start and use the application, run the tests, ...*

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
  the repository contains 2 main folders:
  App/
  Supabase/
  
  App/ contains the main application with its dockerfile. 
  Supabase/ contains the the main configurations of supabase storage.
* Git   
  We created 5 branches to push the code:
  Main branch contains the main application and the index page
  Components all page components,dark mode and color switch
  Articles branch contains the 
  Comments contains the showComments page import
  Dark-mode
* Code quality   
  *place your graduation and comments*
* Design, UX, and content   
  for 

**Application development:**

* Home page   
  the index.js page is designated to show the home page
  it contains the hook sentence for our app users and it publich the latest articles 
  without the possibility to delete it or modifying it.
  
* Login and profile page   
  we used the supabase template to sign in or create users:
  once the user is logged in they are going to be transferred to update user page 
* New articles creation   
  We implemented a an article creator page in the name of artcr.js where it shows a form
  where we could input Content,Title,content,Slug and then a button to submitt the form
  in a supabase table.
* New comment creation   
````
  const getCommentList = async () => {
    const { data, error } = await supabase.from("comments").select("*");
    if (!error && data) {
      setCommentList(data);
    } else {
      setCommentList([]);
    }
  };
````
* Resource access control   
  RLS 
  inserting articles 
* Article modification   
added a button 
  *place your graduation and comments*
* Article removal   
  added a button for
  ```
  const makeDelete = async () => {
    const{id}=useParams();
    const { error,data } = await supabase
            .from('articles')
            .delete()
            .eq('id',params.id)
   if (error){
     console.log(error)
   }
   if (data){
     console.log(data);
   }
}
```
* Comment modification   
  const onChangeEditComment = (event: ChangeEvent<HTMLInputElement>) => {
    const payload = event.target.value;
    setEditComment({ ...editComment, payload });
  };

  const confirmEdit = () => {
    window.alert("Confirm edit comment");
  };
* Comment removal   
````
  const confirmDelete = async (id: string) => {
    const ok = window.confirm("Delete comment?");
    if (ok) {
      const { data, error } = await supabase.from("comments").delete().match({ id });
      if (!error && data) {
        window.alert("Deleted Comment :)");
      } else {
        window.alert(error?.message);
      }
    }
  };
  ````
* Account settings   
  we created an account component imported from supabase called 
  Account page where user could update its information after logiing in.
  
 
* WYSIWYG integration   
  *place your graduation and comments*
* Gravatar integration   
  We created a component called avatar linked directly to the subscribed user,
  <Avatar
      uid={user.id}
      url={avatar_url}
      size={150}
      onUpload={(url) => {
        setAvatarUrl(url)
        updateProfile({ username, website, avatar_url: url })
      }}
    />
    User could import its photo and could use it in different states
* Light/dark theme   
  *place your graduation and comments*
  ```
  const [theme, setTheme] = useState(null);

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
  ```
* Accent color selection   
  Created four buttons that defines 4 colors: red,yellow,purple,blue in the Layout component page
  and that allows us to switch color each time
  ```
  const [color, setColor] = useState('white');
  const handleColorChange = (event) => {
    setColor(event.target.value);
  }
  ```
  
  
      <div className={`bg-${color}-500 `} >


## Bonus

* DockerFile and Dockerignore  
  We created a dockerfile with this template
  ````
  FROM node:16-alpine
  RUN mkdir -p /usr/app/
  WORKDIR /usr/app

  COPY ./ ./

  RUN npm install
  RUN run build

  EXPOSE 3000
  CMD ["npm","start"]
  ````
