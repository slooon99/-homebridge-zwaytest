// Example Heater Cooler Plugin

module.exports = (api) => {
  api.registerAccessory('ExampleHeaterCoolerPlugin', ExampleHeaterCoolerAccessory);
};

class ExampleHeaterCoolerAccessory {

  constructor(log, config, api) {
      this.log = log;
      this.config = config;
      this.api = api;

      this.Service = this.api.hap.Service;
      this.Characteristic = this.api.hap.Characteristic;

      // extract name from config
      this.name = config.name;

      // create a new Heater Cooler service
      this.service = new this.Service(this.Service.HeaterCooler);

      // create handlers for required characteristics
      this.service.getCharacteristic(this.Characteristic.Active)
        .on('get', this.handleActiveGet.bind(this))
        .on('set', this.handleActiveSet.bind(this));

      this.service.getCharacteristic(this.Characteristic.CurrentHeaterCoolerState)
        .on('get', this.handleCurrentHeaterCoolerStateGet.bind(this));

      this.service.getCharacteristic(this.Characteristic.TargetHeaterCoolerState)
        .on('get', this.handleTargetHeaterCoolerStateGet.bind(this))
        .on('set', this.handleTargetHeaterCoolerStateSet.bind(this));

      this.service.getCharacteristic(this.Characteristic.CurrentTemperature)
        .on('get', this.handleCurrentTemperatureGet.bind(this));

  }

  /**
   * Handle requests to get the current value of the "Active" characteristic
   */
  handleActiveGet(callback) {
    this.log.debug('Triggered GET Active');

    // set this to a valid value for Active
    const currentValue = 1;

    callback(null, currentValue);
  }

  /**
   * Handle requests to set the "Active" characteristic
   */
  handleActiveSet(value, callback) {
    this.log.debug('Triggered SET Active:' value);

    callback(null);
  }

  /**
   * Handle requests to get the current value of the "Current Heater Cooler State" characteristic
   */
  handleCurrentHeaterCoolerStateGet(callback) {
    this.log.debug('Triggered GET CurrentHeaterCoolerState');

    // set this to a valid value for CurrentHeaterCoolerState
    const currentValue = 1;

    callback(null, currentValue);
  }


  /**
   * Handle requests to get the current value of the "Target Heater Cooler State" characteristic
   */
  handleTargetHeaterCoolerStateGet(callback) {
    this.log.debug('Triggered GET TargetHeaterCoolerState');

    // set this to a valid value for TargetHeaterCoolerState
    const currentValue = 1;

    callback(null, currentValue);
  }

  /**
   * Handle requests to set the "Target Heater Cooler State" characteristic
   */
  handleTargetHeaterCoolerStateSet(value, callback) {
    this.log.debug('Triggered SET TargetHeaterCoolerState:' value);

    callback(null);
  }

  /**
   * Handle requests to get the current value of the "Current Temperature" characteristic
   */
  handleCurrentTemperatureGet(callback) {
    this.log.debug('Triggered GET CurrentTemperature');

    // set this to a valid value for CurrentTemperature
    const currentValue = 1;

    callback(null, currentValue);
  }


}