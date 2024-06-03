import { IProduct, ISuggestions } from "../../../Interfaces/Interfaces";
import { Container } from "../../../pages";
import dummyIMG from "../../../assets/img/logos/images.png";
import { Loading } from "..";
import emptyImg from "../../../assets/img/logos/empty_state.png";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Suggestions = ({ data, showLoading, nothingFound }: ISuggestions) => {
  const navigate = useNavigate();
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
            <div
              onClick={() => {
                navigate(`product/${product.url}` || "");
              }}
              className="flex items-center cursor-pointer justify-end px-2 py-1 mt-1 gap-2 "
            >
              <div className="flex flex-col gap-2">
                <p>{product.general_info?.name}</p>
                <div className="flex gap-2 justify-end">
                  <p className="text-sm text-slate-500">
                    {product.detailedInfo?.color}
                  </p>
                  <div className="text-slate-400">
                    <IoColorPaletteOutline />
                  </div>
                </div>

                <div className="flex gap-2 justify-end">
                  <div
                    dir="rtl"
                    className="flex gap-2 text-sm text-right justify-start"
                  >
                    <p className="text-slate-500 line-through ">
                      {product.price?.price_before}
                    </p>
                    <p className="text-red-500">
                      {product.price?.price_after} تومان
                    </p>
                  </div>
                  <div className="text-slate-400">
                    <IoPricetagsOutline />
                  </div>
                </div>
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
