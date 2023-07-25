// process.env.NODE_ENV = 'test';

// import { NoteInstance } from '../models/notes.model';

// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import 'mocha';
// import app from '../app';

// chai.use(chaiHttp);

// describe('Books', () => {
//   /*
//    * Test the /GET route
//    */
//   // describe('/GET notes', () => {
//   //   it('it should GET all the notes', (done) => {
//   //     chai
//   //       .request(app)
//   //       .get('/')
//   //       .end((err, res) => {
//   //         res.should.have.status(200);
//   //         res.body.should.be.a('array');
//   //         res.body.length.should.be.eql(0);
//   //         done();
//   //       });
//   //   });
//   // });

//   describe('/GET notes', () => {
//     it('it should GET all the notes', (done) => {
//       return chai
//         .request(app)
//         .get('/api/notes')
//         .then((res) => {
//           chai.expect(res.text).to.eql('Welcome to our Todo API');

//           chai.expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });
// });
