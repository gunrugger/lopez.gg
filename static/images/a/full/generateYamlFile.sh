#!/bin/bash
if [ $# -eq 0 ]; then
    echo "Please specify one or more directory names."
    exit 1
fi

for DIR in "$@"; do
    YAMLFILE="../../../../data/a/$DIR.yaml"
    touch $YAMLFILE
    ls $DIR | sed -e "/cover.jpg/d" -e 's/$/:\'$'\n    blurb: ""/'> $YAMLFILE
done
