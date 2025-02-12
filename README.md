

```markdown
# StreamCast Hub

StreamCast Hub é uma aplicação web que agrega e transmite diversas estações de rádio online. A aplicação realiza a transcodificação em tempo real das streams de áudio utilizando `ffmpeg`, garantindo compatibilidade com os navegadores, e gera arquivos de playlist `.m3u` para que os usuários possam baixar e ouvir as rádios em outros players.

## Funcionalidades

- **Interface Web Responsiva:**  
  Permite aos usuários navegar entre diferentes estações de rádio e acessar players dedicados.

- **Transcodificação de Áudio:**  
  Utiliza `ffmpeg` para transcodificar streams para o formato MP3, facilitando a reprodução em diversos dispositivos.

- **Geração de Playlists (.m3u):**  
  Cria arquivos de playlist para download, facilitando a integração com outros players de áudio.

- **Configuração via Variáveis de Ambiente:**  
  Permite fácil personalização das URLs das rádios, porta do servidor e outras configurações sem a necessidade de alterar o código.

- **Segurança:**  
  Utiliza o middleware `helmet` para adicionar cabeçalhos de segurança e proteger a aplicação contra vulnerabilidades comuns.

## Estrutura do Projeto

```
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

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [helmet](https://helmetjs.github.io/)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/streamcast-hub.git
   cd streamcast-hub
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**

   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo (ajuste as URLs conforme necessário):

   ```env
   PORT=3000
   KATIVA_URL=https://stm11.xcast.com.br:13528//;
   SUCESSO_URL=https://f100.fabricahost.com.br/redesucessojatai915?f=1730042099N01JB78PXWTMBRK4S4N4B07R90V&tid=01JB4NBF9F6BHCZFRJZCN7WE84
   DIFUSORA_URL=http://sd.dnip.com.br:9138/;/
   INTERATIVA_URL=https://s44.maxcast.com.br:8348/live
   ```

## Uso

Para iniciar a aplicação, execute:

```bash
node server.js
```

Acesse a aplicação no seu navegador em [http://localhost:3000](http://localhost:3000).  
Na página inicial, você verá uma lista de rádios disponíveis. Clique em uma delas para acessar a página com o player de áudio e a opção para baixar o arquivo `.m3u`.

## Contribuições

Contribuições são bem-vindas! Se você deseja melhorar o projeto ou corrigir algum bug, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature ou correção: `git checkout -b minha-melhoria`.
3. Faça o commit das suas alterações: `git commit -m 'Minha melhoria'`.
4. Envie para a branch: `git push origin minha-melhoria`.
5. Abra um Pull Request explicando as alterações realizadas.

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

Este README fornece uma visão geral do projeto, instruções para instalação e uso, e orientações para contribuições, facilitando o entendimento e a colaboração no desenvolvimento do **StreamCast Hub**.
