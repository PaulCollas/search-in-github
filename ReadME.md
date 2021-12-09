# Efrei - React Native - Search Github

# 📌 Commands to launch project

Start to clone the project
```
git clone https://github.com/PaulCollas/search-in-github.git
```

Start the server :
```
cd server
yarn install
yarn dev
```

Start the UI :
```
cd client 
yarn install
yarn start
```

# 🏆 Goal

The purpose is to create a simple API using express and a showcase mobile app using Expo (React Native)
In 2 separate projects in the same repository : **A server and a client**

# 🚀 Server

Create a directory called server on the search-in-github directory

## Bonjour, Github
Create a postgreSQL database called searchGithub

## Structures
Take a look at the fields https://api.github.com/users/$USERNAME
Using prisma, create tables that we'll allow you to store these attributes.

replace $USERNAME with anyone from github

Ex:
```
{
    "login": "majdi",
    "id": 1158574,
    "node_id": "MDQ6VXNlcjExNTg1NzQ=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/1158574?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/majdi",
    "html_url": "https://github.com/majdi",
    "followers_url": "https://api.github.com/users/majdi/followers",
    "following_url": "https://api.github.com/users/majdi/following{/other_user}",
    "gists_url": "https://api.github.com/users/majdi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/majdi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/majdi/subscriptions",
    "organizations_url": "https://api.github.com/users/majdi/orgs",
    "repos_url": "https://api.github.com/users/majdi/repos",
    "events_url": "https://api.github.com/users/majdi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/majdi/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Majdi Toumi",
    "company": "Mhirba",
    "blog": "https://majdi.im",
    "location": "France",
    "email": null,
    "hireable": true,
    "bio": "Programming Artisan",
    "twitter_username": "majditoumi",
    "public_repos": 4,
    "public_gists": 6,
    "followers": 47,
    "following": 14,
    "created_at": "2011-10-28T19:21:41Z",
    "updated_at": "2020-12-06T16:26:30Z"
}
```

## Workflow
The purpose is to have a route /users/:username that will take a username string in params and then call the github api to fetch the public informations. On fetch, you must store all datas in your Postgress database using Prisma

Feel free to architect your database and table as you want. To fetch an external API take a look at the package request, isomorphic-fetch, etc.

On a new request, you MUST check before if you have the user informations in your database.


# 💻 Client 

## Yo, ui
Well, let's visuzalize github users datas !

You MUST initialize your client mobile application using Expo.
The purpose is to display a simple screen that allow a user to type a github username (input) and then validate and display all others informations.

The directory must be app

In this part, no rules, the purpose is to use basic stuff that you learn from React to create a simple app.

# 📚 Dependecies & sources 

Here is the list of all the dependencies and their sources :

- [React Native](https://reactnative.dev/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/docs/concepts/components/prisma-cli/installation)
- [NGROK](https://ngrok.com/)
- [Axios](https://github.com/axios/axios)

...


# 💬 Bonuses
We love bonuses, so feel free to add anything you want, example:

Dark Mode
More Github Api features...


# 🐵 Credits
Craft with ❤️ in Paris.

Created by **Paul Collas**



