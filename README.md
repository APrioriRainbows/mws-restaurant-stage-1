# Restaurant Reviews Webapp

## About this project

This is a static web application that provides a number of reviews for varies restaurants across New York City. It is responsive on multiple screen sizes, including mobile, and includes basic accessibility features. It also has a basic service worker which will cache all files and fetch them if the site is later then acessed offline.

I completed this project as part of the Grow With Google Front-End Nanodegree. In particular I implemented the media queries, a number of accessibilty features such as alt tags, adding focus to many elements, and ammending elements with additional instructional information. Finally, I implemented the service worker with caching.

### Requirements
1. To view this website in its entirety you'll need a mapbox key.
This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `private_key` in both index.html and restaurant.html  with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 
2.Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing. As such you will need a modern browser to view the website, and specifically to view the site offline.

### Viewing the site
1. Clone the repo
2. Add your mapbox key to the code 
3. start up a simple HTTP server to serve up the site files on your local computer. To do this withy Python:
In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
4. With your server running, visit the site: `http://localhost:8000`






