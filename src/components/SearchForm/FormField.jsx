import { Controller } from "react-hook-form"

// eslint-disable-next-line no-unused-vars
const FormField = ({control, label, name, Component}) => {
  return (
    <div>
      <p className="font-bold mb-1">{label}</p>
      <Controller name={name} control={control} 
      render={({field:{
        name,onChange,value
      }}) => {
        return <Component name={name} onChange={onChange} value={value} control={control} />
      }} />
    </div>
  )
}
export default FormField