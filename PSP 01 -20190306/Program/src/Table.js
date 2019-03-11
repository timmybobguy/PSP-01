class Table {
  constructor () {
	this.allMyValues = []
  }
  addNumber(value) {
	let newValue = new Value (value)
	this.allMyValues.push(newValue)
	return newValue
  }
}