# ConectaServiços

Landing page responsiva de uma startup fictícia de serviços locais, criada como **protótipo acadêmico** de Sistemas de Informação. Não oferece contratação nem encaminhamento real.

## Funcionalidades

- Página institucional com serviços, funcionamento, chamada para profissionais, dúvidas e rodapé.
- Formulário de **solicitação de serviço**, com categoria pré-selecionada quando acessado pelos cartões.
- Formulário de **interesse profissional**, separado do formulário de clientes.
- Integração preparada para **Netlify Forms**, com prevenção básica contra spam (honeypot).
- Página de confirmação após envio e aviso de privacidade.
- Navegação responsiva, HTML semântico, acessibilidade básica e comportamento adaptado a usuários que preferem movimento reduzido.

## Estrutura

```
index.html          # landing page
solicitar.html      # formulário de clientes
profissionais.html  # formulário de profissionais
obrigado.html       # confirmação de envio
privacidade.html    # esclarecimentos sobre o protótipo
styles.css          # estilos responsivos
app.js              # menu, contadores e seleção de categoria
assets/brand.svg    # identidade visual
assets/icons.svg    # biblioteca de ícones
netlify.toml        # publicação e cabeçalhos de segurança
```

## Publicação gratuita no Netlify

1. Entre em https://app.netlify.com e selecione **Add new project / Import an existing project**.
2. Conecte sua conta GitHub e escolha `MarcosVini753/ConectaServicos`, branch `main`.
3. Não defina comando de build. O diretório de publicação é `.` (raiz).
4. Faça o deploy e escolha um nome disponível, por exemplo `conectaservicos-demo.netlify.app`.
5. No painel do site, acesse **Forms** e confirme que a detecção automática está habilitada. **Se precisar habilitá-la, faça um novo deploy** para os formulários serem detectados.
6. Verifique a presença dos formulários `solicitacoes` e `profissionais`.
7. Faça uma submissão com **dados fictícios**, confirme a página `/obrigado.html` e confira o registro no painel **Forms**.

**Importante:** abrir `index.html` localmente permite navegar, mas **não envia formulários**. O JavaScript exibe um aviso local em vez de simular sucesso. O recebimento real depende da publicação no Netlify.

**Dados:** ficam no Netlify Forms e podem ser consultados/exportados no painel do site. Eles não aparecem publicamente nem são cruzados automaticamente. Antes de aceitar usuários reais, publique canais de contato, política de privacidade adequada e governança de retenção/exclusão.

## Tecnologias

HTML5, CSS3 e JavaScript nativo; hospedagem e recebimento de formulários pelo Netlify. Fontes Google Fonts (com alternativas locais). A página principal carrega uma imagem externa do Unsplash; caso ela não esteja disponível, o fundo mantém uma cor alternativa.

## Aprendizado de SI

- **Dados:** cadastro de solicitações e interessados.
- **Hardware:** dispositivos de acesso e infraestrutura de hospedagem.
- **Software:** navegador, arquivos estáticos e Netlify Forms.
- **Processos:** preenchimento, validação, recepção e consulta dos envios.
- **Pessoas:** visitantes, profissionais e responsável pelo projeto.
- **DIKW:** dados de teste podem ser agrupados em informações (ex.: categorias), analisados para produzir conhecimento e orientar decisões simuladas.

## Referências

- https://docs.netlify.com/manage/forms/setup/
- https://docs.netlify.com/manage/forms/spam-filters/
- https://docs.netlify.com/manage/forms/submissions/
- https://unsplash.com/license

> Projeto demonstrativo. Não use informações reais ou sensíveis nos testes.
