import CookiesPolicy from "@components/cookies/CookiesPolicy";
import Heading from "@components/Heading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";
import { globalConfig } from "src/configs/globalConfig";

const CookiesPage: NextPage = () => {
  return (
    <>
      <Seo title="Zásady používání cookies" description="" />
      <Wrapper className="pt-24 md:pb-16 md:pt-36">
        <Heading
          level={1}
          size="3xl"
          font="display"
          weight="medium"
          className="pt-20 md:pt-32"
          align="center"
        >
          Zásady používání cookies
        </Heading>
      </Wrapper>
      <Wrapper size="sm" className="pb-40">
        <CookiesPolicy
          domain={globalConfig.meta.url}
          ownerName={globalConfig.client.companyName}
          adress={globalConfig.client.adress}
          ico={globalConfig.client.ico}
          validTime="šest měsíců"
          lastUpdated="1. 9. 2022"
        />
      </Wrapper>
    </>
  );
};

export default CookiesPage;
