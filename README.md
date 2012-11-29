phamine
=======

Phantom-Jasmine ("phamine") is the simplest way to run your [Jasmine] (http://pivotal.github.com/jasmine/) specs via [PhantomJS] (http://phantomjs.org/).

The src/phamine.coffee script opens an html file "headlessly" via PhantomJS and then logs test results to the console using the src/jasmine-console.js script, which is a minimal Jasmine reporter plugin.

Running Tests
-------------
Assuming you already have PhantomJS installed, clone this repository, cd into it, and then execute the following command:

	phantomjs src/phamine.coffee sample/SpecRunner.html

The sample/SpecRunner.html file runs the sample specs included with a standalone Jasmine install. If everything works, then you will see this output in your terminal:

	Player -> passed
	  should be able to play a Song -> passed
	  tells the current song if the user has made it a favorite -> passed

	  when song has been paused -> passed
		should indicate that the song is currently paused -> passed
		should be possible to resume -> passed

	  #resume -> passed
		should throw an exception if song is already playing -> passed

	5 specs, 0 failures in 0.022s

Or simply this output if you've initialized the ConsoleReporter with the verbose flag set to false:

	5 specs, 0 failures in 0.022s

To run your own tests with phamine, look at sample/SpecRunner.html and modify accordingly. Enjoy!

Credits
-------
Inspiration for phamine derives from the original [Phantom-Jasmine] (https://github.com/jcarver989/phantom-jasmine) by Joshua Carver.