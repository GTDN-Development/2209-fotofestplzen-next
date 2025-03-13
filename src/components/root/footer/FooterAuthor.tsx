import { AgencyCredit } from "@components/AgencyCredit";

type FooterAuthorOptions = {
  className?: string;
};

export default function FooterAuthor({ className = "" }: FooterAuthorOptions) {
  return <AgencyCredit />;
}
