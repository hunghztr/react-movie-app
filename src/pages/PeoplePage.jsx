import { useParams } from "react-router-dom";
import ImageComponent from "../components/Image";
import RelatedMediaList from "../components/MediaDetail/RelatedMediaList";
import useFetch from "../hooks/useFetch";

const PeoplePage = () => {
  const { id } = useParams();
  const { data: personInfo } = useFetch({
    url: `/person/${id}?append_to_response=combined_credits`,
  });

  return (
    <div className="bg-black text-white text-[1.2vw]">
      <div className="container">
        <div className="flex-1">
          <ImageComponent
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${personInfo?.profile_path}`}
            width={600}
            height={900}
            className="mb-6"
          />
          <div>
            <p className="font-bold text-[1.3vw] mb-6">Person Info</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Known For</p>
                <p>{personInfo?.known_for_department}</p>
              </div>
              <div>
                <p className="font-bold">Gender</p>
                <p>
                  {personInfo?.gender === 2
                    ? "Male"
                    : personInfo?.gender === 1
                    ? "Female"
                    : "None Binary"}
                </p>
              </div>
              <div>
                <p className="font-bold">Place of Birth</p>
                <p>{personInfo?.place_of_birth}</p>
              </div>
              <div>
                <p className="font-bold">Birth Day</p>
                <p>{personInfo?.birthday}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <p className="font-bold text-[1.5vw] mb-6">{personInfo?.name}</p>
          <div className="mb-6">
            <p className="mb-4 text-[1.4vw] font-bold">Biography</p>
            <p className="whitespace-pre-line">{personInfo?.biography}</p>
            <p>đây là info </p>
          </div>
          <div>
            <RelatedMediaList
              title="Known For"
              mediaList={personInfo?.combined_credits?.cast || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeoplePage;
