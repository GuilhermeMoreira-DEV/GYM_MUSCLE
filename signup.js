let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')
let cep = document.querySelector('#cep')
let labelCep = document.querySelector('#labelCep')
let validCep = false

let estado = document.querySelector('#estado')
let labelEstado = document.querySelector('#labelEstado')
let validEstado = false

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade = false

let bairro = document.querySelector('#bairro')
let labelBairro = document.querySelector('#labelBairro')
let validBairro = false

let rua = document.querySelector('#rua')
let labelRua = document.querySelector('#labelRua')
let validRua = false

let numeroCasa = document.querySelector('#numeroCasa')
let labelNumeroCasa = document.querySelector('#labelNumeroCasa')
let validNumeroCasa = false


nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})
cep.addEventListener('keyup', () => {
  if(cep.value.length < 8){
    labelCep.setAttribute('style', 'color: red')
    labelCep.innerHTML = 'CEP *Insira um CEP válido (8 dígitos)'
    cep.setAttribute('style', 'border-color: red')
    validCep = false
  } else {
    labelCep.setAttribute('style', 'color: green')
    labelCep.innerHTML = 'CEP'
    cep.setAttribute('style', 'border-color: green')
    validCep = true
  }
})
estado.addEventListener('keyup', () => {
  if(estado.value.length <= 1){
    labelEstado.setAttribute('style', 'color: red')
    labelEstado.innerHTML = 'Estado *Insira a sigla do estado'
    estado.setAttribute('style', 'border-color: red')
    validEstado = false
  } else {
    labelEstado.setAttribute('style', 'color: green')
    labelEstado.innerHTML = 'Estado'
    estado.setAttribute('style', 'border-color: green')
    validEstado = true
  }
})
cidade.addEventListener('keyup', () => {
  if(cidade.value.length <= 2){
    labelCidade.setAttribute('style', 'color: red')
    labelCidade.innerHTML = 'Cidade *Insira no mínimo 3 caracteres'
    cidade.setAttribute('style', 'border-color: red')
    validCidade = false
  } else {
    labelCidade.setAttribute('style', 'color: green')
    labelCidade.innerHTML = 'Cidade'
    cidade.setAttribute('style', 'border-color: green')
    validCidade = true
  }
})
  bairro.addEventListener('keyup', () => {
    if(bairro.value.length <= 2){
      labelBairro.setAttribute('style', 'color: red');
      labelBairro.innerHTML = 'Bairro *Insira no mínimo 1 caracteres';
      bairro.setAttribute('style', 'border-color: red');
    } else {
      labelBairro.setAttribute('style', '');
      labelBairro.innerHTML = 'Bairro';
      bairro.setAttribute('style', '');
    }
    
})
rua.addEventListener('keyup', () => {
  if(rua.value.length <= 2){
    labelRua.setAttribute('style', 'color: red');
    labelRua.innerHTML = 'Rua *Insira no mínimo 3 caracteres';
    rua.setAttribute('style', 'border-color: red');
  } else {
    labelRua.setAttribute('style', '');
    labelRua.innerHTML = 'Rua';
    rua.setAttribute('style', '');
  }
  
})
numeroCasa.addEventListener('keyup', () => {
  if(numeroCasa.value.length <= 2){
    labelNumeroCasa.setAttribute('style', 'color: red');
    labelNumeroCasa.innerHTML = 'NumeroCasa *Insira no mínimo 3 caracteres';
    numeroCasa.setAttribute('style', 'border-color: red');
  } else {
    labelNumeroCasa.setAttribute('style', '');
    labelNumeroCasa.innerHTML = 'numerocasa';
    numeroCasa.setAttribute('style', '');
  }
  })


function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value,
      cepCad: cep.value,
      estadoCad:estado.value,
      cidadeCad: cidade.value,
      bairroCad: bairro.value,
      ruaCad: rua.value,
      numeroCasaCad: numeroCasa.value


    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = './index.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})



  
  
