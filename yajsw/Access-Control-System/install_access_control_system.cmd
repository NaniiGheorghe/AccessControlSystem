@echo off

set access-control-system-TempDirectory="$%{INTHERLC_INSTALLDIR}%/temp/access_control_system"
set wrapper_jar="D:/yajsw/yajsw-stable-12.13a/wrapper.jar"
set conf_file="D:/yajsw/Access-Control-System/access-control-system.conf"

if not exist access-control-system-TempDirectory% mkdir access-control-system-TempDirectory%

cd %~dp0
java -jar %wrapper_jar% -i %conf_file%

sc config access-control-system start= delayed-auto

pause