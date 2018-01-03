class Elevator {
  constructor() {
    this.floor = 0;
    this.direction = [];
    this.MAXFLOOR = 10;
    this.requests = [];
  }

  start() {
    setInterval(this.update(), 1000);
  }
  stop() {
    clearInterval(this.start());
  }

  update() {
    this.log();
  }

  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {}
  floorDown() {}
  call() {}
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
