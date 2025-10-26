import styles from './Input.module.scss';

function Input({ id, placeholder, type = undefined }) {
  return (
    <>
      <div className={`${styles.inputBox} ${styles[type]}`}>
        <input id={id} type="text" required/>
        <label for={id}>{ placeholder }</label>
      </div>
    </>
  ); 
}

export default Input;