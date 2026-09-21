#!/bin/sh
# Build containers for the demo

docker build -f Dockerfile-cs -t spacedsl-cs .
docker build -f Dockerfile-ts -t spacedsl-ts .
docker-compose -f compose.yaml build