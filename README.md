

# Nodejs_awss3_file_upload_example
aws s3 file upload example with nodejs-expressjs

<br />

## Manual Installation

- clone this project
- npm install
- Create .env file --> example : 

AWS_ACCESS_KEY_ID = YOUR ACCESS KEY HERE

AWS_SECRET_ACCESS_KEY = YOUR SECRET ACCESS KEY HERE

AWS_BUCKET_NAME = YOUR BUCKET NAME HERE

API_PORT = YOUR PORT HERE

- npm start

<br />

<br />

## Example Image upload Post Request with Postman 

Url : http://localhost:YOURPORT/api/image-upload

choose Body -> form-data 

key name --> singlefile and select keytype is File
value --> select file 

Send and check your aws bucket --> object --> single/ 

<br />

