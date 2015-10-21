# Intro

- Talk is on building a modern webapp
- Overall principles and current trends
- Deep dive into some specific technologies

# Overview

- What is modern?
- Backend
- Frontend
- Fun Stuff
- Flux!
- Demo

# Modern ?

## What

- APIs let us be server agnostic
- Bundling / Dynamic loading of modules
- Minimal, small animations, solid colors
- "Never refresh". Looks like one page, desktop experience

## How

- Many!
- Watch talks! Immutable state, streams, pure functions, static typing
- Another talk on dev tools

# Backend

- Chrome V8 Runtime, on the desktop
- nodemon / build tools

# Front end

- React is a view framework by Facebook. Stresses components.
- Virtual DOM, pure render functions (state + props)
- React router is written in React, provides SPA
- Bootstrap by Twitter. Float based layout.
- Flux is NOT MVC
- Redux is a very FRP, popular implementation (de factoish)

# Fun Stuff

- JSPM + SystemJS are coupled
- Dynamic reloading and completely reproducible installs
- Not intended to support CLI utilities
- Babel (show demo!)
- JSX is from React, allows us to co-locate function and design
- Easy for designers. Not separation of concerns, separation of technologies

# Demo!

## Flux Architecture

- Not MVC. MVC doesn't scale because of application data flow.
- Action is simple object, type and data
- Dispatcher is the gate keeper. Only way to modify stores.
- Stores are not models. Can store anything. Domain specific.
- Redux has only one store
- Views. Don't have to be React, just helpful.
- Actions are triggered by user interactions.
- Async actions have similar flow.

- Using vanilla Flux with Redux influence in demo.


# Other

- MongoDB/NoSQL are better than ORM because they match up with client.
- Relay, Falcor
- Webpack
- Ability to reason
- Send around request for interest on next-gen dev tools
