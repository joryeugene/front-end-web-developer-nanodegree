## Website Performance Optimization portfolio project

####Part 1: Optimize PageSpeed Insights score for index.html

* **Initial PageSpeed Insights Score** = Mobile: 28/100, Desktop: 30/100
* **After Optimization** = Mobile: 96/100, Desktop: 95/100

* Reduce image sizes and optimized
* Added media query to print.css
* Inlined main CSS and JS (Alternatively JS and CSS could be external but minified)
* Added async attribute to analytics.js

####Part 2: Optimize Frames per Second in pizza.html

* De-nested a bunch of function declarations that were stupid
* Moved DOM queries out of loops
* Used CSS to capitalize instead of JS
* Change a bunch of other stuff that is more efficient
