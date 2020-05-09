/*
    Publish the dist folder to the violetflare.github.io page.
*/

const ghpages = require('gh-pages');

ghpages.publish(
    'dist', 
    {
        branch: 'master',
        repo: 'https://github.com/VioletFlare/violetflare.github.io.git'
    }, 
    () => console.log("Done!")
);