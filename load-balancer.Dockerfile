FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY load-balancer/content /usr/share/nginx/html
COPY load-balancer/conf /etc/nginx
