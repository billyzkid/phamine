﻿phamine
=======

Phantom-Jasmine ("phamine") consists of two scripts for running your [Jasmine] (http://pivotal.github.com/jasmine/) specs via [PhantomJS] (http://phantomjs.org/).

The src/phamine.coffee script opens an html file "headlessly" via PhantomJS and then logs test results to the console using the src/jasmine-console.js script, which is a simple Jasmine reporter plugin.

Running Tests
-------------
Assuming you already have PhantomJS installed...

Clone this repository, cd into it, and then run:

	phantomjs src/phamine.coffee sample/SpecRunner.html

If everything works you should see output like this in your terminal:

	Player -> passed
	  should be able to play a Song -> passed
	  tells the current song if the user has made it a favorite -> passed
	  when song has been paused -> passed
		should indicate that the song is currently paused -> passed
		should be possible to resume -> passed
	  #resume -> passed
		should throw an exception if song is already playing -> passed

	5 specs, 0 failures in 0.044s

To run your own tests with phamine, look at sample/SpecRunner.html and modify accordingly.

Credits
-------
Inspiration for phamine derives from the original [Phantom-Jasmine] (https://github.com/jcarver989/phantom-jasmine) by Joshua Carver.