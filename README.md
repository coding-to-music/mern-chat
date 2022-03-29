# MERN Chat App

https://github.com/coding-to-music/mern-chat

https://my-mern-chat.herokuapp.com/

By jordanwhunter https://github.com/jordanwhunter

https://github.com/jordanwhunter/mern-chat

## Installation:

### GitHub

```java
 git init
 git add .
 git remote remove origin
 git commit -m "first commit"
 git branch -M main
 git remote add origin git@github.com:coding-to-music/mern-chat.git
 git push -u origin main
```

### Heroku

```java
heroku create my-mern-chat
```

### Heroku MongoDB Environment Variables

```java
heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/mern-chat?retryWrites=true&w=majority"
git push heroku
```

### Heroku Buildpack

```java
heroku buildpacks

heroku buildpacks --help
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add mars/create-react-app
```

```java
Buildpack added. Next release on my-mern-chat will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Push to Heroku

```
git push heroku
```
