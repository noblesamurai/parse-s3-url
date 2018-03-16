const { URL } = require('url');
module.exports = function parseS3Url (url) {
  const u = new URL(url);
  if (u.host !== 's3.amazonaws.com') return false;

  const regex = /^\/([^/]+)\/(.*)$/;
  const match = u.pathname.match(regex);
  if (!match) return false;
  const [ , bucket, key ] = match;
  return { bucket, key };
};
