FROM harbor.idx.space/ops/nginx:1.21.4

COPY ./dist /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
