#!/bin/bash
if [ $# -eq 0 ]; then
    echo "Please specify a directory name."
    exit 1
fi

for DIR in "$@"; do
    rename "s/P.../$DIR-/" $DIR/*
done
