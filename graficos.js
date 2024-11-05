const ctxPizza1 = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não', 'As vezes'],
        datasets: [{
            label: 'Você pratica atividades físicas',
            data: [55, 11, 33],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Você pratica atividades físicas'
            }
        }
    }
})

const ctxPizza2 = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Musculação', 'Volei', 'Caminhar', 'Futebol', 'Outros', 'Nada'],
        datasets: [{
            label: 'Quais as atividades que você pratica?',
            data: [389, 389, 56, 56, 56, 56],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Quais as atividades que você pratica?'
            }
        }
    }
})

const ctxPizza3 = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['1 a 2 vezes', '3 a 5 vezes', '6 a 7 vezes'],
        datasets: [{
            label: 'Quantas vezes na semana?',
            data: [44, 50, 5],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Quantas vezes na semana?'
            }
        }
    }
})

const ctxPizza4 = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['menos de 1 ano', 'de 1 a 2 anos', 'mais de 3 anos', '10 anos', 'desde que aprendi a andar'],
        datasets: [{
            label: 'a quanto tempo voce pratica atividades fisicas?',
            data: [38, 38, 11, 5, 5],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'a quanto tempo voce pratica atividades fisicas?'
            }
        }
    }
})

const ctxPizza5 = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['quero perder peso', 'quero ganhar peso', 'quero manter o fisico', 'pra zoar com os guri', 'quero manter minha saude', 'para ser melhor que os outros'],
        datasets: [{
            label: 'por que voce comecou a praticar?',
            data: [22, 22, 27, 10, 5, 5],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'por que voce comecou a praticar?'
            }
        }
    }
})

const ctxPizza6 = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['sim', 'nao', 'volei pae', 'damas', 'xadrez'],
        datasets: [{
            label: 'voce esta tentando melhorar sua performance em algum esporte?',
            data: [55, 27, 5, 5, 5],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'voce esta tentando melhorar sua performance em algum esporte?'
            }
        }
    }
})
