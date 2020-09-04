FROM centos

MAINTAINER apasoft.training@gmail.com

RUN mkdir /opt/tomcat/

WORKDIR /opt/tomcat
RUN curl -O https://apache.rediris.es/tomcat/tomcat-8/v8.5.51/bin/apache-tomcat-8.5.51.tar.gz
RUN tar xvfz apache*.tar.gz
RUN mv apache-tomcat-8.5.51/* /opt/tomcat/.
RUN yum -y install java
RUN java -version

WORKDIR /opt/tomcat/webapps
COPY app1.war .
EXPOSE 8080

