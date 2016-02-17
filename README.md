# Modern Webapp
Code from the Modern Webapp Talk

[Slides from Prezi can be found here](http://prezi.com/l7mckx7bzqr4/?utm_campaign=share&utm_medium=copy)

### Installation Instructions

After downloading [node](https://nodejs.org/en/) and git cloning this repo, run
`npm install`. You may need to install webpack globally,
via `npm install -g webpack`

### Instructions to run
First bundle the project with source maps by running `webpack -d`. Then run `node server.js`
in the root directory, and navigate to localhost:3000.

You will need to rebundle for every change you make, or setup webpack to use watch mode or similar.

### Links

Some people asked for links on good resources for some of things I talked about in this presentation like React, Redux, and FRP. Here they are:

- [Free video series on Redux by its creator Dan Abramov](https://egghead.io/series/getting-started-with-redux)
- [Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide)
- [Elm, an awesome FRP language for the front-end](http://elm-lang.org/)
- [Redux docs](http://redux.js.org/) and [How Redux was inspired from Elm](http://redux.js.org/docs/introduction/PriorArt.html)
- [Excellent webpack how-to to get up and running quickly](https://github.com/petehunt/webpack-howto)
