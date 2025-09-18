# GitHub Copilot com TDD - Tutorial Prático

Este é um projeto base para workshop de Github Copilot com TDD (Test-Driven Development). O objetivo é ensinar como usar o GitHub Copilot seguindo os princípios de TDD para desenvolver uma API REST em Node.js.

## 🎯 Objetivos do Tutorial

- Aprender os fundamentos do TDD (Test-Driven Development)
- Utilizar GitHub Copilot para acelerar o desenvolvimento
- Criar uma API REST robusta e testada
- Entender as melhores práticas de desenvolvimento orientado por testes

## 🚀 Configuração Inicial

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- GitHub Copilot habilitado no seu editor
- VS Code (recomendado)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/dev-pods/github-copilot-with-tdd-project.git

# Entre no diretório
cd github-copilot-with-tdd-project

# Instale as dependências
npm install
```

## 🧪 Executando os Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch (desenvolvimento)
npm run test:watch

# Executar testes com coverage
npm run test:coverage
```

## 🏃‍♂️ Executando a Aplicação

```bash
# Modo desenvolvimento (com nodemon)
npm run dev

# Modo produção
npm start
```

A API estará disponível em `http://localhost:3000`

## 📚 Estrutura do Projeto

```
src/
├── index.js        # Servidor Express principal
└── utils.js        # Funções utilitárias

tests/
├── api.test.js     # Testes dos endpoints da API
└── utils.test.js   # Testes das funções utilitárias

package.json        # Configurações e dependências
```

## 🛠️ Tecnologias Utilizadas

- **Express.js**: Framework web para Node.js
- **Jest**: Framework de testes
- **Supertest**: Biblioteca para testes de API
- **Nodemon**: Reinicialização automática durante desenvolvimento

## 📝 Endpoints Disponíveis

### GET /
Endpoint de boas-vindas que retorna informações sobre a API.

**Resposta:**
```json
{
  "success": true,
  "message": "Bem-vindo à API do Tutorial TDD com GitHub Copilot!",
  "data": {
    "version": "1.0.0",
    "endpoints": ["GET /", "GET /health"]
  }
}
```

### GET /health
Endpoint de verificação de saúde da API.

**Resposta:**
```json
{
  "success": true,
  "message": "API is running successfully"
}
```

## 🔄 Fluxo TDD

Este projeto demonstra o ciclo TDD:

1. **Red**: Escreva um teste que falha
2. **Green**: Escreva o código mínimo para fazer o teste passar
3. **Refactor**: Melhore o código mantendo os testes passando

### Exemplo Prático

Os testes em `tests/utils.test.js` demonstram como testar:
- Validação de strings
- Formatação de respostas da API
- Casos de sucesso e erro

## 💡 Dicas para usar GitHub Copilot com TDD

1. **Escreva os testes primeiro**: O Copilot entende melhor o contexto quando vê os testes
2. **Use comentários descritivos**: Ajudam o Copilot a gerar código mais preciso
3. **Nomeação clara**: Funções e variáveis bem nomeadas geram sugestões melhores
4. **Iteração**: Use o Copilot para refatorar e melhorar o código existente

## 🎯 Próximos Passos

Este projeto base pode ser expandido com:

- [ ] Endpoints CRUD (Create, Read, Update, Delete)
- [ ] Validação de dados com middleware
- [ ] Banco de dados (MongoDB, PostgreSQL)
- [ ] Autenticação e autorização
- [ ] Documentação com Swagger
- [ ] Logs estruturados
- [ ] Tratamento de erros avançado
- [ ] Rate limiting
- [ ] Containerização com Docker

## 📖 Recursos Adicionais

- [Documentação do Jest](https://jestjs.io/docs/getting-started)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [TDD Best Practices](https://github.com/testdouble/contributing-tests/wiki/Test-Driven-Development)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Escreva testes para sua feature
4. Implemente a feature
5. Execute os testes (`npm test`)
6. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
7. Push para a branch (`git push origin feature/nova-feature`)
8. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.
