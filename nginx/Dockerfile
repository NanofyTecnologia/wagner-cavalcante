FROM nginx:1.15.0

COPY ./certificados/ /etc/nginx/certificados/

RUN chown -R nginx:nginx /etc/nginx/certificados
RUN chown -R root:root /etc/nginx/certificados
RUN chmod -R 600 /etc/nginx/certificados

EXPOSE 80

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d