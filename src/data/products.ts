// src/data/products.ts
export type Product = {
  id: number
  title: string
  img: string
  price: number
  priceFrom?: number
  shortDesc: string
  longDesc: string
  usage: string
  care: string
  alt?: string
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Lava Roupas Líquido Azul 5L',
    img: '/imgs/sabao-azul-5l.png',
    priceFrom: 29.9,
    price: 24.9,
    shortDesc: 'Limpeza eficiente e alto rendimento.',
    longDesc:
      'Detergente líquido concentrado indicado para todos os tipos de tecidos, com agentes branqueadores ópticos e perfume prolongado.',
    usage:
      'Dissolver a quantidade recomendada em água e aplicar sobre as roupas. Siga a dosagem do rótulo conforme o nível de sujeira.',
    care: 'Mantenha fora do alcance de crianças e animais. Evite contato com os olhos. Em caso de contato, enxágue com água em abundância.',
    alt: 'Lava Roupas Azul 5L',
  },
  {
    id: 2,
    title: 'Lava Roupas Líquido Azul 2L',
    img: '/imgs/sabao-azul-2l.png',
    priceFrom: 14.9,
    price: 12.5,
    shortDesc: 'Espuma controlada e perfume agradável.',
    longDesc:
      'Fórmula balanceada para remoção de manchas no dia a dia, cuidando das fibras do tecido.',
    usage:
      'Use a dosagem indicada no rótulo por carga de roupas. Compatível com máquinas e lavagens manuais.',
    care: 'Conservar em local fresco e arejado. Não ingerir. Em caso de irritação, suspenda o uso.',
    alt: 'Lava Roupas Azul 2L',
  },
  {
    id: 3,
    title: 'Amaciante Azul 5L',
    img: '/imgs/amaciante-5l.png',
    priceFrom: 26.9,
    price: 22.9,
    shortDesc: 'Maciez e fragrância prolongada.',
    longDesc:
      'Amaciante concentrado que reduz o atrito das fibras, proporcionando toque suave e perfume duradouro.',
    usage:
      'Adicionar no compartimento de amaciante da máquina, seguindo a dosagem do rótulo.',
    care: 'Não aplicar diretamente sobre o tecido seco. Mantenha fora do alcance de crianças.',
    alt: 'Amaciante 5L',
  },
  {
    id: 4,
    title: 'Água Sanitária 5L',
    img: '/imgs/agua-sanitaria-5l.png',
    priceFrom: 26.9,
    price: 9.99,
    shortDesc: 'Branqueia e desinfeta com segurança.',
    longDesc:
      'Solução à base de hipoclorito, indicada para alvejamento de roupas brancas e desinfecção de superfícies.',
    usage:
      'Diluir conforme instruções do rótulo. Nunca misturar com ácidos ou amônia.',
    care: 'Produto alcalino. Evitar contato com metais e superfícies sensíveis. Ventile o ambiente durante o uso.',
    alt: 'Água Sanitária 5L',
  },
  {
    id: 5,
    title: 'Branquinho 2L',
    img: '/imgs/branquinho-2l.png',
    priceFrom: 10.9,
    price: 8.9,
    shortDesc: 'Limpador multiuso de alto desempenho.',
    longDesc:
      'Limpador versátil para pisos, azulejos e superfícies laváveis. Remove gorduras leves e sujidades comuns.',
    usage:
      'Diluir em água conforme a necessidade. Aplicar com pano, mop ou esponja.',
    care: 'Não utilizar em pedras naturais porosas sem teste prévio. Em caso de dúvida, teste em área pequena.',
    alt: 'Branquinho 2L',
  },
  {
    id: 6,
    title: 'Limpa Pneu Gel 4Kg',
    img: '/imgs/pretinho-4kg.png',
    priceFrom: 39.9,
    price: 34.9,
    shortDesc: 'Brilho intenso e proteção duradoura.',
    longDesc:
      'Gel para pneus com alto poder de brilho e película protetora contra ressecamento.',
    usage:
      'Aplicar com esponja limpa sobre o pneu seco. Evitar contato com o piso.',
    care: 'Não aplicar em áreas de frenagem. Manter fora de fontes de calor e luz direta.',
    alt: 'Limpa Pneu 4Kg',
  },
  {
    id: 7,
    title: 'Percarbonato de sodio',
    img: '/imgs/percarbonato.png',
    priceFrom: 39.9,
    price: 34.9,
    shortDesc: 'Brilho intenso e proteção duradoura.',
    longDesc:
      'Gel para pneus com alto poder de brilho e película protetora contra ressecamento.',
    usage:
      'Aplicar com esponja limpa sobre o pneu seco. Evitar contato com o piso.',
    care: 'Não aplicar em áreas de frenagem. Manter fora de fontes de calor e luz direta.',
    alt: 'Limpa Pneu 4Kg',
  },
]
