// tests for the migraines router
// - [ ] Creating a route
// - [ ] Updating a route
// - [ ] Deleting a route
// - [ ] Querying routes

const chai = require('chai')

chai.use(require('chai-http'))
const expect = chai.expect

const Migraine = require('../../back-end/models/Migraine')

const { app, runServer, closeServer } = require('../../back-end/server')

// ./node_modules/.bin/mocha ./test/routes/migraines.test.js

describe('Migraines router', () => {
  before(runServer)
  after(closeServer)

  describe('/migraines', () => {
    it('exposes a list of migraines', () => {
      return chai.request(app)
        .get('/migraines')
        .then(res => {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body).to.be.an('array')
        })
    })
    it('creates a new migraine', () => {
      const newMigraine = new Migraine({
        intensity: 5,
        water: 3,
        triggers: ['testtrigger1', 'testtrigger2'],
        journal: 'test new migraine entry'
      });
      return chai.request(app)
        .post('/migraines')
        .send(newMigraine)
        .then(function(res) {
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body.id).to.not.equal(null)
        })
    })
  })

  describe('/migraines/:id', () => {
    it('exposes a single migraine', () => {
      const migraine = new Migraine({
        intensity: 5,
        water: 3,
        triggers: ['testing', 'test', 'tests'],
        journal: 'Test migraine created programmatically'
      })
      return migraine.save()
        .then(() => {
          return chai.request(app)
            .get(`/migraines/${migraine._id}`)
        })
        .then(res => {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body).to.be.an('object')
        })
      })

    it('updates an existing migraine', () => {
      const migraine = new Migraine({
        intensity: 5,
        water: 3,
        triggers: ['food', 'sleep', 'stress'],
        journal: 'Test migraine created programmatically'
      })
      migraine.save((err, migraine) => {
        return chai.request(app)
        .put('/migraine' + migraine.id)
        .send({
          intensity: 1,
          water: 8,
          journal: 'Updated journal post!!'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('message').eql('Migraine post was updated!');
          res.body.migraine.should.have.property('intensity').eql(1);
          res.body.migraine.should.have.property('water').eql(8);
          res.body.migraine.should.have.property('journal').eql('Updated journal post!!');
          res.body.migraine.should.have.property('triggers').eql(['food', 'sleep', 'stress']);
        })
        })
      })
    })

    it('deletes an existing migraine', () => {
      const migraine = new Migraine ({intensity: 5, water: 3, triggers: ['testtrigger1', 'testtrigger2'], journal: 'adding migraine for delete tests'})
      migraine.save((err, migraine) => {
        return chai.request(app)
        .delete('/migraines/' + migraine.id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('message').eql('Migraine successfully deleted!');
        });
      });
    });

  });
