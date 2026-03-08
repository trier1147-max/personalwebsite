# PersonalWebsite 项目索引

> 用于 Vibe Coding 的上下文工程文档。AI 助手在修改或新增功能时请参考此索引以保持项目风格一致。

---

## 1. 项目概览

- **类型**：个人作品集/简历网站
- **身份**：赵政尧 - AI 产品经理 Portfolio
- **定位**：简洁、专业、有温度的个人展示页

---

## 2. 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 15 (App Router) |
| UI | React 18 + TypeScript |
| 样式 | Tailwind CSS 3.4 |
| 动效 | Framer Motion 11 |
| 国际化 | 基于 `[lang]` 动态路由 + JSON 字典 |

---

## 3. 设计系统 / Vibe

### 3.1 色彩体系
```
--background: #FFFDF9      (主背景 - 暖白/米白)
--background-alt: #FAF8F5  (区块背景 - 略深)
--foreground: #1a1a1a     (主文字)
--foreground-secondary: #404040
--foreground-muted: #666666
--muted: #999999
--border: #E8E6E3          (柔和边框)
```

**原则**：暖色调、低对比、避免纯黑，整体偏奶油/纸张质感。

### 3.2  typography
- **字体**：Inter（西文）+ PingFang SC / 微软雅黑（中文）
- **大标题**：`.heading-1` → 5xl~7xl, font-bold, tracking-tight
- **区块标题**：`.heading-2` → 2xl~3xl, font-semibold
- **小标题**：`.heading-3` → lg, font-semibold
- **中文**：`letter-spacing: 0.02em`, `line-height: 1.85`

### 3.3 动效风格
- **入场**：`fadeIn` / `slideUp`，stagger 子元素（0.06~0.1s）
- **缓动**：`ease: [0.25, 0.4, 0.25, 1]`（material-like）
- **装饰**：✦ 符号、柔和色块（amber/blue/purple 低透明度），轻微浮动
- **悬停**：`translateY(-1px)` ~ `translateY(-2px)`，轻微阴影

### 3.4 组件样式
| 组件 | 类名 | 特征 |
|------|------|------|
| 卡片 | `.card` | rounded-2xl, 白底, 细边框, hover 微上浮+阴影 |
| 标签 | `.tag` | rounded-lg, background-alt, 小 hover 动效 |
| 主按钮 | `.btn-primary` | 深色背景, 白字, 圆角 xl |
| 链接按钮 | `.btn-link` | underline, underline-offset-4 |
| 导航项 | `.nav-link` | 小字号, muted 色, active 时下划线 |
| 照片框 | `.photo-frame` | rounded-full, hover scale |
| Logo 盒 | `.logo-box` | w-11 h-11, rounded-xl |

### 3.5 布局
- **容器**：`.container-custom` → max-w-7xl, px-6 lg:px-8
- **区块间距**：`.section-padding` → py-12 md:py-14 xl:py-14
- **区块背景**：`.bg-alt` 用于交替背景
- **侧边装饰**：`SectionDecorations` 用于填充宽屏两侧留白

---

## 4. 架构与文件结构

```
app/
  [lang]/           # 国际化路由 (zh, en)
    layout.tsx       # 根布局，加载 Navbar + Footer
    page.tsx        # 主页面，组装各 section
  globals.css       # CSS 变量 + 组件类
components/
  index.ts          # barrel export
  navbar.tsx        # 固定顶栏，滚动高亮，语言切换
  hero.tsx          # 首屏
  experience.tsx    # 工作经历
  education.tsx     # 教育背景
  skills.tsx        # 技能
  contact.tsx       # 联系方式
  footer.tsx        # 页脚
dictionaries/
  zh.json / en.json # 文案
lib/
  dictionary.ts     # getDictionary(locale)
site-config.ts      # 站点配置（导航、教育、经历、社交等）
```

---

## 5. 关键模式

### 5.1 组件规范
- **Props**：`dict: Dictionary`（来自 `getDictionary`）+ 可选 `lang: Locale`
- **客户端组件**：`'use client'` 在首行
- **动效**：用 `motion` 包裹，`variants` 定义 `hidden` / `visible`
- **入屏触发**：`useInView(ref, { once: true, margin: '-80px' })` 触发 `animate`

### 5.2 国际化
- 文案全部从 `dict` 取，key 对应 `dictionaries/*.json` 结构
- 新增文案时需同时更新 `zh.json` 和 `en.json`
- 导航、教育、经历 ID 与 `site-config.ts` 对应

### 5.3 配置驱动
- 导航项、教育、经历、技能分类等均在 `site-config.ts`
- 新增 section 时：1) 在 config 中声明 2) 在 dictionary 中加文案 3) 写组件

### 5.4 高亮文本
- 字典中可用 `**文本**` 表示高亮，组件用 `parseAchievement` 或 `.highlight` 渲染

---

## 6. Vibe Coding 检查清单

新增或修改时请确保：
- [ ] 色彩使用 CSS 变量，不写死十六进制（除 site-config 中的品牌色）
- [ ] 动效使用 Framer Motion，缓动与现有一致
- [ ] 文案走 i18n，不硬编码
- [ ] 新组件使用 `.container-custom`、`.section-padding` 等已有类
- [ ] 保持暖白、低对比、有温度的整体氛围

---

## 7. 快速参考

```tsx
// 新 section 骨架
export function NewSection({ dict }: { dict: Dictionary }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="new-section" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
          <motion.h2 variants={itemVariants} className="heading-2 mb-12">{dict.newSection.title}</motion.h2>
          {/* ... */}
        </motion.div>
      </div>
    </section>
  )
}
```
