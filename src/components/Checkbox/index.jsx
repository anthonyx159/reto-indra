import styles from './Checkbox.module.scss';

function Checkbox ({ id, label, register }) {
  return (
    <>
      <div className={styles.checkbox}>
        <input type="checkbox" id={id} name={id} required {...register(id, { required: true })} />
        <label for={id}>{ label }</label>
      </div>
    </>
  )
}

export default Checkbox