import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  eyebrow: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    eyebrow: '内容优先',
    title: 'Markdown 即内容源',
    description: (
      <>
        所有笔记都直接存放在 <code>docs/</code> 目录，支持图片、代码块、表格与
        Front Matter，写作和版本管理都很轻。
      </>
    ),
  },
  {
    eyebrow: '结构清晰',
    title: '左侧目录像书一样组织',
    description: (
      <>
        目录支持分类与折叠，适合持续沉淀 AI Infra 主题下的 Serving、检索、
        推理优化与观测实践。
      </>
    ),
  },
  {
    eyebrow: '部署简单',
    title: '静态站点，适合长期维护',
    description: (
      <>
        构建产物是纯静态文件，可部署到 Vercel、Netlify、GitHub Pages 或任意
        Nginx 静态托管环境。
      </>
    ),
  },
];

function Feature({title, eyebrow, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionKicker}>Why this site</div>
          <Heading as="h2">为 AI Infra 学习与输出打造的最小可维护结构</Heading>
          <p>
            首页用于展示你的定位与内容方向，笔记区则承担长期沉淀。两部分职责清晰，
            后续扩展不会把站点越写越乱。
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
