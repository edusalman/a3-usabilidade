# 📦 ProductHub — Catálogo de Produtos Interativo

Aplicação web front-end desenvolvida como projeto semestral da disciplina de **Usabilidade, desenvolvimento web, mobile e jogos**, no curso de Engenharia de Software, do professor Marcelo Amorim. O objetivo é construir um catálogo de produtos funcional, consumindo dados de uma API pública e permitindo que o usuário favorite produtos com persistência no navegador.

---

## 🚀 Funcionalidades

- 🔍 **Busca dinâmica** — filtra produtos pelo nome em tempo real, sem recarregar a página
- ⭐ **Favoritar produtos** — adiciona e remove produtos dos favoritos com um clique
- 💾 **Persistência** — os favoritos são salvos no `localStorage` e mantidos ao recarregar a página
- 📋 **Seção de favoritos** — exibe separadamente apenas os produtos favoritados
- 📡 **Consumo de API** — produtos carregados dinamicamente da API pública [DummyJSON](https://dummyjson.com/products)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 + Bootstrap 5 | Estilização e layout responsivo |
| Bootstrap Icons | Ícones (coração, loja, etc.) |
| JavaScript Vanilla | Lógica da aplicação |
| Fetch API | Consumo da API de produtos |
| localStorage | Persistência dos favoritos |

> Nenhum framework JavaScript foi utilizado (sem React, Vue, Angular, etc.), conforme requisito do projeto.

---

## 📁 Estrutura do Projeto

```
/
├── index.html        # Estrutura principal da aplicação
├── style.css         # Estilos customizados
├── img/
│   └── icon.png      # Ícone da aba do navegador
└── js/
    ├── api.js        # Requisição à API (fetch)
    ├── storage.js    # Funções de leitura/escrita no localStorage
    └── app.js        # Lógica principal: renderização, busca, favoritos
```

---

## 🧠 Decisões Técnicas

### Separação em módulos (api.js, storage.js, app.js)
O código foi dividido em três arquivos com responsabilidades distintas, seguindo o princípio de separação de responsabilidades:
- **`api.js`** — só se preocupa em buscar dados externos
- **`storage.js`** — só lida com o localStorage
- **`app.js`** — coordena a interface, eventos e renderização

Isso torna o código mais fácil de entender, manter e evoluir.

### Renderização dinâmica via JavaScript
Os cards de produto **não existem no HTML**. O `index.html` tem apenas containers vazios (`<div id="products-container">`), e o JavaScript cria e injeta cada card dinamicamente com `createElement` e `innerHTML`. Isso é necessário pois os dados vêm de uma API e não são conhecidos antes do carregamento.

### localStorage para persistência
Ao invés de um banco de dados (que exigiria um backend), os favoritos são salvos no `localStorage` do navegador. Os dados ficam disponíveis mesmo após fechar e reabrir a página. Como o localStorage só suporta strings, usamos `JSON.stringify()` para salvar e `JSON.parse()` para ler.

### Re-renderização completa ao favoritar
Toda vez que o usuário favorita ou desfavorita um produto, as funções `renderProdutos()` e `renderFavoritos()` são chamadas novamente do zero. Essa abordagem é simples e garante que a interface esteja sempre sincronizada com o estado dos dados, sem necessidade de atualizar elementos individuais manualmente.

### Busca sem requisição extra à API
A filtragem por nome é feita localmente no array `todosProdutos`, que já está carregado em memória. Isso torna a busca instantânea, sem depender de conexão com a internet após o carregamento inicial.

---

## ▶️ Como Rodar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/edusalman/a3-usabilidade.git
```

2. Abra o arquivo `index.html` no navegador.

> Não é necessário instalar nada. A aplicação roda diretamente no navegador.

---

## 🌐 Deploy

A aplicação está publicada via **Vercel**:  
🔗 [https://a3-usabilidade-six.vercel.app/](https://a3-usabilidade-six.vercel.app/)

---

## 📌 Possíveis Melhorias Futuras

- [ ] Paginação de produtos
- [ ] Filtro por categoria
- [ ] Ordenação por preço
- [ ] Modal com detalhes do produto
- [ ] Carrinho de compras

---

## 👥 Autores

Desenvolvido por estudantes de Engenharia de Software — Projeto Semestral A3.

Eduardo Henrique Nogueira Salman - RM 825115635
Gustavo
João Victor Vieira Dias - RM 825130113
Pablo Maldonado Rocha - RM 825131728
Rafaella
Yasmim Pereira da Costa - RM 825149765

