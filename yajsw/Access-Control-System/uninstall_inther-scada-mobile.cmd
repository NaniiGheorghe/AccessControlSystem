@echo off

set inther-scada-mobile-TempDirectory="$%INTHERLC_INSTALLDIR%/temp/inther-scada-mobile"
set wrapper_jar="D:/yajsw/yajsw-stable-12.13a/wrapper.jar"
set conf_file="D:/yajsw/inther-scada-mobile/inther-scada-mobile.conf"

if exist %inther-scada-mobile-TempDirectory% rmdir %inther-scada-mobile-TempDirectory% /s /q

cd %~dp0
java -jar %wrapper_jar% -r %conf_file%

pause
