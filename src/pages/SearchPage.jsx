import { useState } from "react"
import SearchForm from "../components/SearchForm"
import useFetch from "../hooks/useFetch"
import RelatedMediaList from "../components/MediaDetail/RelatedMediaList"
const SearchPage = () => {
  const [search,setSearch] = useState({
    mediaType:'movie',
    genres:[],
    rating:'All'
  })
  const [min,max] = search.rating === 'All'? [0,100]:search.rating.split(' - ')
  const {data} = useFetch({
    url: `/discover/${search.mediaType}?with_genres=${search.genres.join(',')}&vote_average.gte=${min/10}&vote_average.lte=${max/10}`
  })
  return (
    <div className="container flex-col">
      <p className="font-bold text-2xl">Search</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm setSearch={setSearch} />
        </div>
        <div className="flex-[3]">
          <RelatedMediaList title="" mediaList={(data.results || [])} />
        </div>
      </div>
    </div>
  )
}
export default SearchPage