# # node镜像
# FROM node:16-alpine
# # 维护者信息
# LABEL maintainer="z5021996@vip.qq.com"

# # 拷贝前端项目 当前目录下的所有文件到fontend目录下(./指当前所有的代码路径 .指上一步cd到fontend的路径)
# COPY ./dist /fontend/dist

# # 指定接下来的工作路径为/fontend  - 类似于cd命令
# WORKDIR /fontend

# ======================== 上：npm打包  下：nginx运行 ========================

# nginx镜像
FROM nginx:alpine
# 维护者信息
LABEL maintainer="z5021996@vip.qq.com"

# 移除nginx容器的default.conf文件、nginx配置文件
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf

# ENV PROXY_HOST ${PROXY_HOST}
# ENV PROXY_IP ${PROXY_IP}

# 把主机的nginx.conf文件复制到nginx容器的/etc/nginx文件夹下
COPY nginx.conf /etc/nginx/
# 拷贝前端vue项目打包后生成的文件到nginx下运行
# COPY --from=build-stage /fontend/dist /usr/share/nginx/html
COPY ./dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 9009

# 注：CMD不同于RUN，CMD用于指定在容器启动时所要执行的命令，而RUN用于指定镜像构建时所要执行的命令。
#    RUN指令创建的中间镜像会被缓存，并会在下次构建中使用。如果不想使用这些缓存镜像，可以在构建时指定--no-cache参数，如：docker build --no-cache

# 使用daemon off的方式将nginx运行在前台保证镜像不至于退出
CMD ["nginx", "-g", "daemon off;"]
