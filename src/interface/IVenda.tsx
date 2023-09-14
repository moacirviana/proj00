export interface IVenda {
    id: number
    date: string
    cliente: Cliente
    usuario: Usuario
    itens: Itens[]
    valorTotal: number
  }
  
  export interface Cliente {
    id: number
    nome: string
  }
  
  export interface Usuario {
    id: number
    nome: string
    email: string
    perfis: string[]
  }
  
  export interface Itens {
    id: number
    produto: Produto
    qtd: number
    valor: number
  }
  
  export interface Produto {
    id: number
    descricao: string
    valor: number
  }
  