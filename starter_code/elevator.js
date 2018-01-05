class Elevator {
  constructor() {
    this.floor = 0;
    this.direction = "up";
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
  }

  start() {
    this.startMode = setInterval(() => {
      this.update();
    }, 1000);

  }
  stop() {
    clearInterval(this.startMode);
  }

  update() {
    this.log();
    if (this.requests.length === 0) {
      this.stop();
    } else if {
      for (i = 0; i < this.requests.length; i++) {
        if (this.requests[i] == this.floor) {
          _passengersLeave();
          }
        }
      }
   else {
      for (i = 0; i < this.waitingList.length; i++) {
        if (this.waitingList[i] == this.floor) {
          _passengersEnter();
        }
      }
    }
  }

    _passengersEnter() {
      this.waitingList.forEach(function(person, index) {
        if (person.originFloor === this.floor) {
          this.passengers.push(person);
          this.requests.push(person.destinationFloor);
          this.waitingList.splice(index, 1);
          console.log(`${person.name} has enter the elevator`);
        }
      });
    }

    _passengersLeave() {
      this.requests.forEach(function(person, index) {
        if (person.destinationFloor === this.floor) {
          this.passengers.splice(index, 1);
          this.requests.splice(index, 1);
          console.log(`${person.name} has left the elevator`);
        }
      });
    }
    floorUp() {
      if (this.floor < this.MAXFLOOR) {
        this.floor = this.floor + 1;
      }
      this.direction = "up";
    }
    floorDown() {
      if (this.floor > 0) {
        this.floor = this.floor - 1;
      }
      this.direction = "down";
    }
    call(person) {
      this.waitingList.push(person);
      this.requests.push(person.originFloor);
    }
    log() {
      console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
    }
  }



  module.exports = Elevator;
