#!/bin/bash
DRP_TAG=docker pull sanguohot/vultr:1.0
#docker build . -t ${DRP_TAG}
#docker push ${DRP_TAG}
from_path=$PWD
dockerfile_path=$(cd `dirname $0`;pwd)
cd $dockerfile_path
docker build . -t ${DRP_TAG}
docker push ${DRP_TAG}
cd $from_path