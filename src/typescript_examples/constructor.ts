function Fish(this: Fish, name: string) {
  this.name = name
}
Fish.prototype.myName = function(this: Fish) { console.log('hi my name is ', this.name) }

const andy = new Fish('andy')
