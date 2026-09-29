#!/bin/sh
# Launch containers for the demo (build before start)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

docker-compose -f $SCRIPT_DIR/compose.yaml up -d
