import { useState } from "react"

 function App(){
 
  const[nome, setNome] = useState('Geovana')

  const Formulario = () => {

   
      
<> 
<h3>Formulário</h3>
<div>
<h3> Pizzaria 2D</h3>
<input
className="nome"
onChange ={(e)=>{setNome (e.target.value)}}
type="text" />
 
  <button
  className="botao"
onClick={()=>{
  alert('O nome digitado foi' + nome )
    }
  }
>
  CLIQUE AQUI
  <div>
 </button>
 <h3>Pizzaria 2D</h3>
 <p>texto do paragrafo</p>
<img src={} />
 <Formulario />
 <Formulario />
 <Formulario />
 <Formulario />

   </div>
 ) 
}

export default App