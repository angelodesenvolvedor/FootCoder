// Adicione um evento de clique para os botões "Adicionar ao Carrinho"
  document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      // Captura as informações do produto
      const productName = this.closest('.card').querySelector('.card-title').textContent;
      const productPrice = this.closest('.card').querySelector('.card-text').textContent;

      // Cria uma URL com os parâmetros do produto
      const url = `carrinho.html?nome=${encodeURIComponent(productName)}&preco=${encodeURIComponent(productPrice)}`;

      // Redireciona para a página do carrinho de compras
      window.location.href = url;
    });
});