Uploads --
GET /upload/:filePath  -- inserts data from csv into DB. Hardcoded filepath internally.


Policy --

GET /policy -- returns all Aggregated policies 

GET /policy/getByUser/:userName -- returns Policy Info by username


User --

GET /user/policies -- returns all users with their policies


Message --

POST /message -- takes message and date time in DD-MM-YYYYTHH:mm:SS format and inserts said message at specified date time