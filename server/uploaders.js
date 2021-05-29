const s3 = require('./s3');
const config = require('./config');
const {
  S3Uploader,
  FilesystemUploader,
} = require('./lib/gql-uploaders');

const s3AvatarUploader = new S3Uploader(s3, { 
  baseKey: 'users/avatars',
  uploadParams: {
    CacheControl: 'max-age:31536000',
    ContentDisposition: 'inline',
  },
});

const fsAvatarUploader = new FilesystemUploader({ 
  dir: config.app.storageDir, 
  filenameTransform: filename => `${Date.now()}_${filename}`, 
});

module.exports = { avatarUploader: fsAvatarUploader }; 