@echo off
echo "checking requirements"
where node
if %ERRORLEVEL% NEQ 0 (
    echo "node was not found" 
    echo "Install node or check enviroment variables"
    PAUSE
    EXIT
)
where npm
if %ERRORLEVEL% NEQ 0 (
    echo "npm was not found" 
    echo "This shouldnt theoretically appear but... uhhh reinstall node?"
    PAUSE
    EXIT
)
echo "Starting server and installing node modules"
start cmd /k "cd server_ts && npm install && QuickStart.bat"
start cmd /k "cd dispatchserver && npm install && StartDistributor.bat"