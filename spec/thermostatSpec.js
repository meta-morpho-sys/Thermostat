'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
// Customer requirement #1 Thermostat starts at 20 degrees
  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });
});
