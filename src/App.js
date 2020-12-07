import './App.css';
import {useState, useEffect} from "react"

function App() {

  let url = "https://pokeapi.co/api/v2/type/"
 
  let [data,setData] = useState([])
 
  let [pokemon,setPokemon] = useState([])
  let [num,setNum] = useState(0)
  let [nombresAleatorios,setNombresAleatorios] = useState(0)
  let [eleccion,setEleccion] = useState("")

  useEffect(function(){
   
    fetch(url).then(respuesta=>respuesta.json()).then(datos=>{
      setData(datos.results)
    })
  },[num])
  
  let mostrarTipo = data.map(tipo => {
    return(
<option value={tipo.url}>{tipo.name}</option>
    )
  })

 function tipoElegido(e) {  
   setEleccion(e.target.value)
   setNombresAleatorios(nombresAleatorios+1)
 }

 useEffect(function(){
  
  fetch(eleccion).then(respuesta=>respuesta.json()).then(datos=>{
    setPokemon(datos.pokemon)    
  })
},[nombresAleatorios])

 if ( pokemon.length !=0){
  return (<>
    <select  onChange={tipoElegido} name="select">
                <option value="--">--</option>
                 {mostrarTipo}
            </select> 
            <div>
              <ul>
                <li>{pokemon[parseInt(Math.random()*(pokemon.length))].pokemon.name}</li>
                <li>{pokemon[parseInt(Math.random()*(pokemon.length))].pokemon.name}</li>
                <li>{pokemon[parseInt(Math.random()*(pokemon.length))].pokemon.name}</li>
              </ul>
            </div>
  </>);
 } else {
  return (<>
    <select  onChange={tipoElegido} name="select">
                <option value="--">--</option>
                 {mostrarTipo}
            </select> 
  </>);

 }  
}

export default App;
