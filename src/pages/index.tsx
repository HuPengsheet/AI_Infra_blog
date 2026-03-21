import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx('container', styles.heroGrid)}>
        <div className={styles.heroContent}>
          <div className={styles.kicker}>Personal AI Infra Notebook</div>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/notes/intro">
              开始阅读笔记
            </Link>
            <Link className="button button--secondary button--lg" to="/notes/guides/development">
              查看开发文档
            </Link>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/yourname" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://x.com/yourname" target="_blank" rel="noreferrer">
              X
            </a>
            <a href="mailto:you@example.com">Email</a>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <div className={styles.panelCard}>
            <div className={styles.panelLabel}>内容覆盖</div>
            <ul className={styles.panelList}>
              <li>LLM 推理服务与调度</li>
              <li>向量数据库与检索链路</li>
              <li>模型平台工程化与可观测性</li>
            </ul>
          </div>
          <div className={styles.miniStats}>
            <div className={styles.stat}>
              <strong>Markdown</strong>
              <span>内容源</span>
            </div>
            <div className={styles.stat}>
              <strong>Static</strong>
              <span>易部署</span>
            </div>
            <div className={styles.stat}>
              <strong>Docs UI</strong>
              <span>可折叠目录</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.quickIntro}>
          <Heading as="h2">一个适合长期沉淀 AI Infra 知识的个人站点</Heading>
          <p>
            你可以把它当成公开主页加知识库的组合：首页负责介绍自己与内容方向，
            文档区负责系统化整理技术笔记。
          </p>
        </div>
        <div className={styles.ctaRow}>
          <Link
            className={clsx('button button--outline button--primary', styles.ctaGhost)}
            to="/notes/foundations/ai-infra-landscape">
            查看示例笔记
          </Link>
          <span className={styles.ctaHint}>后续只需往 `docs/notes` 里加 Markdown 文件即可新增文章。</span>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="AI Infra 个人笔记网站，包含首页宣传和可折叠目录的 Markdown 笔记区。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
