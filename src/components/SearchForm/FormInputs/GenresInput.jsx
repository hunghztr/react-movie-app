import { useWatch } from "react-hook-form";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";

const GenresInput = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: "mediaType", control });
  const { data } = useFetch(
    {
      url: `/genre/${mediaType}/list`,
    },
    { enabled: !!mediaType }
  );
  useEffect(() =>{
    onChange([])
  },[mediaType])
  return (
    <div className="flex gap-1 flex-wrap">
      {(data.genres || []).map((i) => {
        return (
          <p
            key={i.id}
            className={`border py-1 px-2 rounded-lg cursor-pointer ${
              value.includes(i.id) ? "bg-black text-white" : ""
            }`}
            onClick={() => {
              if(value.includes(i.id)) {
                const newValue = value.filter(item => item !== i.id)
                onChange([...newValue])
              }else{
                onChange([...value, i.id]);
              }
            }}
          >
            {i.name}
          </p>
        );
      })}
    </div>
  );
};
export default GenresInput;
