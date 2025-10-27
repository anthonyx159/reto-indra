import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Progress from "../../components/Progress";
import ProgressDesktop from "../../components/ProgressDesktop";
import Card from "../../components/Card";
import CardPlan from "../../components/CardPlan";
import styles from './Register.module.scss';
import iconMe from '../../assets/icon-me.svg';
import iconSomene from '../../assets/icon-someone.svg';
import iconBackBlue from '../../assets/icon-backBlue.svg';

function Register() {
  const [showSelection, setShowSelection] = useState(false);

  const { name, birthDay } = useSelector((state) => state.user);
  const { list } = useSelector((state) => state.plans);
  const navigate = useNavigate();

  const getAge = (birthDate) => {
    const [dia, mes, anio] = birthDate.split('-');
    const fechaNac = new Date(`${anio}-${mes}-${dia}`);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNac.getMonth();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }

    return edad;
  };
  const getAgeFilter = list.filter(el => Number(getAge(birthDay)) <= Number(el.age));

  const [filterList, setFilterList] = useState(getAgeFilter);

  const originalFilterList = () => {
    setFilterList(getAgeFilter)
    setShowSelection(true);
  };

  const modifiedFilterList = () => {
    setFilterList(() => {
      const newFilterList = filterList.map(el => {
        return {...el, price: (el.price * 0.95), oldPrice: el.price};
      }); 
      return newFilterList;
    })
    setShowSelection(true);
  };

  const back = () => {
    navigate(-1);
  }

  return (
    <div className={styles.registerPage}>
      <Progress back={back}/>
      <ProgressDesktop />
      <div className={styles.back}>
        <div className={styles.back__button} onClick={back}>
          <img src={iconBackBlue} alt="Regresar" />
          <span>Volver</span>
        </div>
      </div>
      <div className={styles.divisor}></div>
      <div className={styles.desc}>
        <h1 className={styles.desc__title}>{name} ¿Para quién deseas cotizar?</h1>
        <p className={styles.desc__text}>Selecciona la opción que se ajuste más a tus necesidades.</p>
      </div>
      <div className={styles.cards}>
        <Card
          name="coverage"
          id="forMe"
          title="Para mí"
          desc="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          icon={iconMe}
          onChange={originalFilterList}
        />
        <Card
          name="coverage"
          id="forSomeone"
          title="Para alguien más"
          desc="Realiza una cotización para uno de tus familiares o cualquier persona."
          icon={iconSomene}
          onChange={modifiedFilterList}
        />
      </div>
      <div className={`${styles.container} ${!showSelection ? styles.hidden : ''}`}>
        {filterList.map((plan, index) => (
          <CardPlan key={index} {...plan} />
        ))} 
      </div>
    </div>
  )
}

export default Register;