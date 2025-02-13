const factorial = (n) => {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
};

const factorialRec = (n) => {
  if (n === 0) return 1;
  return n * factorialRec(n - 1);
};

console.log(factorialRec(5));

// factorial(n)
// n * factorial(n - 1);
// n * (n - 1) * factorail(n - 2);
// n * (n - 1) * (n - 2) * factorial(n - 3);
//

// n * (n - 1) * (n - 2) * (n - 3) * ...... * factorail(0)

[
  {
    name: "Faga",
    childs: [
      {
        name: "Hero",
        childs: ["FDSS"],
      },
      {
        name: "Jrio",
      },
    ],
  },
  {
    name: "Beru",
  },
];

const Component = ({ name, childs }) => {
  return (
    <div>
      <p>{name}</p>
      {childs.map((item) => {
        return <Component {...item} />;
      })}
    </div>
  );
};
