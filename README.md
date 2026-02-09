# 🌤️ App de Clima (Weather App)

Uma aplicação web moderna, modular e responsiva para consultar a previsão do tempo em tempo real. O projeto consome a API da **Open-Meteo**, utiliza **ES Modules** para estruturação do JavaScript e possui um design limpo e centralizado.

---

## 📸 Sobre o Projeto

Este aplicativo permite que o usuário digite o nome de uma cidade e receba instantaneamente informações sobre:

- 🌡️ Temperatura atual.
- 💨 Velocidade do vento.
- 🌥️ Condição climática (descrição textual baseada no código WMO).

O layout foi construído para centralizar o conteúdo na tela com um fundo gradiente moderno (`#74b9ff` a `#0984e3`), garantindo uma boa experiência visual.

---

## ✨ Funcionalidades

- **Busca Inteligente:** Integração com API de Geocodificação para converter nomes de cidades em coordenadas.
- **Persistência de Dados:** Salva a última cidade pesquisada no `localStorage` do navegador, carregando-a automaticamente ao reabrir o app.
- **Feedback de Interface:** Mensagens de "Carregando..." e tratamento de erros (ex: cidade inválida).
- **Modularidade:** Código JavaScript dividido em responsabilidades (API, UI, Utils).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Flexbox, Gradients e design responsivo.
- **JavaScript (ES6+):**
  - `import` / `export` (ES Modules).
  - `async` / `await` e `Fetch API`.
  - Manipulação do DOM.
- **API:** [Open-Meteo](https://open-meteo.com/) (Gratuita e sem necessidade de chave de API).

---

## 📂 Estrutura de Arquivos

Para que o código funcione corretamente, organize seus arquivos e pastas da seguinte maneira:

```text
meu-projeto-clima/
│
├── index.html              # O arquivo HTML principal
└── src/
    ├── css/
    │   └── style.css       # O arquivo CSS fornecido
    └── js/
        ├── main.js         # Ponto de entrada do JS (Event Listeners)
        ├── api/
        │   └── weatherService.js  # Lógica de conexão com a API
        ├── ui/
        │   └── renderWeather.js   # Funções de manipulação do DOM
        └── utils/
            └── formatters.js      # Formatadores de texto e temperatura
```
