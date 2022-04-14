FROM node:14-alpine

ARG COOKIE
ENV COOKIE = $COOKIE

COPY . /app

WORKDIR /app
RUN yarn config set registry https://registry.npmmirror.com && yarn install --production
EXPOSE 3000
CMD ["yarn","serve"]