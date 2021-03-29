#!/bin/bash
[ -d ../thumb ] || mkdir ../thumb
if [ $# -eq 0 ]; then
    echo "Please specify one or more directory names."
    exit 1
fi

for DIR in "$@"; do
    [ -d ../thumb/$DIR ] || mkdir ../thumb/$DIR
    [ -f $DIR/*.MOV  ] && mv $DIR/*.MOV ./
    [ -f $DIR/*.gif  ] && mv $DIR/*.gif ./
    for FILE in $DIR/*; do
        convert $FILE -resize 1000 ../thumb/$FILE;
    done
    [ -f *.MOV  ] && mv *.MOV $DIR/
    [ -f *.gif  ] && mv *.gif $DIR/
done
