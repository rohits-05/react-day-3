/*
* HMR - Hot Module Replacement -> Automatically reloads the page once we save the file.
* Parcel does HMR with the help of File Watcher Algorithm(which is written in C++)(keeps track of the file's live status 
								and informs server to reload)
* Bundles our application
* Minification
* Cleaning up the code(Removing console.logs)
* Minified versions of the files are stored in dist folder
* * parcel-cache folder holds the files that deals with HMR algo, etc.
* Manages dev and production builds
* Superfast

* Parcel does image optimization as well(Minimizes)........media are the ones that take time while loading page
* Caching while development and so while once it is build after that it takes less time to reload again while development
* Compression (rewriting variables names from 'heading1' to 'f1')
* Compatible with older version of browsers
* HTTPS on dev machine
* Manages port number
* Uses consistent hashing algorithm
* Zero config bundler
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1',{
    id: 'title',
}, 'This heading is inserted through React.');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading1);