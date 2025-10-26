import Select from '../Select';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';
// import
import styles from './Form.module.scss';

function Form() {
  return (
    <>
      <div className={styles.form}>
        <h2 className={styles.form__title}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</h2>
          <div className={styles.form__box}>
            <Select />
            <Input id="document" placeholder="Nro. de documento" type="small" />
          </div>
          <Input id="phone" placeholder="Celular" />
          <div className={styles.form__box2}>
            <Checkbox id="terms" label="Acepto la Política de Privacidad" />
            <Checkbox id="news" label="Acepto la Política Comunicaciones Comerciales" />
            <div className={styles.form__terms}>Aplican Términos y Condiciones.</div>
          </div>
          <Button label="Cotiza aquí" />
      </div>
    </>
  )
}

export default Form;