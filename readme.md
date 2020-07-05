# Case Study

  #### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

This application written with Node.js and Express framework.

#### Environment
Before the starting application .env file should be create. You need two db for this case. One of them for the production, other one is for the test.

>mongodb+srv://challengeUser:< password >@challenge-xzwqd.h8adk.mongodb.net/getir-case-study?retryWrites=true&w=majority

>mongodb+srv://challengeUser:< password >@challenge-xzwqd.h8adk.mongodb.net/test?retryWrites=true&w=majority

#### Development
In local machine this command is for start application

    npm run dev
 #### Test
 Test the code with Jest

    npm run test

 
### API

 
`[POST] http://localhost:3000/api/v1/records`
  #### Request Body Example:
      {  
        "startDate":"2016-01-11",
        "endDate": "2017-01-29",
        "minCount": 1000,
        "maxCount": 3000
       }
#### Curl:

      curl --request POST \
      --url http://localhost:3000/api/v1/records \
      --header 'content-type: application/json' \
      --data '{
      "startDate":"2016-01-11",
    	"endDate": "2017-01-29",
    	"minCount": 1000,
    	"maxCount": 3000
    }'

