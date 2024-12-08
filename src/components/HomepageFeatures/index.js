import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Общие компоненты',
    path: 'docs/category/общие-компоненты',
  },
  {
    title: 'Страницы',
    path: '/docs/category/страницы',
  },
];

function Feature({title, path}) {
  return (
    <div className={clsx('col col--6 padding--lg')}>
      <Link
        className="button button--block button--secondary button--lg"
        to={path}>
        {title}
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
