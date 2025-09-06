import 'bootstrap/dist/css/bootstrap.min.css'
import { createGlobalStyle } from 'styled-components'

export const cores = {
  verde: '#00A859',
  verdeEscuro: '#006837',
  verdeClaro: '#A7E3C0',
  branco: '#FFFFFF',
  azul: '#1470AF',
  azulClaro: '#8EB6DC',
  cinzaClaro: '#F5F5F5',
  cinzaMedio: '#6E6E6E',
  pretoSuave: '#1C1C1C',
  amareloSuave: '#FFD700',
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.cinzaClaro};
    color: ${cores.pretoSuave};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  .object-fit-contain {
    object-fit: contain;
  }

  .bg-success-subtle {
    background: ${cores.cinzaClaro};
  }

  .bg-primary-subtle {
    background: ${cores.cinzaClaro};
  }

  /* Largura confortável do offcanvas em telas pequenas */
  .offcanvas-end {
    width: min(90vw, 360px);
  }

  /* GlobalCss (no createGlobalStyle) */

:root, [data-bs-theme="light"],
[data-bs-theme="dark"] {
  /* valores fallback caso o JS ainda não tenha medido */
  --header-h: 100px;
  --header-gap: 20px;
  --bs-form-select-focus-border-color: ${cores.verdeClaro}; /* ajuste para sua paleta */
  --bs-form-select-focus-shadow-rgb: rgba(25, 135, 84, 0.25);
  --bs-form-check-bg: #fff;         /* fundo padrão do checkbox */
  --bs-form-check-border: ${cores.verdeClaro};  /* borda quando desmarcado */
  --bs-form-check-checked-bg-color: ${cores.verdeClaro}; /* fundo quando marcado */
  --bs-form-check-checked-border-color: ${cores.verdeClaro}; /* borda quando marcado */
  --bs-form-check-checked-color: #fff;
}

/* Checkbox padrão */
.form-check-input {
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Quando marcado */
.form-check-input:checked {
  background-color: ${cores.verde}; /* fundo verde */
  border-color: ${cores.verdeClaro}; /* borda verde */
}

/* Quando em foco (quando clica nele ou navega com TAB) */
.form-check-input:focus {
  box-shadow: 0 0 0 0.25rem rgba(0, 168, 89, 0.25); /* sombra verde suave */
  border-color: ${cores.verdeClaro};
}


.form-select:focus {
  /* Bootstrap 5 usa essas vars no foco */
  outline: none;
  border-color: ${cores.verdeClaro} !important;
  box-shadow: 0 0 0 0.25rem rgba(0, 168, 89, 0.25) !important;
}

.form-control:focus {
  outline: none;
  border-color: ${cores.verdeClaro} !important;
  box-shadow: 0 0 0 0.25rem rgba(0, 168, 89, 0.25) !important;
}

/* Sidebar sticky sempre começa logo abaixo do header */
.sidebar-sticky,
.sticky-top {
  top: calc(var(--header-h) + var(--header-gap)) !important;
}

/* Garante que o offcanvas fique acima do header (z-index do header = 1000) */
.offcanvas { z-index: 1080; }
`
