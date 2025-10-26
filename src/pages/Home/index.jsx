import Form from '../../components/Form';
import styles from './Home.module.scss';
import people from '../../assets/people.png';
import peopleDsktop from '../../assets/people-desktop.png';

function Home() {

  return (
    <>
      <div className={styles.home}>
        <div className={styles.left}>
          <img src={peopleDsktop} alt="Personas" />
        </div>
        <div className={styles.right}>
          <div className={styles.principal}>
            <div className={styles.principal__box}>
              <div className={styles.principal__text1}>Seguro Salud Flexible</div>
              <div className={styles.principal__text2}>Creado para ti y tu familia</div>
            </div>
            <img src={people} alt="Personas" className={styles.principal__img}/>
          </div>
          <div className={styles.divisor}></div>
          <Form />
        </div>
      </div>
    </>
  )
}

export default Home;