// Generate example screenshots
// 
// This is a PhantomJS script for generating the screenshots for 
// examples used in the style guide. See http://phantomjs.org/ for
// installation instructions.
//
// Usage:
// 
//     $ phantomjs generate-example-screenshots.js
//


// CONFIGURATION 
//
// Note, each example you wnat to screenshot must be listed here, 
// with optional settings for the dimensions of the height of the 
// screenshot that is taken.

var examples_url = 'http://localhost:4000/examples/',
	output_folder = 'assets/images/example-screenshots/',
	default_viewportSize = { width: 800, height: 768 },
	default_clipRect = { top: 0, left: 0, width: 800, height: 768 },
	examples = {
		'accordion': {
			'clipRect': { top: 0, left: 0, width: 800, height: 250 }
		},
		'blockquote': {
			'clipRect': { top: 0, left: 0, width: 800, height: 150 }
		},
		'breadcrumbs': {
			'clipRect': { top: 0, left: 0, width: 800, height: 75 }
		},
		'cancel-button': {
			'clipRect': { top: 0, left: 0, width: 800, height: 150 }
		},
		'external-button': {
			'clipRect': { top: 0, left: 0, width: 800, height: 150 }
		},
		'fontweight': {
			'clipRect': { top: 0, left: 0, width: 800, height: 950 }
		},
		'guide-sequential': {
			'clipRect': { top: 0, left: 0, width: 800, height: 175 }
		},
		'guide-non-sequential': {
			'clipRect': { top: 0, left: 0, width: 800, height: 175 }
		},
		'h2-emphasis': {
			'clipRect': { top: 0, left: 0, width: 800, height: 50 }
		},
		'h2-guide': {
			'clipRect': { top: 0, left: 0, width: 800, height: 75 }
		},
		'headings': {
			'clipRect': { top: 0, left: 0, width: 800, height: 950 }
		},
		'nav-button': {
			'clipRect': { top: 0, left: 0, width: 800, height: 225 }
		},
		'note-caution': {
			'clipRect': { top: 0, left: 0, width: 800, height: 175 }
		},
		'note': {
			'clipRect': { top: 0, left: 0, width: 800, height: 150 }
		},
		'notifications': {
			'clipRect': { top: 0, left: 0, width: 800, height: 200 }
		},
		'ordered-list': {
			'clipRect': { top: 0, left: 0, width: 800, height: 200 }
		},
		'primary-button': {
			'clipRect': { top: 0, left: 0, width: 800, height: 150 }
		},
		'secondary-button': {
			'clipRect': { top: 0, left: 0, width: 800, height: 125 }
		},
		'small-print': {
			'clipRect': { top: 0, left: 0, width: 800, height: 100 }
		},
		'tabs': {
			'clipRect': { top: 0, left: 0, width: 800, height: 150 }
		},
		'text-links': {
			'clipRect': { top: 0, left: 0, width: 800, height: 250 }
		},
		'unordered-list': {
			'clipRect': { top: 0, left: 0, width: 800, height: 200 }
		}
	}, 
	exampleIndex=0,
	page = require('webpage').create();


// Sidenote:
// PhantomJS is organized to run callbacks asynchronously from `page.open()`
// once the page has loaded. However, there's a snag – `page.open()` can't be
// run by more than one call at a time. So, to get around it, we have a function
// that starts looping through the Examples (`nextExample()`) which increments
// as necessary and calls `screenshotExample()` to do the actual screenshotting.
// Once `screenshotExample()` has completed rendering a given screenshot it calls
// `nextExample()` to fire off the next example. If `nextExample()` gets to the end, 
// of the examples, it will exit from PhantomJS.

function nextExample() {
	var exampleKeys = Object.keys(examples),
		example;
	if (exampleIndex < exampleKeys.length) {
		example = exampleKeys[exampleIndex];
		screenshotExample( example, examples[example]);
		exampleIndex = exampleIndex + 1;
	}
	else {
		phantom.exit();	
	}
}

function screenshotExample(example,config) {
	page.viewportSize = default_viewportSize;
	page.clipRect = default_clipRect;
	page.clipRect = typeof config['clipRect'] !== 'undefined' ? 
		config['clipRect'] : default_clipRect;

	page.open( examples_url + example, function() {

		page.render( output_folder + example + '.png');
		console.log("Created: ", output_folder + example + '.png');
		nextExample();
		
	});
	
}

// Kick off the screenshotting.
console.log("Creating screenshots of examples for the style guide. ","\n");
nextExample();



