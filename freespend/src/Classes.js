class ExpenseItem {
  constructor(input) {
    this.amount = 0 - Number(input);
    this.description = "";
  }
}

class Revenue {
  constructor(input) {
    this.amount = Number(input);
    this.description = "";
  }
}

class Fixed {
  constructor(input, desc) {
    this.amount = Number(input);
    this.description = desc;
  }
}

export { Fixed };
export { ExpenseItem };
export default Revenue;
