import Link from 'next/link';
import { homePageStyles as s } from './home.styles';
import { HOME_COMPONENT_CARDS, HOME_HEADER_CONTENT, HOME_SECTION_TITLE } from '../constants/home-page/home-page-constant';

const ComponentCard = ({ title, description, href, icon: Icon }: typeof HOME_COMPONENT_CARDS[0]) => (
  <Link href={href} className={s?.card}>
    <div className={s?.cardIconWrapper}>
      <Icon className={s?.cardIcon} />
    </div>
    <h3 className={s?.cardTitle}>{title}</h3>
    <p className={s?.cardDescription}>{description}</p>
  </Link>
);

export default function Index() {
  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <h1 className={s?.title}>
          {HOME_HEADER_CONTENT?.title} <span className={s?.titleAccent}>{HOME_HEADER_CONTENT?.titleAccent}</span>
        </h1>
        <p className={s?.description}>
          {HOME_HEADER_CONTENT?.description}
        </p>
      </header>

      <section>
        <h2 className={s?.sectionTitle}>
          {HOME_SECTION_TITLE}
        </h2>

        <div className={s?.grid}>
          {HOME_COMPONENT_CARDS.map((card) => (
            <ComponentCard key={card.href} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
