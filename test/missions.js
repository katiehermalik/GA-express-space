const chai = require('chai');
const supertest = require('supertest');
const app = require('../server');
const should = chai.should()
const cheerio = require('cheerio');

describe('mission routes', function(){
    it('displays the missions at the index route', function(done){
        supertest(app)
            .get('/missions')
            .expect(200)
            .expect((response)=>{
                const $ = cheerio.load(response.text);
                $('.missions li:first-child').text().should.be.eq('Curiosity')
                $('.missions li:last-child').text().should.be.eq('Rosetta');
            })
            .end(done);
    })
    it('displays a specific mission by index', function(done){
        supertest(app)
        .get('/missions/0')
        .expect(200)
        .expect((response)=>{
            const $ = cheerio.load(response.text);
            $('body').text().includes("Curiosity").should.be.eq(true);
            $('body').text().includes("26 Nov 2011").should.be.eq(true);
            $('body').text().includes("Opportunity").should.be.eq(false);
        })
        .end(done)
    })
})