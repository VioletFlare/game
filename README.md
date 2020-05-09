Game
===

A work in progress platform RPG.

No install:
---
https://violetflare.github.io/

Installation & Running
---

First, download the repository:

~~~~
$ git clone https://github.com/VioletFlare/game.git
~~~~

Then, install the dependecies:

~~~~
$ cd game
$ npm i
~~~~

#### Run in dev mode:

~~~~
$ npm run start
~~~~

If running in dev mode breaks on node-sass after switching to a different node version, 
run the following command:

```
$ npm rebuild node-sass
```

Then re-run.

#### Build for prod:

~~~~
$ npm run build
~~~~

Running the prod build:

~~~~
$ npm install -g http-server
$ cd dist
$ http-server .
~~~~

Navigate to this URL in the browser: 

~~~~
http://localhost:8080/index.html
~~~~

Note: Ad blocking software might prevent the page from loading. (ie. brave shields on brave browser)

#### Publishing:

Update the dist folder with the build command:

~~~~
$ npm run build
~~~~

Publish the dist folder to violetflare.github.io:

~~~~
$ npm run publish
~~~~

Tests
---

Running tests:

```
$ npm run test
```
