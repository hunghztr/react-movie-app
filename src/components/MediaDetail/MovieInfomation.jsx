import { currencyFormatter } from "../../libs/utils";

const MovieInfomation = ({movieInfo}) => {
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Infomation</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{movieInfo?.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {(movieInfo?.origin_country || []).map( i => i).join(', ')}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{movieInfo?.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{currencyFormatter(movieInfo?.budget)}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{currencyFormatter(movieInfo?.revenue)}</p>
      </div>
    </div>
  );
};
export default MovieInfomation;
