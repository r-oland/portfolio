// Components==============
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import Image from 'next/image';
import John from 'public/images/what-huh.gif';
import styles from './not-found.module.scss';
// =========================

export default function NotFound() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <Image src={John} alt="John Travolta" />
        <div>
          <h2>Woops, this page doesn't seem to exists...</h2>
          <Button to="/" variant="border-black">
            Go back
          </Button>
        </div>
      </div>
    </Container>
  );
}
