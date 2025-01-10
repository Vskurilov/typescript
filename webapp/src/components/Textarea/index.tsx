import cn from 'classnames'
import { type FormikProps } from 'formik'
import css from './index.module.scss'

export const TextArea = ({ name, label, formik }: { name: string; label: string; formik: FormikProps<any> }) => {
  const value = formik.values[name]
  const error = formik.errors[name] as string | undefined
  const touched = formik.touched[name]
  const disabled = formik.isSubmitting
  const invalid = !!touched && !!error

  return (
    <div className={cn({ [css.field]: true, [css.disabled]: disabled })}>
      <label className={css.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={cn({
          [css.input]: true,
          [css.invalid]: invalid,
        })}
        onChange={(e) => {
          void formik.setFieldValue(name, e.target.value)
        }}
        onBlur={formik.handleBlur}
        value={value}
        name={name}
        id={name}
        disabled={formik.isSubmitting}
      />
      {invalid && <div className={css.error}>{error}</div>}
    </div>
  )
}