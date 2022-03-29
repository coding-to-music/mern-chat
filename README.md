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

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app

```

Output:

```java
Buildpack added. Next release on my-mern-chat will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

Output:

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

## Local Development

Because this app is made of two npm projects, there are two places to run `npm` commands:

1. **Node API server** at the root `./`
1. **React UI** in `react-ui/` directory.

### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```

### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React UI

```bash
# Always change directory, first
cd react-ui/

npm install package-name --save
```
