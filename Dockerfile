# Version 0.0.1
FROM ubuntu:20.04
MAINTAINER Albert Lopez "albert@lopez.gg"
COPY . /lopez.gg
RUN apt update; apt install -y hugo
CMD cd lopez.gg; hugo serve
EXPOSE 1313
