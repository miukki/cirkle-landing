# Linting
```
npm install -g eslint
```
# Start
```
yarn dev
```
#Prettier
```
yarn prettier
```

#Source
https://github.com/zeit/next.js


#Production 
```
yarn add global next
npm run build
PORT=8000 npm start

ls -al .next

```
#Deploy
```
#install now
https://zeit.co/download
now
```

#Project containes Prebuild CSS
```
https://github.com/zeit/next.js/issues/299
```


#Gmail API use, sources
```
https://developers.google.com/oauthplayground/?code=4/fgGqIO8Kd3GU-pjMcVPdc5GGf2j117AYKgHRV_hvl4Dbn21AF01sWDQENugEdb6a0LawAKPRAu69OSR10E39gsU&scope=https://mail.google.com/

https://console.cloud.google.com/apis/credentials?project=cirkle-1551632738680

https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react article

https://console.cloud.google.com/apis/credentials/oauthclient/756734063398-kmsbd9p44jvbt1sv3rks296b9999dful.apps.googleusercontent.com?project=cirkle-1551632738680

```

#SendGrid API use
```
https://www.npmjs.com/package/nodemailer-sendgrid-transport
```

#Deploy site with SendGrid
```
https://spectrum.chat/zeit/general/best-way-to-introduce-a-cra-contact-form~9bed5928-3c4a-4741-be3f-b997b668476a?authed=true
```
# Run with Docker 

```
docker stop $(docker ps -a -q)
docker build -t miukki/docker-nextjs .
docker run -d -p 3333:8000 miukki/docker-nextjs:latest
```
# By using docker-compose
```
docker-compose build
docker-compose up -d
```

# Connect to EC2

```
#Create production docker image
#Copy docker image from to EC2 instance using scp.
```
Login to EC2 using ssh and redeploy running container from new image:
```
docker ps
docker rm -f -v <container_id>
docker images
docker rmi <image_id> #to delete old image
docker run -d --net=bridge -p 80:80 <id_container> 

```
# Remove running containers
```
docker-compose down 
docker stop $(docker ps -a -q)
```

# Build Docker image locally
```
docker build -t docker-nextjs . 
```

# Deploy to EC2 with Docker-compose
```
ssh -i <ec2-instance>
git fetch --all
git reset --hard origin/develop
sudo docker-compose build
sudo docker-compose up -d
```


# Route53 with AWS usage example
```

``` 