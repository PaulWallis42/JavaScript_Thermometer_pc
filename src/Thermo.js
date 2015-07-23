var Thermostat = function(){

temp = 20;
powerSave = true;

};

Thermostat.prototype.temperature = function () {
  return temp;
};

Thermostat.prototype.up = function () {
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
