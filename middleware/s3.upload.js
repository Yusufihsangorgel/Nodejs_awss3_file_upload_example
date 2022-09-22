const multer = require('multer');
const multerS3 = require('multer-s3-transform');
const aws = require('aws-sdk');

const { AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY ,AWS_BUCKET_NAME  } = process.env;

const S3 = new aws.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

const upload = multer({
    storage: multerS3({
        s3: S3,
        bucket: AWS_BUCKET_NAME,
        acl: 'public-read',
        key: function (req, file, cb) {
            if (file.fieldname == "singlefile") {
                cb(null, "single/" + file.originalname);
            }
            else if (file.fieldname == "multiplefiles") {
                cb(null, "multiple/" + file.originalname);
            }
        }
    })
});

module.exports = upload.fields([{ name: 'singlefile', maxCount: 1 }, { name: 'multiplefiles', maxCount: 5 }]);