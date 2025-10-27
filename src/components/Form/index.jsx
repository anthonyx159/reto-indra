import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useGetUsersQuery } from '../../store/apis/userApi.js';
import { useGetPlansQuery } from '../../store/apis/plansApi.js';
import { updateUser } from '../../store/slices/userSlice.js';
import { updatePlans } from '../../store/slices/plansSlice.js';

import Select from '../Select';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';
// import
import styles from './Form.module.scss';

function Form() {
  const { 
    data: dataUser,
    // isLoading: isLoadingUser, 
    // isError: isErrorUser, 
    isSuccess: isSuccessUser 
  } = useGetUsersQuery();
  
  const { 
    data: dataPlans,
    // isLoading: isLoadingPlans, 
    // isError: isErrorPlans, 
    isSuccess: isSuccessPlans 
  } = useGetPlansQuery();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("se obtiene la data correcta", data);
    if (isSuccessUser && isSuccessPlans) {
      dispatch(updateUser(dataUser));
      dispatch(updatePlans(dataPlans));
      navigate("/register");
    } else {
      console.log("Error al obtener los datos");
    }
  };

  return (
    <>
      <div className={styles.form}>
        <h2 className={styles.form__title}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.</h2>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className={styles.form__box}>
                <Select register={register} errors={errors} />
                <Input id="document" placeholder="Nro. de documento" type="small" register={register} errors={errors} maxNumber="8"/>
              </div>
              {errors.document && <p className={styles.form__error}>*Documento no válido</p>}
            </div>

            <Input id="phone" placeholder="Celular" register={register} errors={errors} maxNumber="9"/>
            {errors.phone && <p className={styles.form__error}>*Teléfono no válido</p>}

            <div className={styles.form__box2}>
              <div>
                <Checkbox id="terms" label="Acepto la Política de Privacidad" register={register} errors={errors} />
                {errors.terms && <p className={styles.form__error}>*Requerido</p>}
              </div>

              <div>
                <Checkbox id="news" label="Acepto la Política Comunicaciones Comerciales" register={register} errors={errors} />
                {errors.news && <p className={styles.form__error}>*Requerido</p>}
              </div>
              <div className={styles.form__terms}>Aplican Términos y Condiciones.</div>
            </div>
            <Button label="Cotiza aquí" />
          </form>
      </div>
    </>
  )
}

export default Form;