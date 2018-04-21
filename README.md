Below you will find some information on how to perform common tasks.  
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app).

## Sending Feedback

We are always open to [your feedback](https://github.com/facebookincubator/create-react-app/issues).

## Folder Structure

After creation, your project should look like this:

```
maze-game/
  README.md
  public/
    index.hmtl
    favicon.ico
    manifest.json
  src/
    App.css
    App.js
    App.test.js
    Board.js
    Cell.js
    Game.js
    afeez.png
    flower.jpg
    index.css
    index.js
    logo.svg
    registerServiceWorker.js
    utils.js
  .gitignore
  README.md
  package-lock.json
  package.json
  yarn.lock
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `public/favicon.ico` is the icon you see in the browser tab;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.  
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

You can, however, create more top-level directories.  
They will not be included in the production build so you can use them for things like documentation.

>**Known Issue:**
>
>You may encounter an issue where changing a file inside `src` doesn’t trigger a recompilation. Most likely this happens because the path in your filesystem differs in its casing from the path you imported. For example, if a file is called `App.js` but you are importing `app.js`, the watcher might not recognize changes to it. We are [considering](https://github.com/facebookincubator/create-react-app/issues/240) enforcing some checks to prevent this. If this doesn’t help, check out the page on [troubleshooting watching](https://webpack.github.io/docs/troubleshooting.html#watching).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
