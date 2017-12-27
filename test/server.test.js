const chai = require('chai');
const { app, runServer, closeServer } = require('../src/server');

chai.use(require('chai-http'));
chai.should();

describe('Brain Storm app', function() {

  beforeEach(runServer);
  afterEach(closeServer);

  xit('Brain Storm app opens on server', function(done) {
   return chai.request(app)
    .get('/')
    .end(function(err, res) {
      res.should.have.status(200);
      res.should.be.html});
      done();
      });

  it('does something that is not implemented yet');

  xit('should list all entries on GET', function() {
    return chai.request(app)
      .get('/user-entry')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.length.should.be.above(0);
        res.body.forEach(function(item) {
          item.should.be.a('object');
          item.should.have.all.keys('id', 'title', 'content', 'author');
      });
    });
  });


});
