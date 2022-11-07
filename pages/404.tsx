// Components==============
import Layout from 'global_components/Layout/Layout';
import React from 'react';
import styles from 'components/404.module.scss';
import Image from 'next/image';
import John from 'public/images/what-huh.gif';
import Container from 'global_components/Container/Container';
import Button from 'global_components/Button/Button';
import { useRouter } from 'next/router';
import { useLocale } from 'hooks/useLocale';
// =========================

export default function NotFound() {
  const { push } = useRouter();
  const { t } = useLocale();

  return (
    <Layout>
      <Container>
        <div className={styles.wrapper}>
          <Image src={John} alt="John Travolta" />
          <div>
            <h2>
              {t(
                "Woops, this page doesn't seem to exists...",
                'Oeps Deze pagina lijkt niet (meer) te bestaan...'
              )}
            </h2>
            <Button onClick={() => push('/')} variant="border-black">
              {t('Go back', 'Ga terug')}
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
