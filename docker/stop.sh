#!/bin/sh
# Stop containers for the demo

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

docker-compose -f $SCRIPT_DIR/compose.yaml down
