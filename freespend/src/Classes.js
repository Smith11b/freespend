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
  constructor(input) {
    this.amount = Number(input);
    this.description = "";
  }
}

export {Fixed};
export {ExpenseItem};
export default Revenue;
