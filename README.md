

---

```markdown
# StreamCast Hub

StreamCast Hub é uma aplicação web que agrega diversas estações de rádio online em um único portal. Através do uso de Node.js, Express, EJS e FFmpeg, o projeto permite que os usuários escutem suas rádios favoritas diretamente do navegador e façam o download de arquivos de playlist (.m3u) para reprodução em outros dispositivos.

## Funcionalidades

- **Página Inicial:** Lista todas as estações de rádio disponíveis com links para acesso e download das playlists.
- **Streaming com Transcodificação:** Cada rádio possui uma página com player de áudio HTML5, que utiliza transcodificação em tempo real (via FFmpeg) para garantir a compatibilidade com os navegadores.
- **Download de Playlists (.m3u):** Geração dinâmica de arquivos .m3u para que os usuários possam utilizar as estações em players externos.
- **Segurança:** Implementação de medidas de segurança com o middleware Helmet.
- **Interface Responsiva:** Uso do template engine EJS para separar a lógica do backend da apresentação, facilitando a manutenção e customização do layout.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg)
- [Helmet](https://helmetjs.github.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Pré-requisitos

- **Node.js:** Versão 12 ou superior.
- **FFmpeg:** Instale e configure o FFmpeg no seu sistema e adicione-o ao PATH.

## Instalação

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seuusuario/streamcasthub.git
   cd streamcasthub
   ```

2. **Instale as Dependências:**

   ```bash
   npm install
   ```

3. **Configuração das Variáveis de Ambiente:**

   Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias:

   ```env
   PORT=3000
   KATIVA_URL=https://stm11.xcast.com.br:13528//;
   SUCESSO_URL=https://f100.fabricahost.com.br/redesucessojatai915?f=1730042099N01JB78PXWTMBRK4S4N4B07R90V&tid=01JB4NBF9F6BHCZFRJZCN7WE84
   DIFUSORA_URL=http://sd.dnip.com.br:9138/;/
   INTERATIVA_URL=https://s44.maxcast.com.br:8348/live
   ```

## Estrutura do Projeto

```plaintext
projeto-radio/
├── .env
├── package.json
├── server.js
├── routes/
│   └── radioRoutes.js
├── helpers/
│   └── streamHelpers.js
├── views/
│   ├── index.ejs
│   └── radio.ejs
└── public/
    └── css/
        └── style.css
```

- **server.js:** Arquivo principal que configura o servidor Express, middlewares e define a pasta de views e arquivos estáticos.
- **routes/radioRoutes.js:** Define as rotas da aplicação, incluindo as páginas de cada rádio, rotas de streaming com transcodificação e download das playlists.
- **helpers/streamHelpers.js:** Contém funções auxiliares para criar as rotas de streaming (utilizando FFmpeg) e gerar os arquivos .m3u.
- **views/:** Contém os templates EJS para renderização das páginas (página inicial e página de cada rádio).
- **public/:** Armazena arquivos estáticos como CSS para estilização.

## Uso

1. **Inicie o Servidor:**

   ```bash
   node server.js
   ```

2. **Acesse a Aplicação:**

   Abra o navegador e acesse:
   
   ```
   http://localhost:3000
   ```

3. **Navegação:**

   - Na página inicial, você verá a lista das estações de rádio disponíveis.
   - Clique no link da estação desejada para acessar a página com o player de áudio.
   - Use a opção de download para obter o arquivo .m3u da rádio e reproduzir em outros players.

## Contribuições

Contribuições são bem-vindas! Caso deseje melhorar o projeto, sinta-se à vontade para:
- Abrir issues para relatar bugs ou sugerir melhorias.
- Enviar pull requests com correções e novas funcionalidades.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

- **Seu Nome**
- **Email:** seu.email@example.com
- **GitHub:** [seuusuario](https://github.com/seuusuario)
```
