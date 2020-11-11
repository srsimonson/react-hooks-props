// import logo from '../logo.svg';
import './App.css';

// function Lake({name}) {
//   return (
//     <h1>{name}</h1>
//   )
// }

// Array destructuring
const lakeList = ['Echo Lake', 'Lake Eerie', 'Lake Pepin']
const [first,, third] = [ 'Echo Lake', 'Lake Eerie', 'Lake Pepin' ]
console.log('first,, third: ',first, third);


function App({lakes}) {
  
  return (
    <div>
      {/* <Lake name="Lake Tahoe"/>
      <Lake name="Angora"/>
      <Lake name="Pepin"/> */}


      {/* Map function */}
      {/* <ul>
        {lakes.map(lake =>
          <li>{lake}</li>)}
      </ul> */}

      {/* Map through Array of Objects */}
      <div> 
        {lakes.map(lake=> (
          <div key={lake.id}>
            <h2>{lake.name}</h2>
            <p>Accessed by: {lake.trailhead}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
