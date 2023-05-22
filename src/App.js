import "./App.css";

function App() {
  let numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return (
    <div className="App">
      <h1>FizzBuzz</h1>
      <p>
        Write a program that prints the numbers from 1 to 100. But for multiples
        of three print “Fizz” instead of the number and for the multiples of
        five print “Buzz”. For numbers which are multiples of both three and
        five print “FizzBuzz”.
      </p>
      <h3>Result :</h3>
      <div className="Result">
        {numbers.map((number, index) => {
          let value = index + 1;
          if (value % 3 === 0 && value % 5 !== 0) {
            return (
              <p className="Number" key={index}>
                Fizz
              </p>
            );
          } else if (value % 5 === 0 && value % 3 !== 0) {
            return (
              <p className="Number" key={index}>
                Buzz
              </p>
            );
          } else if (value % 3 === 0 && value % 5 === 0) {
            return (
              <p className="Number" key={index}>
                FizzBuzz
              </p>
            );
          } else {
            return (
              <p className="Number" key={index}>
                {number}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
