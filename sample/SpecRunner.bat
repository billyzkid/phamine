@echo off
pushd %~dp0
setlocal

echo Testing...
"..\lib\phantomjs-1.7.0-windows\phantomjs.exe" "..\src\phamine.coffee" "SpecRunner.html"

endlocal
popd
pause
goto :eof