let fila = []


function exibirMenu() {
  let menu = `
    1. Novo paciente
    2. Consultar paciente
    3. Sair
    Pacientes na fila:
  `
  

  if (fila.length === 0) {
    menu += "Nenhum paciente na fila."
  } else {
    fila.forEach((paciente, index) => {
      menu += `\n${index + 1}º ${paciente}`
    })
  }

  let opcao = parseInt(prompt(menu))
  
  switch (opcao) {
    case 1:
      adicionarPaciente()
      break
    case 2:
      consultarPaciente()
      break
    case 3:
      alert("Saindo...")
      break
    default
      alert("Opção invalida! Tente novamente.")
      exibirMenu()
      break;
  }
}

function adicionarPaciente() {
  let nomePaciente = prompt("Informe o nome do novo paciente:")
  
  if (nomePaciente) {
    fila.push(nomePaciente);
    alert(`Paciente ${nomePaciente} adicionado à fila.`)
  } else {
    alert("Nome do paciente não informado.")
  }

  exibirMenu()
}


function consultarPaciente() 
  if (fila.length === 0) {
    alert("Não há pacientes na fila.")
  } else {
    let pacienteConsultado = fila.shift()
    alert(`Paciente consultado: ${pacienteConsultado}`)
  

  exibirMenu()
}


exibirMenu()
