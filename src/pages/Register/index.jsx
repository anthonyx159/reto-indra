import Progress from "../../components/Progress";
import ProgressDesktop from "../../components/ProgressDesktop";
import Card from "../../components/Card";
import CardPlan from "../../components/CardPlan";
import styles from './Register.module.scss';
import iconMe from '../../assets/icon-me.svg';
import iconSomene from '../../assets/icon-someone.svg';
import iconBackBlue from '../../assets/icon-backBlue.svg';


function Register() {
  return (
    <div className={styles.registerPage}>
      <Progress />
      <ProgressDesktop />
      <div className={styles.back}>
        <div className={styles.back__button}>
          <img src={iconBackBlue} alt="Regresar" />
          <span>Volver</span>
        </div>
      </div>
      <div className={styles.divisor}></div>
      <div className={styles.desc}>
        <h1 className={styles.desc__title}>Rocío ¿Para quién deseas cotizar?</h1>
        <p className={styles.desc__text}>Selecciona la opción que se ajuste más a tus necesidades.</p>
      </div>
      <div className={styles.cards}>
        <Card
          name="coverage"
          id="forMe"
          title="Para mí"
          desc="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          icon={iconMe}
          // checked={true}
          onChange={() => {}}
        />
        <Card
          name="coverage"
          id="forSomeone"
          title="Para alguien más"
          desc="Realiza una cotización para uno de tus familiares o cualquier persona."
          icon={iconSomene}
          // checked={true}
          onChange={() => {}}
        />
      </div>
      <div className={styles.container}>
        <CardPlan />
      </div>
    </div>
  )
}

export default Register;