# Node Boilerplate

This is my personal boilerplate code when I want to make a new web app. It uses Node.js with [Hapi 8.4](http://hapijs.com) and [Handlebars](http://handlebarsjs.com). This is ready to deploy to [Heroku](https://www.heroku.com). 

## Testing Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ foreman start web
```

App should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

Assuming you've cloned this repo to your local computer.

```sh
$ heroku create some-name
$ git push heroku master
$ heroku open
```

## Live Example

This app is currently running as [Ezra-Master](https://ezra-master.herokuapp.com/Ezra)