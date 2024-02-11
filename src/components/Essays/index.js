import styles from './style.module.scss'
import { projects } from '../../Data/data.js';
import Double from '../Double';
import Container from '../Container';

export default function Essays() {
  return (
    <Container >
    <main id='books' className={styles.main}>
     <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]}/>
      </div>
    </main>
    </Container>
  )
}