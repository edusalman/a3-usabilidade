function getFavoritos() {
    const dados = localStorage.getItem('favoritos')
    return dados ? JSON.parse(dados) : []
}

function salvarFavoritos(favoritos) {
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
}

function isFavorito(id) {
    return getFavoritos().includes(id)
}

function toggleFavorito(id) {
    let favoritos = getFavoritos()
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(fid => fid !== id)
    } else {
        favoritos.push(id)
    }
    salvarFavoritos(favoritos)
}
