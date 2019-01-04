class Revenue {
  constructor(input) {
    this.amount = Number(input);
    this.description = "";
  }
}

class ExpenseItem {
  constructor(input) {
    this.amount = -input;
    this.description = "";
  }
}

export default Revenue;
