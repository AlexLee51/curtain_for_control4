// Example Window Covering Plugin

module.exports = (api) => {
  api.registerAccessory('ExampleWindowCoveringPlugin', ExampleWindowCoveringAccessory);
};

class ExampleWindowCoveringAccessory {

  constructor(log, config, api) {
      this.log = log;
      this.config = config;
      this.api = api;

      this.Service = this.api.hap.Service;
      this.Characteristic = this.api.hap.Characteristic;

      // extract name from config
      this.name = config.name;

      // create a new Window Covering service
      this.service = new this.Service(this.Service.WindowCovering);

      // create handlers for required characteristics
      this.service.getCharacteristic(this.Characteristic.CurrentPosition)
        .onGet(this.handleCurrentPositionGet.bind(this));

      this.service.getCharacteristic(this.Characteristic.PositionState)
        .onGet(this.handlePositionStateGet.bind(this));

      this.service.getCharacteristic(this.Characteristic.TargetPosition)
        .onGet(this.handleTargetPositionGet.bind(this))
        .onSet(this.handleTargetPositionSet.bind(this));

  }

  /**
   * Handle requests to get the current value of the "Current Position" characteristic
   */
  handleCurrentPositionGet() {
    this.log.debug('Triggered GET CurrentPosition');

    // set this to a valid value for CurrentPosition
    const currentValue = 1;

    return currentValue;
  }


  /**
   * Handle requests to get the current value of the "Position State" characteristic
   */
  handlePositionStateGet() {
    this.log.debug('Triggered GET PositionState');

    // set this to a valid value for PositionState
    const currentValue = this.Characteristic.PositionState.DECREASING;

    return currentValue;
  }


  /**
   * Handle requests to get the current value of the "Target Position" characteristic
   */
  handleTargetPositionGet() {
    this.log.debug('Triggered GET TargetPosition');

    // set this to a valid value for TargetPosition
    const currentValue = 1;

    return currentValue;
  }

  /**
   * Handle requests to set the "Target Position" characteristic
   */
  handleTargetPositionSet(value) {
    this.log.debug('Triggered SET TargetPosition:' value);
  }

}