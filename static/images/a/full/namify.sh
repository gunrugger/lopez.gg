#!/bin/bash
if [ $# -eq 0 ]; then
    echo "Please specify one or more directory names."
    exit 1
fi

for DIR in "$@"; do
    rename "s/P.../$DIR-/" $DIR/*
done
