export const siteConfig = {
  url: 'https://zhaozhengyao.work',
  name: 'Zhao Zhengyao | AI PM Portfolio',
  author: 'Zhao Zhengyao',
  
  // Social links
  social: {
    github: 'https://github.com/trier1147-max',
    linkedin: 'https://linkedin.com/in/zhaozhengyao',
    email: '1430439311@qq.com',
    wechat: 'zhaozhengyao',
    xiaohongshu: 'https://xhslink.com/m/6ji6daHenYm',
  },

  // i18n configuration
  i18n: {
    defaultLocale: 'zh' as const,
    locales: ['zh', 'en'] as const,
  },

  // Navigation items (keys reference dictionary)
  navigation: [
    { key: 'home', href: '/' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'education', href: '#education' },
    { key: 'skills', href: '#skills' },
  ],

  // Education data (school IDs match dictionary keys)
  education: [
    {
      id: 'lse',
      logo: '/images/lse-logo.png',
      color: '#9E1B32',
    },
    {
      id: 'hust',
      logo: '/images/hust-logo.png',
      color: '#003087',
    },
  ],

  // Experience data (experience IDs match dictionary keys)
  experience: [
    {
      id: 'exp1',
      logo: '/images/meituan-logo.png',
      color: '#FFD100',
    },
    {
      id: 'exp2',
      logo: '/images/tencent-logo.png',
      color: '#1DA1F2',
    },
  ],

  // Projects data (order: 洋菜单 → 学术写作助手 → 小红书封面 → 联邦学习)
  projects: [
    { id: 'proj1', image: '/images/project-yangmenu.png', github: null, live: 'https://yangmenu-h5.vercel.app/', imagePortrait: true },  // 洋菜单
    { id: 'proj3', image: '/images/project-generator.png', github: null, live: null, imagePortrait: true }, // 小红书内容生成器
    { id: 'proj2', image: '/images/project-writing.png', github: null, live: 'https://scholar-flow-social-science-ai-writ.vercel.app/', imagePortrait: false }, // AI 社科学术写作助手
    { id: 'proj4', image: '/images/project-federated.png', github: null, live: null, imagePortrait: false }, // 联邦学习
  ],

  // Skill categories order (matches dictionary keys)
  skillCategories: ['language', 'tools'],
} as const

export type Locale = (typeof siteConfig.i18n.locales)[number]
