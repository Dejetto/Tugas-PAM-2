const Arithmetics = {
        add: (a, b) => {
            return `${a} + ${b} = ${a + b}`;
        },
        subtract: (a, b) => {
            return `${a} - ${b} = ${a - b}`
        },
        multiply: (a, b) => {
            return `${a} * ${b} = ${a * b}`
        },
        division: (a, b) => {
            if (b != 0) return `${a} / ${b} = ${a / b}`;
            return `Cannot Divide by Zero!!!`;
        }
  
    }
  
    console.log(Arithmetics.add(100, 100) + "<br>");
    console.log(Arithmetics.subtract(100, 7) + "<br>");
    console.log(Arithmetics.multiply(5, 5) + "<br>");
    console.log(Arithmetics.division(100, 5));