const expect = require('chai').expect;

const testUrl = 'https://s3.amazonaws.com/contentsamurai.com/transcoded/1-1/uploads/users/848384/videos/a12ee30e-7267-4da8-b5d8-899dc728f902/outr-drip%20space.mp4?AWSAccessKeyId=AKIAJC2SSEDWQDBZ56UA&Expires=1519259943&Signature=BHjeZc49yH9EBwg3BuZDuHh%2BW3g%3D';

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
    expect(parseS3Url(testUrl).key).to.equal('transcoded/1-1/uploads/users/848384/videos/a12ee30e-7267-4da8-b5d8-899dc728f902/outr-drip space.mp4');
  });
});
