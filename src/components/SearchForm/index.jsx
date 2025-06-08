import { useForm } from "react-hook-form"
import FormField from "./FormField"
import MediaTypeInput from "./FormInputs/MediaTypeInput"
import GenresInput from "./FormInputs/GenresInput"
import RatingInput from "./FormInputs/RatingInput"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const SearchForm = ({setSearch}) => {
  const [mediaType] = useSearchParams()
  const media = mediaType.get('mediaType')
  const {handleSubmit,control,watch} = useForm({
    defaultValues:{
      mediaType:['tv','movie'].includes(media)?media:'movie',
      genres:[],
      rating:'All'
    }
  }) 
  const form = watch()
  useEffect(() =>{
    setSearch(form)
  },[JSON.stringify(form)])
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <form className="space-y-4" onSubmit={handleSubmit((e) => console.log({e}))}>
        <FormField name='mediaType' label='MediaType' control={control} Component={MediaTypeInput} />
        <FormField  name='genres' label='Genres' control={control} Component={GenresInput} />
        <FormField name='rating' label='Rating' control={control} Component={RatingInput}/>
        <input type="submit"></input>
      </form>
    </div>
  )
}
export default SearchForm