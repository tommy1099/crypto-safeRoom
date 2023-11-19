import { useSelector } from "react-redux";
import Container from "../Container/Container";
import { RootState } from "../../../Store/Store";

const LoadingCard = () => {
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const isDarkTheme = useSelector((state: RootState) => state.themeToggle.Dark);

  const loadingSkeletons = [];

  for (let i = 0; i < 5; i++) {
    loadingSkeletons.push(<div key={i} className="w-32 h-32 skeleton"></div>);
  }

  return (
    <Container
      dir={`${isFa ? "rtl" : "ltr"}`}
      style={`relative mt-[60px] z-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 mx-[5%] ${
        isDarkTheme ? "border-neutral" : ""
      } border-b-2 pb-10 align-bottom`}
    >
      {loadingSkeletons}
    </Container>
  );
};

export default LoadingCard;
