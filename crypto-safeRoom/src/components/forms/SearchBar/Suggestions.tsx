import { IProduct, ISuggestions } from "../../../Interfaces/Interfaces";
import { Container } from "../../../pages";
import dummyIMG from "../../../assets/img/logos/images.png";
import { Loading } from "..";
import emptyImg from "../../../assets/img/logos/empty_state.png";
const Suggestions = ({ data, showLoading, nothingFound }: ISuggestions) => {
  return (
    <Container
      dir=""
      style="w-full max-h-[400px] dropdown-bottom  -mt-4 pt-5 overflow-y-auto absolute border-t-0 -z-10 shadow-xl rounded-t-xl rounded-b-md bg-base-100  border border-slate-400"
    >
      {showLoading && (
        <div className="my-5 flex justify-center">
          <Loading />
        </div>
      )}
      {nothingFound && (
        <div className="flex justify-center text-sm items-center text-center">
          <p className="border-r-2 p-2 pr-5">چیزی یافت نشد</p>
          <img src={emptyImg} alt="" className="w-[200px] " />
        </div>
      )}
      <div className=" ">
        {data.map((product: IProduct) => (
          <>
            <div className="flex items-center justify-end px-2 py-1 mt-1 gap-2 ">
              <div>
                <p>{product.general_info?.name}</p>
                <p>{product.detailedInfo?.color} رنگ</p>
                <p>{product.price?.price_after} قیمت</p>
              </div>
              <img src={dummyIMG} alt="" className="w-32 rounded-md" />
            </div>
          </>
        ))}
      </div>
    </Container>
  );
};
export default Suggestions;
