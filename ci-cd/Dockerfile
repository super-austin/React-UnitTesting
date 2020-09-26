#FROM jenkins/jenkins:lts
FROM jenkins/jenkins:2.249.1-lts-centos7
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN /usr/local/bin/install-plugins.sh < /usr/share/jenkins/ref/plugins.txt