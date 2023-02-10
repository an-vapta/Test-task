import { useState , useMemo } from 'react';


function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

 const Contact =() =>  {

  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => factorialOf(number), [number]);
  
  console.log(factorial , "factorialfactorialfactorialfactorial")
  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = (e) => {
   e.preventDefault();
    setInc(i => i + 1);
  }
  return (
    <div>
      Factorial of 
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={(e)=>onClick(e)}>Re-render</button>
    </div>
  );
}



export default Contact;
