# 🚀 TEORA Solutions - Modal 3D Interativo

Um projeto Next.js moderno com App Router que exibe um modelo 3D Spline dentro de um modal fullscreen, com carregamento lazy e design premium.

## ✨ Características

✅ **Modal 3D Lazy-Loaded** - O modelo só carrega quando você abre o modal  
✅ **Design Moderno & Responsivo** - TailwindCSS com animações suaves  
✅ **Totalmente Acessível** - Fechar com ESC, click no overlay ou botão X  
✅ **Performance Otimizada** - Código limpo e bem estruturado  
✅ **Animações Suaves** - Fade-in, scale-in e hover effects  
✅ **Mobile-First** - Funciona perfeitamente em qualquer dispositivo

## 🛠️ Requisitos

- Node.js 18+ (recomendado 20+)
- npm ou yarn

## 📦 Instalação

```bash
# Clone ou navegue até a pasta do projeto
cd next-3d-modal

# Instale as dependências
npm install
# ou
yarn install
```

## 🚀 Como Executar

```bash
# Modo desenvolvimento
npm run dev
# ou
yarn dev

# Abra http://localhost:3000 no seu navegador
```

## 🏗️ Como Fazer Build

```bash
# Build para produção
npm run build
npm run start
```

## 📁 Estrutura do Projeto

```
next-3d-modal/
├── app/
│   ├── layout.tsx          # Layout raiz com metadados
│   ├── page.tsx            # Página principal com modal
│   └── globals.css         # Estilos globais + animações
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## 🎯 Como Funciona

1. **Página Inicial** - Exibe um botão atraente "Ver nosso modelo 3D"
2. **Interação** - Ao clicar, abre um modal fullscreen com overlay escuro
3. **Modelo 3D** - O Spline é renderizado APENAS quando o modal está aberto
4. **Controles** - Feche com:
   - Botão X (canto superior direito)
   - ESC (teclado)
   - Click no overlay preto

## 🎨 Customização

### Mudar a URL do Spline

Edite `app/page.tsx` e procure:

```tsx
<Spline scene="https://prod.spline.design/63Fqgy-uN6QjHlXO/scene.splinecode" />
```

Substitua a URL pelo seu próprio link do Spline.

### Mudar Cores

No `tailwind.config.js`, customize as cores:

```js
colors: {
  azul: {
    profundo: "#0A2540",
    claro: "#00A3FF",
    brilho: "#4cc9f0",
  },
}
```

### Ajustar Tamanho do Modal

Em `app/page.tsx`, procure:

```tsx
<div className="relative z-10 w-11/12 h-5/6 md:w-10/12 md:h-5/6 ...">
```

- `w-11/12` = largura em mobile (91.666%)
- `h-5/6` = altura (83.333%)
- `md:w-10/12` = largura em desktop (83.333%)

## 📱 Responsividade

O projeto é totalmente responsivo:

- **Mobile** - Stack vertical, modal ajustado
- **Tablet** - Layout intermediário
- **Desktop** - Experiência completa com animações

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Conecte seu repositório Git
2. Configure o build: `npm run build`
3. Deploy automático

## 🔧 Troubleshooting

### "Module not found: @splinetool/react-spline"

```bash
npm install @splinetool/react-spline
```

### Modal não abre

Verifique se o estado está sendo gerenciado corretamente no `useState`.

### Spline não carrega

- Verifique se a URL está correta
- Verifique a conexão de internet
- Abra o DevTools (F12) e veja os erros

## 📄 Licença

Projeto construído para TEORA Solutions © 2026

## 🤝 Suporte

Precisa de ajuda? Entre em contato conosco:

- WhatsApp: [Seu WhatsApp]
- Instagram: @teorasolutions
- Email: teorasolutions@gmail.com

---

**Desenvolvido com ❤️ por TEORA Solutions**
