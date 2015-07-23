var Thermostat = function(){

temp = 20;
powerSave = true;

};

Thermostat.prototype.temperature = function () {
  return temp;
};

Thermostat.prototype.up = function () {
  if (powerSave === true && temp === 25 || powerSave === false && temp === 32) {
    throw new Error('It is too hot!')
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
