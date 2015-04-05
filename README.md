# WPI-CS3043-Imitation-Game
## Launching/Viewing Website
How to launch the webpage: `python -m SimpleHTTPServer`

Python should launch a web server. You can access it by typing: `localhost:8000` into your browser and it will load the page.

## How to write pages
Page navigation is easy with AngularJS
Simply add your page inside the partials file. This will be a piece of HTML that angularJS will dynamically load into the `<ng-view></ng-view>` on the index.html page.
The page navigation is defined in the `js/app.js` file. If you want to add a page to the page navigation then you can follow the same page navigation format in that file.

## Linking to pages internally
Angular uses page anchors for page navigation. If you want to create a link to your page then the link will be `href="./#/{page name}"`


## Page Layout
Bootstrap (already included) has tons of components that are incredibly easy to add and use. Simply look through the bootstrap documentation to add things.

##Live Version of Website
Github offer an awesome web hosting service. If you push code to the `gh-pages` branch it will automatically accessible on the web [here](http://jlleitschuh.github.io/WPI-CS3043-Imitation-Game).
Just make sure that master is also up to date too.