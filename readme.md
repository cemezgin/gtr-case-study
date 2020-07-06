# Case Study

  #### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This application written with Node.js and Express framework.

#### Environment
Before the starting application .env file should be created. Parameters can be found in .env.example file. You need two db for this case. One of them for the production, other one is for the test.

>mongodb+srv://challengeUser:< password >@challenge-xzwqd.h8adk.mongodb.net/getir-case-study?retryWrites=true&w=majority

>mongodb+srv://challengeUser:< password >@challenge-xzwqd.h8adk.mongodb.net/test?retryWrites=true&w=majority

<b>*password is given in the case document as in mongo uri</b>

### Development
In local machine this command is for start application

    npm install
    npm run dev
 #### Test
 Test the code with Jest

    npm run test

## Production
Run code on production

    npm run start
    
This application currently usable and works on AWS EC2.
### API

`[POST] http://ec2-35-159-5-227.eu-central-1.compute.amazonaws.com:3000/api/v1/records`
  #### Request Body Example:
      {  
        "startDate":"2016-01-11",
        "endDate": "2017-01-29",
        "minCount": 1000,
        "maxCount": 3000
       }
#### Curl:

      curl --request POST \
      --url http://ec2-35-159-5-227.eu-central-1.compute.amazonaws.com:3000/api/v1/records \
      --header 'content-type: application/json' \
      --data '{
      "startDate":"2016-01-11",
    	"endDate": "2017-01-29",
    	"minCount": 1000,
    	"maxCount": 3000
    }'
#### API Doc

  http://ec2-35-159-5-227.eu-central-1.compute.amazonaws.com:3000/documentation/

