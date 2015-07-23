var Thermostat = function(){

temp = 20;
powerSave = true;

};

Thermostat.prototype.temperature = function () {
  return temp;
};

Thermostat.prototype.up = function () {
  if (powerSave === true && temp === 25) {
    throw new Error('Max 25 degrees whilst power save is on')
  };
  temp ++;
};

Thermostat.prototype.down = function () {
  if (temp === 10) {
    throw new Error('Thermostat cannot go below 10 degrees')
  };
  temp --;
};

Thermostat.prototype.resetTemp = function () {
  temp = 20;
};

Thermostat.prototype.powerSaveOff = function () {
  powerSave = false;
};

Thermostat.prototype.powerSaveOn = function () {
  powerSave = true;
};
