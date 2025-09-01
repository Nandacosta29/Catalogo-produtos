import React from 'react';

export default function ProdutoCard({ nome, descricao, preco, imagem }) {
  return (
    <div className="produto-card">
      <img src={imagem} alt={nome} />
      <div className="info">
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(preco)}
        </strong>
      </div>
    </div>
  );
}
