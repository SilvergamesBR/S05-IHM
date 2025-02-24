// objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false , horaReserva : null , horaDevolução: null},
  { id: 2, formato: "padrao", status: true, acessivel: false , horaReserva : null , horaDevolução: null},
  { id: 3, formato: "padrao", status: true, acessivel: false , horaReserva : null , horaDevolução: null},
  { id: 4, formato: "padrao", status: false, acessivel: true , horaReserva : null , horaDevolução: null},
  { id: 5, formato: "padrao", status: false, acessivel: true , horaReserva : null , horaDevolução: null},
  { id: 6, formato: "duplo", status: true, acessivel: true , horaReserva : null , horaDevolução: null},
  { id: 7, formato: "duplo", status: false, acessivel: true , horaReserva : null , horaDevolução: null},
  { id: 8, formato: "duplo", status: false, acessivel: true , horaReserva : null , horaDevolução: null},  
];

// função para reserva do armário, incluindo as regras.
function reservarArmario() {
  
  // obter tipo de armário selecionado pelo usuário no html.
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  
  // na lista, filtrar apenas os armários que estão disponíveis e que são acessiveis ao usuário.
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);
  
  // caso não exista armário disponível, retorna para o usuário mensagem.
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }
  
  // Caso exista armário(s) disponíveil, seguimos sorteando uma opção. 
  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  
  // Depois localizamos o armário emprestado na lista de armarios e mudamos o status do armário.
  let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id);
  armarioEmprestado.status = false;

  let refDate = new Date();

  armarioEmprestado.horaReserva = refDate;

  armarioEmprestado.horaDevolução = new Date(refDate.getTime() + 24 * 60 * 60 * 1000);
  
  // Finalmente, mudamos a pendencia do usuário para verdadeira.
  usuario.pendencia = true;
  
  // Impmimimos uma mensagem de reserva para o usuário.
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso!
  \nA chave deve ser devolvida as ${armarioEmprestado.horaDevolução.getHours()}:${armarioEmprestado.horaDevolução.getMinutes()}, do dia ${armarioEmprestado.horaDevolução.getDate()} do mês ${armarioEmprestado.horaDevolução.getMonth()+1}`;

  console.log(usuario);
  console.log(armarios);

}