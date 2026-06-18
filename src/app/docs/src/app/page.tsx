import Link from 'next/link';
import { Typography } from '@core-circle/ui';
import { homePageStyles as s } from './home.styles';
import { HOME_COMPONENT_CARDS, HOME_HEADER_CONTENT, HOME_SECTION_TITLE } from '../constants/home-page/home-page-constant';

const ComponentCard = ({ title, description, href, icon: Icon }: typeof HOME_COMPONENT_CARDS[0]) => (
  <Link href={href} className={s?.card}>
    <div className={s?.cardIconWrapper}>
      <Icon className={s?.cardIcon} />
    </div>
    <Typography variant="h3" className={s?.cardTitle}>{title}</Typography>
    <Typography variant="p" className={s?.cardDescription}>{description}</Typography>
  </Link>
);

export default function Index() {
  return (
    <div className={s?.container}>
      <header className={s?.header}>
        <Typography variant="h1" className={s?.title}>
          {HOME_HEADER_CONTENT?.title} <span className={s?.titleAccent}>{HOME_HEADER_CONTENT?.titleAccent}</span>
        </Typography>
        <Typography variant="p" className={s?.description}>
          {HOME_HEADER_CONTENT?.description}
        </Typography>
      </header>

      <section>
        <Typography variant="h2" className={s?.sectionTitle}>
          {HOME_SECTION_TITLE}
        </Typography>

        <div className={s?.grid}>
          {HOME_COMPONENT_CARDS.map((card) => (
            <ComponentCard key={card.href} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}
