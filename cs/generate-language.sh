#!/bin/sh

cd SpaceDemo.Languages
dotnet tool restore
dotnet LionWebGenerator --config generate-languages.config.json
cd ..

