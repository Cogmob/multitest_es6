#!/bin/bash
cp ../npm/gulpfile.js ../../gen/release
cd ../../gen/release
cp ../../src/npm/package.json .
cp ../../README.md .
npm install
rm -rf src
clear
node_modules/.bin/gulp build_release
