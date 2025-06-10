FROM nginxinc/nginx-unprivileged:stable-alpine

USER root
COPY .output/public /usr/share/nginx/html
COPY ./docker/nginx.conf.template /etc/nginx/templates/nginx.conf.template

USER nginx
EXPOSE 4300
