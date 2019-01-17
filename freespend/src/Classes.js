class ExpenseItem {
  constructor(input) {
    this.amount = 0 - Number(input);
    this.description = "";
  }

  edit(input, desc){
    this.amount = 0 - Number(input);
    this.description = desc;
  }
}

class Revenue {
  constructor(input) {
    this.amount = Number(input);
    this.description = "";
  }

  edit(input, desc){
    this.amount = Number(input);
    this.description = desc;
  }

}

class Fixed {
  constructor(input, desc) {
    this.amount = 0 - Number(input);
    this.description = desc;
  }

  edit(input, desc){
    this.amount = 0 - Number(input);
    this.description = desc;
  }
}

class Goal {
  constructor(input, desc){
    this.amount = Number(input);
    this.description = desc;
    this.currentAmount = 0;

  }

  addMoney(input){
    this.currentAmount += Number(input);
  }

  edit(input, desc){
    if(input){
   this.currentAmount = 0 - Number(input);
    }
    if (desc){
    this.description = desc;
    }
  }




}

export { Fixed };
export { ExpenseItem };
export default Revenue;
