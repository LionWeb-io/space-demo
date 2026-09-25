#!/bin/sh
# Build containers for the demo

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "Building docker images" && \
  cd $SCRIPT_DIR && \
  docker build -f Dockerfile-cs -t spacedsl-cs $PROJECT_ROOT && \
  docker build -f Dockerfile-ts -t spacedsl-ts $PROJECT_ROOT && \
  docker-compose -f compose.yaml build
