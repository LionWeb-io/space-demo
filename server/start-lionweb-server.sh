#!/bin/sh

npx @electric-sql/pglite-socket --port=45432 --host=0.0.0.0 --debug=0 &
pglite_process=$!

sleep 2

npx @lionweb/server-server@0.4.2-beta.1 --run --config server-config-pglite.json &
lwServer_process=$!

wait $pglite_process $lwServer_process

