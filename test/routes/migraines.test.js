const chai = require('chai')

chai.use(require('chai-http'))
const expect = chai.expect

const Migraine = require('../../back-end/models/Migraine')

const { app, runServer, closeServer } = require('../../back-end/server')

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
          expect(res).to.have.status(201)
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

    it('updates an existing migraine', function () {
      this.timeout(5000)

      return Migraine.create({
        intensity: 5,
        water: 3,
        triggers: ['food', 'sleep', 'stress'],
        journal: 'Test migraine created programmatically'
      })
        .then(migraine => {
          console.log('migraine on database');

          return chai.request(app)
          .put(`/migraines/${migraine.id}`)
          .send({
            intensity: 1,
            water: 8,
            journal: 'Updated journal post!!'
          })
          .end()

          console.log('request sent');
        })
        .then(res => {
          console.log('response received');
          expect(res).to.have.status(200);
          // expect(res.body).to.be.an('object');
          // expect(res.body).to.have.property('message').eql('Migraine post was updated!');
          // expect(res.body.migraine).to.have.property('intensity').eql(1);
          // expect(res.body.migraine).to.have.property('water').eql(8);
          // expect(res.body.migraine).to.have.property('journal').eql('Updated journal post!!');
          // expect(res.body.migraine).to.have.property('triggers').eql(['food', 'sleep', 'stress']);
        })
    })

    it('deletes an existing migraine', () => {
      return Migraine.create({
        intensity: 5,
        water: 3,
        triggers: ['testtrigger1', 'testtrigger2'],
        journal: 'adding migraine for delete tests'
      })
        .then(migraine => {
          return chai.request(app)
            .delete(`/migraines/${migraine.id}`)
            .end()
        })
        .then(res => expect(res).to.have.status(204))
    });
  });
});
