let todosProdutos = []

const productosContainer = document.getElementById('products-container')
const favoritosContainer = document.getElementById('favorites-container')
const inputBusca = document.getElementById('input-busca')
const searchForm = document.getElementById('search-form')

function criarCardProduto(produto) {
    const favoritado = isFavorito(produto.id)
    const col = document.createElement('div')
    col.className = 'col-md-3'
    col.innerHTML = `
        <div class="card product-card h-100">
            <img src="${produto.thumbnail}" class="card-img-top product-img" alt="${produto.title}">
            <div class="card-body d-flex flex-column">
                <span class="badge bg-primary mb-2">${produto.category}</span>
                <h5 class="card-title">${produto.title}</h5>
                <div class="mt-auto d-flex justify-content-between align-items-center">
                    <span class="price">$ ${produto.price.toFixed(2)}</span>
                    <button
                        class="btn ${favoritado ? 'btn-danger' : 'btn-outline-danger'} favorite-btn"
                        data-id="${produto.id}"
                    >
                        <i class="bi ${favoritado ? 'bi-heart-fill' : 'bi-heart'}"></i>
                    </button>
                </div>
            </div>
        </div>
    `
    col.querySelector('.favorite-btn').addEventListener('click', () => {
        toggleFavorito(produto.id)
        renderProdutos()
        renderFavoritos()
    })
    return col
}

function renderProdutos() {
    const termo = inputBusca.value.toLowerCase().trim()
    const filtrados = todosProdutos.filter(p => p.title.toLowerCase().includes(termo))

    productosContainer.innerHTML = ''
    if (filtrados.length === 0) {
        productosContainer.innerHTML = '<div class="col-12 text-center text-muted">Nenhum produto encontrado.</div>'
        return
    }
    filtrados.forEach(p => productosContainer.appendChild(criarCardProduto(p)))
}

function renderFavoritos() {
    const ids = getFavoritos()
    const favoritos = todosProdutos.filter(p => ids.includes(p.id))

    favoritosContainer.innerHTML = ''
    if (favoritos.length === 0) {
        favoritosContainer.innerHTML = '<div class="col-12 text-center text-muted">Nenhum produto favoritado.</div>'
        return
    }
    favoritos.forEach(p => favoritosContainer.appendChild(criarCardProduto(p)))
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    renderProdutos()
})

inputBusca.addEventListener('input', () => {
    renderProdutos()
})

async function init() {
    todosProdutos = await carregarProdutos()
    renderProdutos()
    renderFavoritos()
}

init()
