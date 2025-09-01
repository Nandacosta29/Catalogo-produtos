# 🛒 Catálogo de Produtos React

> Um catálogo de produtos moderno e interativo, desenvolvido em **React**, com **formulário de cadastro**, listagem dinâmica e design responsivo.

![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.0.0-purple?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Sobre o Projeto

Este projeto foi criado para **aplicar conceitos de React** aprendidos no módulo, como:

- Componentes reutilizáveis (`ProdutoCard`)  
- JSX e props  
- Gerenciamento de state e formulários  
- Ciclo de vida com `useEffect`  

O catálogo permite:

- Listar produtos dinamicamente  
- Adicionar novos produtos pelo formulário  
- Visualizar preços no formato brasileiro `R$ xx,xx`  
- Design moderno, responsivo e interativo  

---


## 🗂 Estrutura do Projeto

```text
catalogo-produtos/
│
├─ public/
├─ src/
│ ├─ assets/             # Imagens e recursos
│ ├─ components/         # Componentes reutilizáveis
│ │ └─ ProdutoCard.jsx
│ ├─ pages/              # Páginas
│ │ └─ Catalogo.jsx
│ ├─ App.jsx
│ └─ main.jsx
├─ package.json
├─ vite.config.js
