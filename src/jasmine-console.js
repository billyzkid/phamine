(function (jasmine, console) {

    jasmine.ConsoleReporter = function (verbose) {
        this.verbose = !!verbose;
    };

    jasmine.ConsoleReporter.prototype.reportRunnerStarting = function (runner) {
        this.startedAt = new Date();
        this.passedCount = 0;
        this.failedCount = 0;
        this.skippedCount = 0;
        this.completedCount = 0;
    };

    jasmine.ConsoleReporter.prototype.reportRunnerResults = function (runner) {
        if (this.verbose) {
            var suites = runner.suites();
            var specs = runner.specs();

            for (var i = 0; i < suites.length; i++) {
                var suite = suites[i];
                var mySuite = suite;
                var indent = "";

                while (mySuite.parentSuite) {
                    mySuite = mySuite.parentSuite;
                    indent += "  ";
                }

                console.log(indent + suite.description + " -> " + getStatus(suite));

                for (var j = 0; j < specs.length; j++) {
                    var spec = specs[j];

                    if (spec.suite === suite) {
                        console.log(indent + "  " + spec.description + " -> " + getStatus(spec));
                    }
                }
            }
        }

        var message = "";

        message += this.completedCount + " " + (this.completedCount === 1 ? "spec" : "specs");
        message += ", " + this.failedCount + " " + (this.failedCount === 1 ? "failure" : "failures");
        message += " in " + ((new Date().getTime() - this.startedAt.getTime()) / 1000) + "s";

        console.log("");
        console.log(message);
        console.log("Reporter finished -> " + getStatus(runner));
    };

    jasmine.ConsoleReporter.prototype.reportSpecResults = function (spec) {
        var status = getStatus(spec);

        switch (status) {
            case "passed":
                this.passedCount++;
                break;

            case "failed":
                this.failedCount++;
                break;

            case "skipped":
                this.skippedCount++;
                break;
        }

        this.completedCount++;
    };

    function getStatus(child) {
        var results = child.results();
        var status = results.passed() ? "passed" : "failed";

        if (results.skipped) {
            status = "skipped";
        }

        return status;
    }

})(jasmine, console);