#! /bin/bash

yarn install
yarn build
yarn export
docker build -t myscrum-front .