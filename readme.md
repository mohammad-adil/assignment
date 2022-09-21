# Assigment by Insuredmine

This is a directory created for the assignment that was given by Insuremine as a part of Selection process.

## Modules

*User
*LOB
*Policy
*Carrier
*message
*upload
\*agent

## Installation

```
# To install the pakages run:
npm i
```

## Run

```
# To Run the Project you can use any of the following:
1. npm run dev
2. npm start
```

## APIs

> I have made the following APIs as per the requirement asked:

> > 1. Upload Date to Database:

```
[POST]localhost:port/upload
E.G http://localhost:7000/upload
```

- The API need to have a csv file as attachment with keyword 'upload'
  > > 2.  Add Message/Schedule a Message:

```
[POST]localhost:port/message
E.G http://localhost:7000/message
```

- The API has two body parameters:
  - message.
  - scheduleDate.

> > 3.  Get All policies:

```
[GET]localhost:port/policy
E.G http://localhost:7000/policy
```

> > 4.  Get Policy by UserNamee:

```
[GET]localhost:port/policy/getByUser/<<username>>
E.G http://localhost:7000/policy/getByUser/Carie Merlos
```


> > 5.  Get All users with policies:

```
[GET]localhost:port/user/policies
E.G http://localhost:7000/user/policies
```

## Further the Postman Collection can be imported from the URL below:

URL: https://documenter.getpostman.com/view/16423791/2s7YtWDDUL

## By default I have disabled the server close after 70 % utalization.
>> To enable uncomment the Line N0 21 in Server.js
