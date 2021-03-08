#!/bin/bash
mkdir ../thumb
if [ $# -eq 0 ]; then
    echo "Please specify a directory name."
    exit 1
fi

for DIR in "$@"; do
    mkdir ../thumb/$DIR
    mv $DIR/*.MOV ./
    for FILE in $DIR/*; do
        convert $FILE -resize 1000 ../thumb/$FILE;
    done
    mv *.MOV $DIR/
done
