import { Card, ScrollToTopIcon } from "../../components/forms";
import { Footer, NavBar, Accordion, Hero } from "../../components/ui";
// import { useTranslation } from "react-i18next";
import { Container } from "..";
import { RootState } from "../../Store/Store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const Plans = () => {
  const { t } = useTranslation();
  const isFa = useSelector((state: RootState) => state.lang.isFa);
  const options = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      question: t("question4"),
      answer: t("answer4"),
    },
    {
      question: t("question5"),
      answer: t("answer5"),
    },
    {
      question: t("question6"),
      answer: t("answer6"),
    },
    {
      question: t("question7"),
      answer: t("answer7"),
    },
    {
      question: t("question8"),
      answer: t("answer8"),
    },
  ];
  // const { t } = useTranslation();

  return (
    <div className="flex overflow-y-auto flex-col bg-base-100">
      <NavBar />
      <Hero isFa section1={t("subNow")} section2={t("subDesc")} />
      <span className="absolute mt-[700px] md:mt-[30%] z-[1] bg-primary h-[500px] sm:h-[1500px] xl:h-[80%] w-full rounded-b-[50px]"></span>
      <div className="mt-[5%] z-[2]">
        <Container
          dir="ltr"
          style=" mb-[10%] mx-[5%] grid sm:hidden grid-cols-1 sm:grid-cols-2  xl:grid-cols-4"
        >
          <div className="w-full carousel">
            <div id="item1" className="w-full carousel-item">
              <Card
                id="1"
                inStock={true}
                key="1"
                title={t("plan1month")}
                price={60}
                desc={{
                  desc1: t("planDesc1"),
                  desc2: t("planDesc2"),
                  desc3: t("planDesc3"),
                }}
                type="plans"
                physical={false}
              />
            </div>
            <div id="item2" className="w-full carousel-item">
              <Card
                id="2"
                inStock={true}
                key="2"
                title={t("plan3months")}
                price={150}
                desc={{
                  desc1: t("planDesc1"),
                  desc2: t("planDesc2"),
                  desc3: t("planDesc3"),
                }}
                type="plans"
                physical={false}
              />
            </div>
            <div id="item3" className="w-full carousel-item">
              <Card
                id="3"
                inStock={true}
                key="3"
                title={t("plan6months")}
                price={300}
                desc={{
                  desc1: t("planDesc1"),
                  desc2: t("planDesc2"),
                  desc3: t("planDesc3"),
                }}
                type="plans"
                physical={false}
              />
            </div>
            <div id="item4" className="w-full carousel-item">
              <Card
                id="4"
                inStock={true}
                key="4"
                title={t("plan1year")}
                price={500}
                desc={{
                  desc1: t("planDesc1"),
                  desc2: t("planDesc2"),
                  desc3: t("planDesc3"),
                }}
                type="plans"
                physical={false}
              />
            </div>
          </div>
          <div className="flex gap-2 z-[1] justify-center py-2 w-full">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </Container>
      </div>

      <Container
        dir="ltr"
        style=" mb-[10%]  mx-[5%] hidden sm:grid gap-10 grid-cols-1 sm:grid-cols-2  xl:grid-cols-4"
      >
        <Card
          id="1"
          inStock={true}
          key="1"
          title={t("plan1month")}
          price={60}
          desc={{
            desc1: t("planDesc1"),
            desc2: t("planDesc2"),
            desc3: t("planDesc3"),
          }}
          type="plans"
          physical={false}
        />
        <Card
          id="2"
          inStock={true}
          key="2"
          title={t("plan3months")}
          price={150}
          desc={{
            desc1: t("planDesc1"),
            desc2: t("planDesc2"),
            desc3: t("planDesc3"),
          }}
          type="plans"
          physical={false}
        />
        <Card
          id="3"
          inStock={true}
          key="3"
          title={t("plan6months")}
          price={300}
          desc={{
            desc1: t("planDesc1"),
            desc2: t("planDesc2"),
            desc3: t("planDesc3"),
          }}
          type="plans"
          physical={false}
        />
        <Card
          id="4"
          inStock={true}
          key="4"
          title={t("plan1year")}
          price={500}
          desc={{
            desc1: t("planDesc1"),
            desc2: t("planDesc2"),
            desc3: t("planDesc3"),
          }}
          type="plans"
          physical={false}
        />
      </Container>
      <Container
        dir={`${isFa ? "rtl" : "ltr"}`}
        style="flex items-center mb-[5%] justify-center flex-col"
      >
        <Accordion options={options} />
      </Container>
      <div className="flex w-full">
        <Footer />
      </div>
      <div className="fixed left-0 top-[90%] m-5 z-[3]">
        <ScrollToTopIcon />
      </div>
    </div>
  );
};
