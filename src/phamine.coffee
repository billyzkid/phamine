#!/usr/local/bin/phantomjs

if phantom.args.length == 0
  console.log "URL expected."
  phantom.exit 1

url = phantom.args[0]
page = new WebPage()

page.onConsoleMessage = (message) ->
  # Terminate when the reporter signals that testing has finished.
  switch message
    when "ConsoleReporter finished -> passed" then phantom.exit 0
    when "ConsoleReporter finished -> failed" then phantom.exit 1
    when "ConsoleReporter finished -> skipped" then phantom.exit 2
    else console.log message

page.open url, (status) ->
  if status != "success"
    console.log "URL failed: " + url
    phantom.exit 1