// import React from 'react';


// const Bemvindo = (props)=>{
//   return(
//     <div>
//       <h2>Bem vindo {props.nome}</h2>
//       <h3>tenho {props.idade} anos</h3>
//     </div>
//   )
// }
// function App(){
//   return(
//     <div>
//       <Bemvindo nome = "Lucas" anos="24"/>
//       <Bemvindo nome = "Maria" anos="30"/>
//     </div>
//   )
// }
// export default App;


// import React from 'react';
// const Equipe =(props)=>{
//   return (
//     <div>
//       <Sobre nome ={props.nome} cargo={props.cargo} idade={props.idade}/>
//       <Social fb={props.facebook}/>
//     </div>
//   )
// }

// const Sobre =(props)=>{
//   return(
//     <div>
//       <h2>Olá sou o {props.nome}</h2>
//       <h3>Cargo: {props.cargo}</h3>
//       <h3>Olá sou o {props.idade}</h3>
//     </div>
//   )
// }

// const Social = (props) =>{
//   return (
//     <div>
//       <a href={props.fb}>Facebook</a>
//       <a> LinkedIn</a>
//       <a> Youtube</a>
//     </div>
//   )
// }


// function App(){
//   return(
//     <div>
//       <Equipe nome = "Lucas" cargo="programador" anos="24" facebook="https://www.facebook.com/?locale=pt_BR"/>
//       <Equipe nome = "Maria" cargo="Designer" anos="30" facebook="https://www.facebook.com/?locale=pt_BR"/>
//     </div>
//   )
// }
// export default App;

// Class components
// import React, {components} from 'react';

// class Equipe extends Component{
//   render(){
//     return (
//       <div>
//         <Sobre nome = {this.props.name} cargo={this.props.cargo}
//         idade={this.props.idade}/>
//       </div>
//     )
//   }
// }

// const Social = ()=>{
//   return(
//     <div>
//       <a>Facebook</a>
//       <a>Facebook</a>
//     </div>
//   )
// }

// function App(){
//   return(
//     <div>
//       <h1>Conheça nossa equipe:</h1>
//       <Equipe nome="Matheus" cargo="programador" idade="24"/>
//       <Equipe nome="Maria" cargo="dba" idade="30"/>
//     </div>
//   );
// }

// export default App;

// Trabalhando com states
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nome: 'Matheus',
//       contador: 0,
//     };
//     this.aumentar = this.aumentar.bind(this);
//     this.diminuir = this.diminuir.bind(this);
//   }

//   aumentar() {
//     this.setState((prevState) => ({
//       contador: prevState.contador + 1,
//       nome: 'Jose',
//     }));
//   }

//   diminuir() {
//     this.setState((prevState) => {
//       if (prevState.contador === 0) {
//         alert('Opa, chegou a zero');
//         return prevState; 
//       }
//       return {
//         contador: prevState.contador - 1,
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Contador</h1>
//         {this.state.nome}
//         <h3>
//           <button onClick={this.diminuir}>-</button>
//           {this.state.contador}
//           <button onClick={this.aumentar}>+</button>
//         </h3>
//       </div>
//     );
//   }
// }

// export default App;

// Ciclos de vidas
// import React, {Component} from 'react';

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state={
//       hora:'00;00:00'
//     };
//   }

//   componentDidMount(){
//     setInterval(()=>{
//       this.setState({hora: new Date().toLocaleTimeString()})
//     },1000)
//   }
// }

// componentDidUpdate(){
//   console.log('Atualizou!!')
// }

// render(){
//   return(
//     <div>
//       <h1>Meu projeto {this.StaticRange.hora}</h1>
//     </div>
//   )
// }

// export default App;
// import React, { Component } from "react";
// import Membro from "./Membro"; 

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             status: false
//         };
//     }

//     toggleLogin = () => {
//         this.setState((prevState) => ({ status: !prevState.status }));
//     };

//     render() {
//         return (
//             <div>
//                 {this.state.status ? (
//                     <div>
//                         <h2>Bem vindo ao sistema</h2>
//                         <Membro />
//                     </div>
//                 ) : (
//                     <div>
//                         <h2>Olá visitantes, faz o login</h2>
//                         <button onClick={this.toggleLogin}>Login</button>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

// export default App;

// import React, {Component} from "react";

// class App extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             status:false
//         };
//         this.sair = this.sair.bind(this);
//         this.entrar = this.entrar.bind(this);

//     }

//     sair(){
//         this.setState({status:false})
//     }
// }

// entrar(){
//     this.setState({status:true});
// }

// render(){
//     return(
//         <div>
//             {this.state.status ?
//         <div>
//             <h2>Bem vindo ao sistema</h2>
//             <button onClick={this.sair}>sair</button>  
//         </div>;
//         <div>
//             <h2>Olá visitantes, faz o login</h2>
//             <button onClick={this.entrar}>Entrar no sistemas</button>
//         </div>  
//         }
//          </div>
//     )
// }
// export default App;

// import React, {Component} from "react";
// class App extends Component{

//     constructor(props){
//         super(props);
//         this,state = {
//             email:'',
//             senha:''
//         }
//         this.trocaEmail = this.trocaEmail.bind(this);
//         this.trocaSexo = this.trocaSexo.bind(this);
//     }

//     trocaEmail(e){
//         let valorDigitado = e.target.value;
//         this.setState({email:valorDigitado});
//     }

//     trocaSexo(e){
//         let valorDigitado = e.target.value;
//         this.setState({sexo:e.target.value});
//     }
// }

// render(){
//     return(
//         <div>
//             <h2>Login</h2>
//             email:
//             <input type="email" name="email" value={this.state.email}
//             onChange={this.trocaEmail}/>

//             senha:
//             <input type="text" name="senha" value={this.state.senha}
//             onChange={(e) => this.setState ({senha:e.target.value})}/>

//             sexo:
//             <select name="sexo" value={this,state,sexo} onChange ={this.trocaSexo}>
//                 <option value="masculino">Masculino</option>
//                 <option value="Feminino">Feminino</option>
//             </select>

//         <div>
//             <h3>{this.state.email}</h3>
//             <h3>{this.state.senha}</h3>
//             <h3>{this.state.sexo}</h3>
//         </div>

//         </div>
//     )
// }
// export default App;