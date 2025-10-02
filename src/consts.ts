export const SITE = {
  url: 'https://www.priscilaroza.com.br/',
  title: 'Psicóloga Priscila Roza',
  description:
    'Psicóloga Analista do Comportamento focada no empoderamento feminino.',
}

export const PESSOAL = {
  name: 'Priscila Roza',
  email: 'priscilaroza.psi@gmail.com',
  whats_link: 'https://api.whatsapp.com/send?phone=5511941238137',
  whats_number: '11 94123-8137',
  crp: 'CRP 06/196438'
}

export const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/priscilarozapsicologa/',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/priscilarozapsi/',
    icon: 'instagram',
  },
] as const

export const SEO_INFO = [
  {
    name: 'description',
    content: `${SITE.description}`,
  },
  { name: 'keywords', content: 'Psicóloga, Psicologia, atendimento terapêutico' },
  { name: 'author', content: `${SITE.title}` },
] as const

export const OPEN_GRAPH = [
  { property: 'og:url', content: `${SITE.url}` },
  { property: 'og:description', content: `${SITE.description}` },
  { property: 'og:image', content: '/og_image.jpg' },
  { property: 'og:image:type', content: 'image/jpeg' },
  { property: 'og:image:width', content: '400' },
  { property: 'og:image:height', content: '300' },
  { property: 'og:image:alt', content: `${SITE.title}` },
] as const

export const ROUTES = [
  {
    href: '/',
    icon: 'home',
    label: 'Início',
  },
  {
    href: '/blog',
    icon: 'code',
    label: 'Blog',
  },
] as const

export const FONTS =
  'https://fonts.googleapis.com/css2?family=Borel&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap'
