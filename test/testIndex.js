'use strict';

const chai = require('chai');
const expect = chai.expect;

const index = require('../index');

describe('main module', () => {
  it('should return the input', () => {
    var result = index.toTest(1);
    expect(result).to.equal(2);
  });
});