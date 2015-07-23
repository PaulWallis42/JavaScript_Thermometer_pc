describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('can', function(){

    it('start at 20 degrees', function(){
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
    });

    it('can reset temp to 20 degrees at the press of a button', function(){
      thermostat.up();
      thermostat.resetTemp();
      expect(thermostat.temperature()).toBe(20);
    });

    it('Power saving mode is on by default', function(){
      expect(powerSave).toBe(true);
    });

    it('Power saving mode can be turned off', function(){
      thermostat.powerSaveOff();
      expect(powerSave).toBe(false);
    });

    it('Power saving can be turend on', function(){
      thermostat.powerSaveOff();
      thermostat.powerSaveOn();
      expect(powerSave).toBe(true);
    });

    it('Temp can not exceed 25 degrees with power save on', function(){
      for (i = 0; i < 5; i++) {
        thermostat.up();
      };
      expect(function() {thermostat.up() }).toThrow(new Error('Max 25 degrees whilst power save is on'));
    });

  });
});
