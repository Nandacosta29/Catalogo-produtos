import React, { useEffect, useState } from 'react';
import ProdutoCard from '../components/ProdutoCard';

import camisetaImg from '../assets/camiseta-react.jpg';
import canecaImg from '../assets/caneca-js.jpg';

export default function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const [form, setForm] = useState({
    nome: '',
    preco: '',
    imagem: '',
    descricao: ''
  });

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          nome: 'Camiseta React',
          preco: 120.9,
          imagem: camisetaImg,
          descricao: 'Camiseta 100% algodão com estampa React.'
        },
        {
          nome: 'Caneca JavaScript',
          preco: 59.9,
          imagem: canecaImg,
          descricao: 'Caneca com estampa JavaScript.'
        }
      ]);
      setCarregando(false);
    }, 1000);
  }, []);

  const adicionarProduto = (e) => {
    e.preventDefault();

    const novoProduto = {
      nome: form.nome,
      preco: parseFloat(form.preco),
      imagem: form.imagem || 'https://via.placeholder.com/300x300',
      descricao: form.descricao
    };

    setProdutos([...produtos, novoProduto]);
    setForm({ nome: '', preco: '', imagem: '', descricao: '' });
  };

  return (
    <div className="catalogo-container">
      <h1>Catálogo de Produtos</h1>

      {carregando ? (
        <p>Carregando produtos...</p>
      ) : (
        <div className="produtos-grid">
          {produtos.map((produto, index) => (
            <ProdutoCard key={index} {...produto} />
          ))}
        </div>
      )}

      <h2>Adicionar Produto</h2>
      <form onSubmit={adicionarProduto}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          required
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          step="0.01"
          value={form.preco}
          onChange={(e) => setForm({ ...form, preco: e.target.value })}
          required
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da Imagem"
          value={form.imagem}
          onChange={(e) => setForm({ ...form, imagem: e.target.value })}
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          required
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
