#!/bin/sh

cd SpaceDemo.Loader
dotnet run ../../chunks
loader_process=$!
cd ..

sleep 2

cd SpaceDemo.Validator
dotnet run
validator_process=$!

wait $loader_process $validator_process

