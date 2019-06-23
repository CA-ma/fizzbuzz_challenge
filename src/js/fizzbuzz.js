function FizzBuzz() {
    this.check = (number) => {
        if (number % 15 === 0) {
            return 'FizzBuzz!';
        }
        else if (number % 5 === 0) {
            return 'Buzz.';
        } 
        else if (number % 3 === 0) {
            return 'Fizz.';
        } 
        else {
            return "Try again.";
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
} 