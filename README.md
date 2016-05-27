# CSS INTEGRATION OF A BASIC LANDING PAGE

##What is inside ? 

Inside you will find a gulp process for automating the dirty work.
CSS is made using scss 
JS is simply ES5, with broserify  

##How to proceed ? 

Install npm modules via your terminal : 
    ``npm install``
    
Then do the following to start generating dist files and serve your website locally :
``npm start``

A new browser page should now open in your browser with the page

##Create production bundle

Via your terminal run : 
``npm run dist``

A dist folder will be created into the project's root folder, it contains all the optimized files, ready to be put on a server ! 

## Where are the source files ? 

All the sources files are in the src element.
In the dist folder everyting will be the same as in src, so there will be no broken link in your css.

For the js everything is compilated with browserify, png are optimized, all the files are minified and compressed, ready for production! 


Happy Coding !
    