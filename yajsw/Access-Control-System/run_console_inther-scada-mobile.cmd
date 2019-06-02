@echo off

set wrapper_jar="D:/personal/ACS/AccessControlSystem/yajsw/yajsw-stable-12.13a/wrapper.jar"
set conf_file="D:/personal/ACS/AccessControlSystem/yajsw/Access-Control-System/access-control-system.conf"
cd %~dp0

java -jar %wrapper_jar% -c %conf_file%

pause