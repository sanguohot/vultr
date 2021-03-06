IMG_TAG=sanguohot/vultr:1.0
SERVER_PATH=/opt/vultr
BACKEND_PATH=/opt/vultr/src/backend/
docker run -it -d --name vultr \
-v ${BACKEND_PATH}/log:${BACKEND_PATH}/log \
-v ${BACKEND_PATH}/etc:${BACKEND_PATH}/etc \
-v /etc/letsencrypt/:/etc/letsencrypt \
-v /opt/qbt/downloads:/downloads \
-p 443:10443 \
${IMG_TAG}