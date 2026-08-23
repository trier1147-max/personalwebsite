export const siteConfig = {
  url: 'https://zhaozhengyao.work',
  name: 'Zhao Zhengyao | AI PM Portfolio',
  author: 'Zhao Zhengyao',
  
  // Social links
  social: {
    github: 'https://github.com/trier1147-max',
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
    { key: 'projects', href: '#projects' },
    { key: 'experience', href: '#experience' },
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
      id: 'exp3',
      logo: '/images/stepfun-logo.svg',
      color: '#172033',
    },
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

  // Projects data (portfolio-first order)
  projects: [
    { id: 'proj2', image: '/images/project-molly.png', github: null, live: '/demos/molly/index.html', liveLabel: '在线体验 Demo', imagePortrait: false, requiresProxy: true }, // Molly 求职搭子
    { id: 'proj1', image: '/images/project-yangmenu.png', github: null, live: 'https://yangmenu-h5.vercel.app/', liveLabel: null, imagePortrait: true, requiresProxy: true }, // 洋菜单
    { id: 'proj5', image: '/images/project-working-agent.png', github: null, live: null, liveLabel: null, imagePortrait: false, requiresProxy: false }, // 工作管家
    { id: 'proj6', image: '/images/project-flipped.png', github: null, live: '/demos/flippedmusic/index.html', liveLabel: '在线体验 Demo', imagePortrait: false, requiresProxy: false }, // FLIPPED 音乐
    { id: 'proj3', image: '/images/project-generator.png', github: null, live: null, liveLabel: null, imagePortrait: true, requiresProxy: false }, // 小红书内容生成器
    { id: 'proj4', image: '/images/project-federated.png', github: null, live: null, liveLabel: null, imagePortrait: false, requiresProxy: false }, // 联邦学习
  ],

  // Skill categories order (matches dictionary keys)
  skillCategories: ['language', 'tools'],
} as const

export type Locale = (typeof siteConfig.i18n.locales)[number]
