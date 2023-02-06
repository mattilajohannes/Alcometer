import { useState } from 'react';
import './App.css';

function App() {


  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);


  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let gramsleft = grams - (burning * time);



  
  function handleSubmit(e){
    e.preventDefault();
    let alcohollevel = 0;
    if (gender === 'male') {
      alcohollevel = gramsleft / (weight * 0.7);
    }
    else {
      alcohollevel = gramsleft / (weight * 0.6);
    }
    if (alcohollevel < 0) {
      alcohollevel = 0;
    }
    setResult(alcohollevel);
  }



  return (
    <>
    <h3>Calculating alcohol blood level</h3>
    <form onSubmit = {handleSubmit}>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Bottles</label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
      <label>Time</label>
        <select name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(1)}</output>
      </div>
        <button>Calculate</button>
        </form>
    

    </>

  );
}

export default App;
