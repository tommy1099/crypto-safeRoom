import { Container } from "..";
import { NavBar, Footer } from "../../components/ui";
// import { NewsCard } from "../../components/forms";
import Card from "../../components/forms/Cards/Card";
import { useEffect, useState } from "react";
import { Loading } from "../../components/forms";

// import { useSelector } from "react-redux";
// import { RootState } from "../../Store/Store";
type NewItem = {
  id: string;
  //   key: string;
  img: string;
  title: string;
  desc: {
    desc1: string;
  };
};
const News = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [signalsList, setSignalsList] = useState<NewItem[]>([]);

  useEffect(() => {
    // console.log("signal list:", signalsList);

    fetch("http://localhost:4444/admin/dashboard/news") // Replace with your API endpoint.
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON.
      })
      .then((responseData) => {
        setIsLoaded(true);
        setSignalsList(responseData); // Update the state with the data.
      })
      .catch((error) => {
        setIsLoaded(true);
        console.error("Error fetching data:", error);
      });
  });
  // const cardComponents = [{}];
  signalsList.sort((a, b) => {
    if (a.id === b.id) {
      return 0;
    } else if (a.id) {
      return 1;
    } else {
      return -1;
    }
  });
  //   const toggle = useSelector((state: RootState) => state.toggleReducer.switch);
  //   const filteredComponents = cardComponents.filter((component) =>
  //     toggle ? true : component.blur === toggle
  //   );
  return (
    <>
      <NavBar />
      {!isLoaded && <Loading />}
      <Container style=" relative mb-[416px] mt-[130px] z-0 grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mx-[5%]">
        {signalsList.map((component) => (
          // <NewsCard
          //   src={component.src}
          //   title={component.title}
          //   desc={component.desc.desc1}
          // />
          <Card
            id={component.id}
            type="news"
            img={component.img}
            title={component.title}
            desc={component.desc}
          />
        ))}
      </Container>
      <div className="">
        <Footer />
      </div>
    </>
  );
};
export default News;
