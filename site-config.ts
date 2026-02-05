export const siteConfig = {
  name: 'Zhao Zhengyao | AI PM Portfolio',
  author: 'Zhao Zhengyao',
  
  // Social links
  social: {
    github: 'https://github.com/zhaozhengyao',
    linkedin: 'https://linkedin.com/in/zhaozhengyao',
    email: '1430439311@qq.com',
    wechat: 'zhaozhengyao',
  },

  // i18n configuration
  i18n: {
    defaultLocale: 'zh' as const,
    locales: ['zh', 'en'] as const,
  },

  // Navigation items (keys reference dictionary)
  navigation: [
    { key: 'home', href: '/' },
    { key: 'education', href: '#education' },
    { key: 'experience', href: '#experience' },
    { key: 'skills', href: '#skills' },
    { key: 'contact', href: '#contact' },
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
    {
      id: 'exp3',
      logo: '/images/weibo-logo.png',
      color: '#E6162D',
    },
  ],

  // Projects data
  projects: [
    {
      id: 'proj1',
      image: '/images/project-federated.png',
      github: null,
    },
  ],

  // Skill categories order (matches dictionary keys)
  skillCategories: ['language', 'tools'],
} as const

export type Locale = (typeof siteConfig.i18n.locales)[number]
