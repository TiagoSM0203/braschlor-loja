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
    img: '/imgs/sabao-azul-5l.webp',
    priceFrom: 22.9,
    price: 16.6,
    shortDesc:
      'Detergente líquido que remove sujeiras difíceis sem agredir as fibras, realçando cores e deixando perfume duradouro.',
    longDesc: `O Lava Roupas Líquido Azul Lune Blanche foi formulado para limpeza profunda com cuidado aos tecidos.
      Remove manchas do dia a dia (poeira, suor e gordura leve), ajuda a manter as cores vivas e preserva a maciez natural das peças.
      Rende bem em lavagens manuais e em máquina, com espuma controlada e enxágue fácil. Indicado para roupas brancas e coloridas.`,
    usage: `• Máquina: coloque 100–200 ml no compartimento de sabão, ajustando à carga e ao nível de sujeira. Para água muito dura, utilize a dosagem maior.
      • Manual: dilua 100 ml em 10 L de água. Deixe de molho por até 20 minutos, esfregue suavemente e enxágue.
      • Pré‑tratamento: aplique uma pequena quantidade diretamente sobre a mancha, esfregue de leve e lave na sequência.`,
    care: `Manter fora do alcance de crianças e animais. Evitar contato com olhos e pele; em caso de contato, enxaguar com água em abundância.
      Não ingerir. Em caso de ingestão, não provocar vômito e procurar atendimento médico com a embalagem do produto.
      Armazenar em local fresco, seco e ao abrigo do sol. Não reutilizar a embalagem vazia.`,
    alt: 'Lava Roupas Líquido Azul 5L',
  },
  {
    id: 2,
    title: 'Lava Roupas Líquido Azul 2L',
    img: '/imgs/sabao-azul-2l.webp',
    priceFrom: 12.9,
    price: 7.8,
    shortDesc:
      'Mesma performance do 5L em versão prática, com alto rendimento e perfume agradável.',
    longDesc: `Ideal para o dia a dia, o Lava Roupas Líquido Azul 2L garante limpeza eficiente em ciclos curtos ou completos.
      Indicado para roupas coloridas e brancas, ajuda a soltar a sujeira sem desbotar, facilitando o passar e mantendo o toque macio.`,
    usage: `• Máquina: 80–150 ml por lavagem (carga média). Ajuste conforme sujeira e volume.
      • Manual: 80–100 ml em 10 L de água. Deixe agir e enxágue bem.
      • Dica: para peças muito sujas, faça pré‑tratamento localizado antes do ciclo.`,
    care: `Conservar fora do alcance de crianças e animais. Evitar inalação e contato com olhos e pele.
      Não misturar com água sanitária ou alvejantes. Armazenar em local seco, arejado e longe do sol.`,
    alt: 'Lava Roupas Líquido Azul 2L',
  },
  {
    id: 3,
    title: 'Amaciante Azul 5L',
    img: '/imgs/amaciante-5l.webp',
    priceFrom: 18.9,
    price: 12.15,
    shortDesc:
      'Amacia as fibras, reduz o atrito e facilita o passar, com fragrância prolongada.',
    longDesc: `O Amaciante Azul Lune Blanche envolve as fibras formando um filme condicionante que reduz o atrito entre elas.
      Assim, as peças ficam macias, menos amassadas e mais fáceis de passar, com perfume agradável que permanece após a secagem.
      Indicado para todos os tipos de tecidos, inclusive toalhas e roupas do dia a dia.`,
    usage: `• Máquina: 50–100 ml no compartimento de amaciante, conforme volume da carga.
      • Manual: dilua 50 ml em 10 L de água, deixe as peças já lavadas por 10 minutos, retire o excesso com leve torção e estenda. Não é necessário enxaguar.`,
    care: `Não aplicar puro diretamente sobre o tecido. Manter fora do alcance de crianças e animais.
      Evitar contato com olhos e pele; em caso de contato, enxaguar com água em abundância. Armazenar ao abrigo do sol.`,
    alt: 'Amaciante azul 5L',
  },
  {
    id: 4,
    title: 'Água Sanitária 5L',
    img: '/imgs/agua-sanitaria-5l.webp',
    priceFrom: 12.9,
    price: 9.2,
    shortDesc:
      'Alvejante clorado para roupas brancas e desinfecção de superfícies.',
    longDesc: `Solução à base de hipoclorito indicada para alvejamento de roupas brancas e higienização de pisos, azulejos, banheiros e áreas molhadas.
      Remove odores, ajuda a eliminar germes e recupera o branco das peças quando usada conforme instruções.`,
    usage: `• Roupas brancas: dilua 100 ml em 10 L de água, deixe de molho por até 20 minutos e enxágue. Não usar em roupas coloridas.
      • Superfícies: dilua 50–100 ml em 1 L de água, aplique, deixe agir por 10 minutos e enxágue.
      • Nunca misture com ácidos, amônia ou outros químicos.`,
    care: `Use luvas. Evite respingos e inalação. Manter fora do alcance de crianças e animais.
      Não aplicar em metais sensíveis, pedras naturais porosas ou superfícies envernizadas. Armazenar em local ventilado e ao abrigo do sol.`,
    alt: 'Água Sanitária 5L',
  },
  {
    id: 5,
    title: 'Branquinho 2L',
    img: '/imgs/branquinho-2l.webp',
    priceFrom: 10.9,
    price: 8.5,
    shortDesc: 'Limpador multiuso para manutenção diária com alto rendimento.',
    longDesc: `Fórmula versátil para limpeza de pisos, azulejos, bancadas e outras superfícies laváveis.
      Remove sujeiras do dia a dia e gorduras leves, deixando sensação de frescor sem agredir o acabamento.`,
    usage: `• Diluição: 1 a 3 tampas em 1 L de água para limpeza leve; use puro em sujeiras localizadas.
      • Aplicação: espalhe com pano, mop ou esponja. Deixe agir por alguns minutos e remova.
      • Enxágue quando necessário (cozinhas e superfícies em contato com alimentos).`,
    care: `Evite uso em pedras naturais porosas sem teste prévio. Não ingerir. Manter fora do alcance de crianças e animais.`,
    alt: 'Branquinho 2L',
  },
  {
    id: 6,
    title: 'Limpa Pneu Gel 4Kg',
    img: '/imgs/pretinho-4kg.webp',
    priceFrom: 45,
    price: 40,
    shortDesc:
      'Gel automotivo que renova o preto do pneu com brilho uniforme e proteção.',
    longDesc: `Desenvolvido para devolver o aspecto de novo aos pneus, formando uma película que ajuda a proteger contra ressecamento.
      Textura em gel que evita escorrimento, proporcionando acabamento homogêneo e duradouro.`,
    usage: `• Com o pneu limpo e seco, aplique pequena quantidade com esponja ou aplicador.
      • Espalhe de forma uniforme evitando contato com piso e partes de frenagem. Reaplique para maior brilho.`,
    care: 'Não aplicar em bandas de rodagem, discos, pastilhas ou pedais. Manter longe de calor e luz direta.',
    alt: 'Limpa Pneu 4Kg',
  },
  {
    id: 7,
    title: 'Percarbonato de sódio 1Kg',
    img: '/imgs/percarbonato.webp',
    priceFrom: 34.9,
    price: 25,
    shortDesc:
      'Agente clareador com oxigênio ativo, sem cloro, ideal para tirar manchas e higienizar.',
    longDesc: `O Percarbonato de Sódio libera oxigênio ativo em contato com a água, auxiliando na remoção de manchas e odores.
      Biodegradável e livre de cloro, é indicado para roupas brancas e coloridas firmes e para higienizar superfícies laváveis.`,
    usage: `• Pré‑lavagem: dissolva 1 colher de sopa (15 g) em 1 L de água morna e deixe de molho por até 30 min.
      • Máquina: adicione 1–2 colheres de sopa (15–30 g) junto ao detergente.
      • Tira‑manchas: faça uma pasta com água morna, aplique sobre a mancha por 10–15 min e enxágue.
      • Superfícies: 1 colher de sopa em 1 L de água morna. Aplique, deixe agir e enxágue.`,
    care: 'Não misturar com produtos à base de cloro. Manter em local seco e ao abrigo do sol. Manter fora do alcance de crianças e animais.',
    alt: 'Percarbonato de Sódio',
  },
  {
    id: 8,
    title: 'Água Sanitária 2L',
    img: '/imgs/agua-sanitaria-2l.webp',
    priceFrom: 7.5,
    price: 5.1,
    shortDesc: 'Alvejante clorado para roupas brancas e limpeza pesada do lar.',
    longDesc: `Indicado para alvejamento de roupas brancas e higienização de superfícies laváveis.
      Versão prática para uso doméstico com alto poder de limpeza quando usada corretamente.`,
    usage: `• Roupas brancas: 50–100 ml em 10 L de água por até 20 min. Enxágue bem.
      • Pisos e azulejos: 50 ml em 1 L de água. Aplique, aguarde 10 min e enxágue.
      • Nunca misture com outros químicos (ácidos, vinagre, amônia).`,
    care: 'Usar em ambiente ventilado e com luvas. Evitar respingos. Manter fora do alcance de crianças e animais.',
    alt: 'Água Sanitária 2L',
  },
  {
    id: 9,
    title: 'Alvejante Azul 2L',
    img: '/imgs/alvejante-2l.webp',
    priceFrom: 12.9,
    price: 7.4,
    shortDesc:
      'Indicado para alvejar roupas brancas e remover manchas difíceis.',
    longDesc: `Solução alvejante para restaurar o branco e auxiliar na desinfecção de superfícies laváveis.
      Uso doméstico seguindo rigorosamente as instruções de diluição e tempo de contato.`,
    usage: `• Roupas brancas: 50–100 ml em 10 L de água. Teste de resistência do tecido antes do uso.
      • Superfícies: 50 ml em 1 L de água. Deixe agir 10 min e enxágue. Não usar em alumínio, latão e pedras porosas.`,
    care: 'Não misturar com outros produtos. Evitar contato com olhos e pele. Guardar em local ventilado e ao abrigo do sol.',
    alt: 'Alvejante 2L',
  },
  {
    id: 10,
    title: 'Alvejante 5L',
    img: '/imgs/alvejante-5l.webp',
    priceFrom: 15.9,
    price: 12,
    shortDesc:
      'Versão econômica para alvejamento de roupas brancas e higienização geral.',
    longDesc:
      'Produto concentrado para grandes rotinas de limpeza. Siga as diluições recomendadas e respeite o tempo de ação para melhor desempenho.',
    usage:
      '• Roupas brancas: 100 ml em 10 L de água por até 20 min. Superfícies: 50–100 ml em 1 L de água. Nunca misturar com ácidos ou amônia.',
    care: 'Armazenar em local ventilado, na embalagem original e longe de calor e luz solar. Manter fora do alcance de crianças.',
    alt: 'Alvejante 5L',
  },
  {
    id: 11,
    title: 'Amaciante Azul 2L',
    img: '/imgs/amaciante-2l.webp',
    priceFrom: 14.9,
    price: 7.15,
    shortDesc:
      'Condiciona as fibras e deixa perfume suave em todas as lavagens.',
    longDesc:
      'Reduz o atrito entre as fibras, ajuda a evitar o aspecto áspero e facilita o passar. Ideal para roupas do dia a dia, toalhas e roupas de cama.',
    usage: `• Máquina: 30–80 ml no compartimento de amaciante.
      • Manual: 30 ml em 10 L de água por 10 min, sem enxágue.`,
    care: 'Não aplicar puro no tecido. Manter fora do alcance de crianças e animais. Evitar contato com olhos e pele.',
    alt: 'Amaciante 2L',
  },
  {
    id: 12,
    title: 'Branquinho 5L',
    img: '/imgs/branquinho-5l.webp',
    priceFrom: 19.9,
    price: 16.8,
    shortDesc:
      'Multiuso para grandes áreas, ideal para a limpeza de manutenção.',
    longDesc:
      'Indicado para pisos frios, azulejos, bancadas e superfícies laváveis. Remove sujidades comuns e deixa o ambiente com sensação de limpeza e frescor.',
    usage:
      '• Diluição sugerida: 1:50 para limpeza leve e 1:20 para sujidade mais pesada. Aplicar com pano, mop ou esponja e remover em seguida.',
    care: 'Evitar uso em pedras naturais porosas sem teste prévio. Manter fora do alcance de crianças. Não ingerir.',
    alt: 'Branquinho 5L',
  },
  {
    id: 13,
    title: 'Desinfetante Casa Limpa 5L',
    img: '/imgs/casa-limpa.webp',
    priceFrom: 13.5,
    price: 9.1,
    shortDesc:
      'Limpador de uso geral para a rotina da casa, com perfume agradável.',
    longDesc:
      'Ajuda a remover sujidades do dia a dia em superfícies laváveis como pisos, azulejos e bancadas. Pode ser usado puro ou diluído, conforme a necessidade.',
    usage:
      '• Aplicar com pano úmido, mop ou esponja. Para sujeiras localizadas, usar puro e remover em seguida. Enxaguar em áreas de preparo de alimentos.',
    care: 'Manter fora do alcance de crianças e animais. Evitar contato prolongado com a pele.',
    alt: 'Casa Limpa',
  },
  {
    id: 14,
    title: 'Cloro Líquido 6% 5L',
    img: '/imgs/cloro-liquido.webp',
    priceFrom: 22.9,
    price: 18,
    shortDesc:
      'Solução clorada para desinfecção e alvejamento de uso doméstico.',
    longDesc:
      'Auxilia na higienização de superfícies e na recuperação do branco em peças adequadas. Usar sempre diluído e respeitar o tempo de contato.',
    usage: `• Superfícies: 50 ml em 1 L de água. Aplique, aguarde 10 min e enxágue.
      • Roupas brancas: siga as instruções do rótulo e teste a resistência do tecido.`,
    care: 'Ambiente ventilado e uso de luvas são recomendados. Não misturar com ácidos, amônia ou outros produtos.',
    alt: 'Cloro Líquido',
  },
  {
    id: 15,
    title: 'Detergente Neutro 2L',
    img: '/imgs/detergente-2l.webp',
    priceFrom: 14.9,
    price: 8,
    shortDesc:
      'Detergente concentrado para louças e superfícies, com espuma controlada.',
    longDesc:
      'Remove gorduras e sujidades de cozinhas e utensílios, mantendo bom rendimento e enxágue fácil. Ideal para o uso diário.',
    usage: `• Louças: aplique uma pequena quantidade na esponja úmida, lave e enxágue. Superfícies:
    • dilua 1–2 tampas em 1 L de água e aplique com pano.`,
    care: 'Evitar contato prolongado com a pele. Conservar em local fresco e ao abrigo do sol. Manter fora do alcance de crianças.',
    alt: 'Detergente 2L',
  },
  {
    id: 16,
    title: 'Detergente Neutro 5L',
    img: '/imgs/detergente-5l.webp',
    priceFrom: 24.9,
    price: 15,
    shortDesc:
      'Versão econômica para limpeza de cozinhas, utensílios e superfícies laváveis.',
    longDesc:
      'Detergente concentrado de alto rendimento com espuma na medida certa para limpeza eficiente e enxágue rápido.',
    usage:
      '• Diluir 1–3 tampas em 1 L de água para superfícies. Para louças, aplicar direto na esponja. Enxaguar após o uso.',
    care: 'Manter fora do alcance de crianças e animais. Evitar contato com olhos e pele. Armazenar ao abrigo do sol.',
    alt: 'Detergente 5L',
  },
  {
    id: 17,
    title: 'Lava Autos 5L',
    img: '/imgs/lava-autos.webp',
    priceFrom: 24.9,
    price: 19.1,
    shortDesc:
      'Shampoo automotivo que remove sujeiras sem agredir a pintura, com brilho e toque suave.',
    longDesc:
      'Fórmula balanceada para lavar o carro com segurança, ajudando a soltar a sujeira e manter o brilho. Espuma controlada e fácil enxágue.',
    usage:
      '• Diluir conforme rótulo (geralmente 1:50). Lavar com esponja ou luva de microfibra, enxaguar bem e secar com pano macio. Evitar sol forte.',
    care: 'Não usar em superfícies quentes. Manter fora do alcance de crianças e animais.',
    alt: 'Lava Autos',
  },
  {
    id: 18,
    title: 'Desinfetante Lavanda 5L',
    img: '/imgs/lavanda.webp',
    priceFrom: 13.9,
    price: 9.1,
    shortDesc:
      'Limpador perfumado com fragrância de lavanda para uma casa cheirosa e acolhedora.',
    longDesc:
      'Ajuda na manutenção da limpeza deixando um agradável perfume de lavanda. Indicado para pisos e superfícies laváveis.',
    usage:
      '• Use puro em pontos de sujeira ou diluído (1–3 tampas em 1 L de água) para limpeza geral. Aplique com pano ou mop.',
    care: 'Evitar contato com olhos e pele. Não ingerir. Manter fora do alcance de crianças.',
    alt: 'Lavanda',
  },
  {
    id: 19,
    title: 'Limpador Perfumado Concentrado Campos Verde 1L',
    img: '/imgs/lp-campos-verde.webp',
    priceFrom: 29.9,
    price: 25,
    shortDesc:
      'Limpador perfumado com notas verdes, ideal para manutenção diária.',
    longDesc:
      'Combina limpeza leve com fragrância agradável para pisos e superfícies laváveis. Indicado para quem busca praticidade com um toque perfumado.',
    usage:
      '• Aplicar puro em pontos de sujeira ou diluir (1–3 tampas/L). Passar com pano ou mop e deixar secar naturalmente.',
    care: 'Manter fora do alcance de crianças. Evitar contato com olhos e pele.',
    alt: 'LP Campos Verde',
  },
  {
    id: 20,
    title: 'Limpador Perfumado Concentrado Casa Perfumada 1L',
    img: '/imgs/lp-casa-perfumada.webp',
    priceFrom: 25,
    price: 14,
    shortDesc:
      'Perfuma enquanto ajuda a limpar, deixando sensação prolongada de aconchego.',
    longDesc:
      'Indicado para pisos e superfícies laváveis. Fragrância marcante que contribui para um ambiente acolhedor.',
    usage:
      '• Utilize puro ou diluído (1–3 tampas por litro) conforme a necessidade. Aplicar com pano úmido ou mop.',
    care: 'Não ingerir. Evitar contato com olhos e pele. Manter fora do alcance de crianças.',
    alt: 'LP Casa Perfumada',
  },
  {
    id: 21,
    title: 'Limpador Perfumado Concentrado Dama da Noite 1L',
    img: '/imgs/lp-dama-da-noite.webp',
    priceFrom: 25,
    price: 14,
    shortDesc: 'Aroma marcante para uma limpeza prática e perfumada.',
    longDesc:
      'Limpador perfumado para manutenção de pisos e superfícies laváveis. Deixa um rastro olfativo intenso e agradável.',
    usage:
      '• Aplicar puro ou diluído (1–3 tampas/L) com pano ou mop. Enxaguar em áreas de preparo de alimentos.',
    care: 'Armazenar em local fresco e ao abrigo da luz. Manter fora do alcance de crianças.',
    alt: 'LP Dama da Noite',
  },
  {
    id: 22,
    title: 'Limpador Perfumado Concentrado Eucalipto 1L',
    img: '/imgs/lp-eucalipto.webp',
    priceFrom: 29.9,
    price: 25,
    shortDesc:
      'Fragrância refrescante de eucalipto para uma casa limpa e perfumada.',
    longDesc:
      'Ajuda a limpar e perfumar ambientes com um toque de frescor. Indicado para pisos e superfícies laváveis.',
    usage:
      '• Puro para sujeiras localizadas ou diluído (1–3 tampas/L) na limpeza geral. Aplicar com pano ou mop.',
    care: 'Evitar contato com olhos e pele. Não ingerir. Manter fora do alcance de crianças.',
    alt: 'LP Eucalipto',
  },
  {
    id: 23,
    title: 'Limpador Perfumado Concentrado Lavanda 1L',
    img: '/imgs/lp-lavanda.webp',
    priceFrom: 29.9,
    price: 25,
    shortDesc: 'Fragrância suave de lavanda que combina com a rotina da casa.',
    longDesc:
      'Limpador perfumado para manutenção de superfícies laváveis, deixando um aroma suave e relaxante.',
    usage:
      '• Use puro em áreas mais sujas ou dilua (1–3 tampas/L) para passar pano no dia a dia.',
    care: 'Manter fora do alcance de crianças. Evitar contato com olhos e pele.',
    alt: 'LP Lavanda',
  },
  {
    id: 24,
    title: 'Desinfetante Marine 5L',
    img: '/imgs/marine.webp',
    priceFrom: 13.9,
    price: 9.1,
    shortDesc: 'Toque marinho refrescante para limpeza leve e perfumada.',
    longDesc:
      'Ajuda a manter a casa limpa enquanto perfuma com notas marinhas. Indicado para pisos e superfícies laváveis.',
    usage:
      '• Aplicar puro em pontos específicos ou diluir (1–3 tampas/L) para limpeza geral com pano ou mop.',
    care: 'Evitar contato com olhos e pele. Não ingerir. Manter fora do alcance de crianças.',
    alt: 'Marine',
  },
  {
    id: 25,
    title: 'Limpa Pneu Gel 500g',
    img: '/imgs/pretinho-p.webp',
    priceFrom: 12.9,
    price: 9.8,
    shortDesc:
      'Realça o preto do pneu com acabamento uniforme em embalagem prática.',
    longDesc:
      'Fórmula desenvolvida para renovar a aparência dos pneus, proporcionando brilho e ajudando a evitar o ressecamento. Fácil de aplicar.',
    usage:
      '• Com o pneu limpo e seco, aplicar com esponja limpa. Espalhar de forma homogênea e evitar a banda de rodagem.',
    care: 'Não aplicar em áreas de frenagem. Manter longe de fontes de calor. Manter fora do alcance de crianças.',
    alt: 'Pretinho P',
  },
  {
    id: 26,
    title: 'Silicone Gel 3,6Kg',
    img: '/imgs/silicone-grande.webp',
    priceFrom: 44.9,
    price: 40,
    shortDesc:
      'Renova plásticos e borrachas, devolvendo brilho e ajudando na proteção contra ressecamento.',
    longDesc:
      'Acabamento automotivo para partes internas e externas (painéis, borrachas, frisos). Forma filme protetor e entrega brilho ajustável pela quantidade aplicada.',
    usage:
      '• Com a superfície limpa e seca, aplicar com pano macio. Espalhar uniformemente. Remover excesso para acabamento mais fosco.',
    care: 'Não aplicar em volante, manopla e pedais. Manter fora do alcance de crianças.',
    alt: 'Silicone Grande',
  },
  {
    id: 27,
    title: 'Silicone Gel 500ml',
    img: '/imgs/silicone-pequeno.webp',
    priceFrom: 12.9,
    price: 9.8,
    shortDesc:
      'Cuidado e brilho para detalhes automotivos em embalagem prática.',
    longDesc:
      'Ideal para plásticos e borrachas em detalhes internos e externos do veículo. Protege e realça o acabamento.',
    usage:
      '• Aplicar com pano macio e limpo sobre a superfície seca. Remover excesso se necessário.',
    care: 'Evitar contato com áreas de frenagem e direção. Não ingerir. Manter fora do alcance de crianças.',
    alt: 'Silicone Pequeno',
  },
  {
    id: 28,
    title: 'Desinfetante Talco 5L',
    img: '/imgs/talco.webp',
    priceFrom: 13.9,
    price: 9.1,
    shortDesc:
      'Talco perfumado que ajuda a manter a pele seca e com toque aveludado.',
    longDesc:
      'Produto de uso externo com fragrância suave. Auxilia a reduzir a umidade e o atrito, proporcionando sensação de conforto.',
    usage:
      '• Aplicar pequenas quantidades na pele limpa e seca. Espalhar delicadamente e reaplicar quando necessário.',
    care: 'Evitar inalação e contato com olhos. Não usar em pele irritada ou lesionada. Manter fora do alcance de crianças.',
    alt: 'Talco',
  },
  {
    id: 29,
    title: 'Lustra Móveis 500ml',
    img: '/imgs/lustra-moveis.webp',
    priceFrom: 11.9,
    price: 6.05,
    shortDesc:
      'Realça o brilho e ajuda a proteger superfícies de madeira e laminados.',
    longDesc:
      'Fórmula que remove poeira fina e cria um filme protetor leve, valorizando o aspecto natural dos móveis sem deixar resíduos pegajosos.',
    usage:
      '• Aplicar com pano macio e seco sobre a superfície limpa. Espalhar de forma uniforme e lustrar até obter o brilho desejado.',
    care: 'Não utilizar em pisos para evitar risco de escorregamento. Manter fora do alcance de crianças.',
    alt: 'Lustra Moveis',
  },
  {
    id: 30,
    title: 'Multiuso Incolor 5L',
    img: '/imgs/multi-uso.webp',
    priceFrom: 18.9,
    price: 15.2,
    shortDesc:
      'Limpador multiuso para cozinhas, banheiros e superfícies laváveis.',
    longDesc:
      'Ajuda a remover gordura leve e sujeiras comuns sem deixar resíduos, deixando as superfícies com aspecto limpo e brilhante.',
    usage:
      '• Aplicar puro em pontos de gordura ou diluído (1–3 tampas/L) para limpeza geral. Remover com pano úmido.',
    care: 'Evitar contato com olhos e pele. Não ingerir. Manter fora do alcance de crianças.',
    alt: 'Multiuso',
  },
  {
    id: 31,
    title: 'Lava Roupas Líquido Coco 5L',
    img: '/imgs/sabao-coco-5l.webp',
    priceFrom: 20.9,
    price: 16.6,
    shortDesc:
      'Lava-roupas com base de coco, delicado com os tecidos e eficiente na limpeza.',
    longDesc:
      'Indicado para roupas delicadas, peças infantis e do dia a dia. Ajuda a preservar as fibras e o toque suave, com espuma moderada e enxágue fácil.',
    usage: `• Máquina: 80–150 ml por carga média, conforme sujeira.
    • Manual: 80 ml em 10 L de água. Faça pré‑tratamento em manchas.`,
    care: 'Manter fora do alcance de crianças. Evitar contato com os olhos. Armazenar em local fresco e seco.',
    alt: 'Sabao de Coco 5L',
  },
  {
    id: 32,
    title: 'Lava Roupas Líquido Coco 2L',
    img: '/imgs/sabao-coco-2l.webp',
    priceFrom: 14.9,
    price: 7.8,
    shortDesc:
      'Versão prática do sabão de coco para peças delicadas e infantis.',
    longDesc:
      'Suave e eficaz, preserva o toque e o caimento dos tecidos. Indicado para lavagens manuais ou em máquina.',
    usage: `• Máquina: 60–120 ml por carga média.
      • Manual: 60–80 ml em 10 L de água. Faça teste de solidez de cor em peças coloridas.`,
    care: 'Conservar em local fresco e arejado. Não ingerir. Evitar contato com os olhos.',
    alt: 'Sabao de Coco 2L',
  },
  {
    id: 33,
    title: 'Limpador Perfumado Concentrado Talco 1L',
    img: '/imgs/lp-talco.webp',
    priceFrom: 29.9,
    price: 25,
    shortDesc:
      'Limpador perfumado com notas de talco para um ambiente aconchegante.',
    longDesc:
      'Indicado para a manutenção da limpeza em pisos e superfícies laváveis, deixando perfume suave de talco.',
    usage:
      '• Aplicar puro ou diluído (1–3 tampas/L) com pano ou mop, conforme a necessidade.',
    care: 'Evitar contato com olhos e pele. Manter fora do alcance de crianças.',
    alt: 'Linha Perfume Talco',
  },
  {
    id: 34,
    title: 'Limpador Perfumado Concentrado Violeta 1L',
    img: '/imgs/lp-violeta.webp',
    priceFrom: 29.9,
    price: 25,
    shortDesc:
      'Perfuma o ambiente com notas de violeta enquanto ajuda a limpar.',
    longDesc:
      'Para manutenção de pisos e superfícies laváveis, deixando uma fragrância floral agradável.',
    usage:
      '• Aplicar puro ou diluído (1–3 tampas/L) conforme o nível de sujeira. Passar com pano ou mop.',
    care: 'Não ingerir. Evitar contato com olhos e pele. Manter fora do alcance de crianças.',
    alt: 'Linha Perfume Violeta',
  },
  {
    id: 35,
    title: 'Cloro Gel 2L',
    img: '/imgs/cloro-gel-2l.webp',
    priceFrom: 12.9,
    price: 9.9,
    shortDesc:
      'Cloro em gel que adere melhor às superfícies para alvejamento e desinfecção.',
    longDesc:
      'Formulação em gel que facilita a aplicação vertical (paredes, rejuntes, vasos) e aumenta o tempo de contato. Indicado para alvejamento de roupas brancas (seguindo instruções) e desinfecção de superfícies laváveis.',
    usage: `Roupas brancas: diluir conforme rótulo e não misturar com outros produtos.
      Superfícies: aplicar puro ou diluído, deixar agir por alguns minutos e enxaguar.`,
    care: 'Não misturar com ácidos, amônia ou outros produtos. Usar luvas. Manter fora do alcance de crianças e animais. Armazenar em local ventilado e ao abrigo do sol.',
    alt: 'Cloro Gel 2 Litros',
  },
  {
    id: 36,
    title: 'Cloro Gel 5L',
    img: '/imgs/cloro-gel-5l.webp',
    priceFrom: 19.9,
    price: 16.9,
    shortDesc:
      'Versão econômica do cloro em gel para grandes limpezas e alvejamento de roupas brancas.',
    longDesc:
      'Cloro em gel que melhora a aderência e o desempenho em superfícies verticais, auxiliando na higienização e remoção de manchas. Seguir as diluições indicadas no rótulo.',
    usage: `Superfícies: aplicar puro em pontos específicos ou diluir (conforme rótulo) para limpeza geral.
      Roupas brancas: usar somente conforme orientação do fabricante.`,
    care: 'Evitar inalação e contato com olhos e pele. Não usar em metais sensíveis e pedras porosas. Não misturar com outros químicos.',
    alt: 'Cloro Gel 5 Litros',
  },
  {
    id: 37,
    title: 'Limpador Perfumado Base de Álcool 5L',
    img: '/imgs/alcool-perfumado.webp',
    priceFrom: 16.9,
    price: 14.9,
    shortDesc:
      'Álcool com fragrância suave para limpeza e perfumação de ambientes.',
    longDesc:
      'Auxilia na limpeza do dia a dia e deixa perfume agradável após o uso. Indicado para pisos frios e superfícies laváveis. Não usar em superfícies sensíveis ao álcool.',
    usage:
      'Aplicar com pano limpo e levemente umedecido. Testar em área pequena antes do uso. Não utilizar em acrílico, pinturas recentes ou superfícies laqueadas.',
    care: 'Produto inflamável. Manter longe de chamas e fontes de calor. Evitar inalação e contato com olhos e pele. Manter fora do alcance de crianças.',
    alt: 'Álcool Perfumado 5L',
  },
  {
    id: 38,
    title: 'Desinfetante Flores do Campo 5L',
    img: '/imgs/flores-do-campo.webp',
    priceFrom: 13.9,
    price: 9.1,
    shortDesc: 'Desinfeta e perfuma ambientes com notas florais suaves.',
    longDesc:
      'Indicado para higienização de pisos e superfícies laváveis, ajudando a eliminar sujeiras do dia a dia enquanto deixa fragrância de flores do campo.',
    usage:
      '• Puro em pontos de sujeira mais intensa ou diluído (1–3 tampas por litro) para limpeza geral. Aplicar com pano ou mop.',
    care: 'Evitar contato com olhos e pele. Não ingerir. Manter fora do alcance de crianças e animais. Armazenar em local fresco e arejado.',
    alt: 'Desinfetante Flores do Campo',
  },
]
