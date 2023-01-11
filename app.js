let monstros = [
        {
            id:1,
            nome: 'Lúcia',
            altura: 1.65,
            habilidades: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eligendi dolore vel, ex, qui itaque tenetur suscipit magni, architecto voluptatibus animi ipsam eius. Vel voluptatem nostrum distinctio est, repellat temporibus.',
            foto: 'https://robohash.org/Lucia'
        },
        {
            id:2,
            nome: 'Alessandro',
            altura: 1.79,
            habilidades: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eligendi dolore vel, ex, qui itaque tenetur suscipit magni, architecto voluptatibus animi ipsam eius. Vel voluptatem nostrum distinctio est, repellat temporibus.',
            foto: 'https://robohash.org/Alessandro'
        },
        {
            id:3,
            nome: 'Eduardo',
            altura: 1.40,
            habilidades: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eligendi dolore vel, ex, qui itaque tenetur suscipit magni, architecto voluptatibus animi ipsam eius. Vel voluptatem nostrum distinctio est, repellat temporibus.',
            foto: 'https://robohash.org/Eduardo'
        },
        {
            id:4,
            nome: 'Taís',
            altura: 1.55,
            habilidades: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eligendi dolore vel, ex, qui itaque tenetur suscipit magni, architecto voluptatibus animi ipsam eius. Vel voluptatem nostrum distinctio est, repellat temporibus.',
            foto: 'https://robohash.org/Tais'
        }
    ]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', ()=>{
    document.documentElement.classList.toggle('dark')
})

let todosOsMonstros = monstros.map((monstro) => {

    return `<div class="card-monstros">
        <span>Nome: ${monstro.nome}</span>
        <p>Altura: ${monstro.altura}</p>
        <img src="${monstro.foto}">
        <p>Habilidades: ${monstro.habilidades}</p>
    </div>`
})

secao.innerHTML = todosOsMonstros
