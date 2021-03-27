// Using the cache interface gives your application three advantages:

// Offline browsing - users can navigate your full site when they're offline
// Speed - resources come straight from disk, no trip to the network.
// Resilience - if your site goes down for "maintenance" 
// (as in, someone accidentally breaks everything), your users will get the offline experience
// The Application Cache (or AppCache) allows a developer to specify which files the browser 
// should cache and make available to offline users. Your app will load and work correctly,
// even if the user presses the refresh button while they're offline.


// To enable the appication cache
// To enable the application cache for an application, include the manifest attribute in the <html> element:

<html manifest="/example.appcache">
</html>


// The manifest attribute references a URL for a cache manifest 
// file: a text file that lists URLs that browsers should cache for your application.


//1. When the browser visits a document that includes the manifest attribute, 
//if no application cache exists, the browser loads the document and then fetches all the 
//entries listed in the manifest file, creating the first version of the application cache.

//2. Subsequent visits to that document cause the browser to load the document and other assets specified in the 
//manifest file from the application cache (not from the server). In addition, the browser also sends a checking 
//event to the window.applicationCache object, and fetches the manifest file, following the appropriate HTTP caching 
//rules.

// 3. If the currently-cached copy of the manifest is up-to-date, the browser sends a noupdate event 
// to the applicationCache object, and the update process is complete. Note that if you change any cached 
// resources on the server, you must also change the manifest file itself, so that the browser knows it
// needs to fetch all the resources again.

// If the manifest file has changed, all the files listed in the manifest—as well as those added to the 
// cache by calling applicationCache.add()—are fetched into a temporary cache, 
// following the appropriate HTTP caching rules. For each file fetched into this temporary cache, 
// the browser sends a progress event to the applicationCache object. If any errors occur, 
// the browser sends an error event, and the update halts.
// Once all the files have been successfully retrieved, they are moved into the real offline cache automatically, 
// and a cached event is sent to the applicationCache object. Since the document has already been loaded into the browser from the cache, the updated document will not be rendered until the document is reloaded (either manually or programmatically).


