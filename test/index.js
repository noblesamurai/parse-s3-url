const expect = require('chai').expect;

const testUrl = 'https://s3.amazonaws.com/test/outr-drip%20space.mp4?AWSAccessKeyId=KEY&Expires=123&Signature=SIG';

const parseS3Url = require('..');

describe('parseS3Url', function () {
  it('should return false if it isn\'t', function () {
    expect(parseS3Url('http://not/an/s3.url')).to.equal(false);
  });

  it('should return false on null/invalid', function () {
    expect(parseS3Url('h')).to.equal(false);
    expect(parseS3Url(null)).to.equal(false);
  });

  it('should split out bucket, key if it is', function () {
    expect(parseS3Url(testUrl)).to.have.keys(['bucket', 'key']);
  });

  it('unescape the key', function () {
    expect(parseS3Url(testUrl).key).to.equal('outr-drip space.mp4');
  });
});
