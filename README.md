## Website Performance Optimization portfolio project

### Intro

Project 4 for front-end web developer nanodegree.

### Build Process

Primarily because I didn't want to inline CSS in my actual source files, this project is a bit split between "production" and "development". 

To replicate the process:

- install [node.js](https://nodejs.org/en/)
- navigate to the main directory of the project
- run: ```npm install --save-dev gulp-uglify gulp-rename gulp-minify-css gulp-minify-html gulp-inline-source```
- then run ```gulp```

### Files

- **README.md**: this one!
- **build** contains only gulp-generated build-only files (but not all of them, sorry!)
   - css
   - js
- **gulpfile.js** build process
- **img** contains all of the images, build and non-build
- **node_modules** contains all the node modules for gulp
- **.html** build HTML files; development code has been moved to /src
- **src** contains source code that gulp uses
- **views** contains build/production code for the pizza page

output of tree:

```
├── README.md
├── build
│   ├── css
│   │   ├── print.css
│   │   └── style.css
│   └── js
│       └── app.min.js
├── gulpfile.js
├── image_compress.py
├── img
│   ├── 2048.png
│   ├── 2048_small.jpg
│   ├── cam_be_like.jpg
│   ├── cam_be_like_small.jpg
│   ├── mobilewebdev.jpg
│   ├── mobilewebdev_small.jpg
│   ├── profilepic.jpg
│   └── profilepic_small.jpg
├── index.html
├── node_modules
.... snip
├── project-2048.html
├── project-mobile.html
├── project-webperf.html
├── src
│   ├── css
│   │   ├── print.css
│   │   └── style.css
│   ├── index.html
│   ├── js
│   │   └── perfmatters.js
│   ├── project-2048.html
│   ├── project-mobile.html
│   ├── project-webperf.html
│   └── views
│       ├── css
│       │   └── style.css
│       ├── js
│       │   └── main.js
│       └── pizza.html
└── views
    ├── build
    │   ├── css
    │   └── js
    ├── css
    │   ├── bootstrap-grid.css
    │   └── style.css
    ├── images
    │   ├── pizza.png
    │   ├── pizzeria.jpg
    │   ├── pizzeria_icon.jpg
    │   └── pizzeria_small.jpg
    ├── js
    │   ├── app.min.js
    │   └── main.js
    └── pizza.html
```