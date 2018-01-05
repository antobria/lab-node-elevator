class Person {
  constructor(name, originFloor, destinationFloor){
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }
  callElevator(){
    if(this.originFloor > this.destinationFloor){
      let floors = this.originFloor - this.destinationFloor;
      for (i = 0; i < floors; i++){
        elevator.floorDown();
      }
    }
    if(this.originFloor < this.destinationFloor){
      let floors = this.originFloor + this.destinationFloor;
      for (i = 0; i < floors; i++){
        elevator.floorUp();
      }
    }
  }
}

module.exports = Person;
