describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('can have its temperature controlled', function(){

    it('starts at 20 degrees', function(){
      expect(thermostat.temperature()).toBe(20);
    });

    it('increase temp with the up button', function(){
      thermostat.up();
      expect(thermostat.temperature()).toBe(21);
    });

    it('decrease temp with down button', function(){
      thermostat.down();
      expect(thermostat.temperature()).toBe(19);
    });

    it('has a minimum temperature of 10 degrees', function(){
      for (i = 0; i < 10; i++) {
        thermostat.down()
      };
      expect(function() {thermostat.down() }).toThrow(new Error('Thermostat cannot go below 10 degrees'));
      expect(thermostat.temperature()).toBe(10);
    });

    it('can reset temp to 20 degrees at the press of a button', function(){
      thermostat.up();
      thermostat.resetTemp();
      expect(thermostat.temperature()).toBe(20);
    });

    it('Power saving mode is on by default', function(){
      expect(powerSave).toBe(true);
    });


  });
});
