#!/bin/sh

npm install

cd packages

cd build
npm run generate
cd ..

cd space-dsl
npm run build
cd ..

cd ..

