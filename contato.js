// Seleciona o formulário
const form = document.getElementById('avaliacao-mentor');

// Adiciona um event listener para quando o formulário for enviado
form.addEventListener('submit', function(event) {
  event.preventDefault(); // previne o comportamento padrão do formulário

  // Seleciona os campos do formulário
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const feedback = document.getElementById('feedback').value;
  const checkboxDoubts = document.getElementById('checkbox-duvidas').checked;

  // Valida o campo de email
  if (!isValidEmail(email)) {
    alert('Por favor, digite um email válido.');
    return;
  }

  // Cria um objeto com os dados do formulário
  const formData = {
    name,
    lastName,
    email,
    feedback,
    checkboxDoubts
  };

  // Envie os dados do formulário para o servidor ou faça outra ação com eles
  console.log(formData);

  // Limpa o formulário
  form.reset();
});

// Função para validar o campo de email
function isValidEmail(email) {
  // Utilize uma expressão regular para validar o email
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

