const url = 'https://raw.githubusercontent.com/joaoguilhermedejesus/ciencia_de_dados/refs/heads/main/base-de-dados/trabalho-dados-gerais.json'

async function visualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  const pessoasEmpregadas = (dados.total_pessoas_empregadas / 1e9)
  const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
  const horas = parseInt (dados.tempo_medio)
  const minutos = Math.round((dados.tempo_medio - horas) *100)
  const porcentagemDempregada = ((pessoasConectadas / pessoasNoMundo) *100).toFixed(2)

  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML = `Você sabia que o mundo tem 
  <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente 
  <span>${pessoasEmpregadas} bilhões</span> estão trabalhando em algum emprego e passam em média 
  <span>${horas}</span> horas e <span>${minutos}</span> minutos trabalhando.
  <br> Isso significa que aproximadamente ${porcentagemDesempregada}% de pessoas estão trabalhando em algum emprego.`
  
  const containder = document.getElementById('graficos-container')
  containder.appendChild(paragrafo)
}

visualizarInformacoesGlobais();