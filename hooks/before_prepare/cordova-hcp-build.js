#!/usr/bin/env node

function cordovaHcpBuild() {
  var exec = require('child_process').exec;
  console.log("start cordova-hcp build...");
  var cmdStr = 'cordova-hcp build';
  exec(cmdStr, function (err, stdout, stderr) {
    if (err) {
      console.log('cordova-hcp build error:' + stderr);
    } else {
      console.log("cordova-hcp build complete:" + stdout);
    }
  });
}

cordovaHcpBuild();