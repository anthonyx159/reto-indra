import styles from './Input.module.scss';

function Input({ id, placeholder, type = undefined, register, maxNumber }) {
  return (
    <>
      <div className={`${styles.inputBox} ${styles[type]}`}>
        <input 
          id={id} 
          type="tel" 
          required 
          {...register(id, { 
            required: true, 
            setValueAs: (v) => v.replace(/\D/g, ''),
            pattern: {
              value: new RegExp(`^\\d{${maxNumber}}$`),
              message: `Debe tener ${maxNumber} dígitos`,
            }
          })} 
        />
        <label for={id}>{ placeholder }</label>
      </div>
    </>
  ); 
}

export default Input;