async function carregarProdutos() {
    try {
        const busca = await fetch('https://dummyjson.com/products?limit=25')
        const dados = await busca.json()
        return dados.products
    } catch (erro) {
        console.error("Erro ao buscar dados na API:", erro)
        return []
    }
}
