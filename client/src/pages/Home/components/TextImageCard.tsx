import { useMediaQuery } from "@mui/material";
import { NormalSizeCard } from "./NormalSizeCard";
import { SmallSizeCard } from "./SmallSizeCard";

export type TextImageCardProps = {
  icon?: { url: string; alt: string };
  title: string;
  text: string;
  redirect: string;
  image: { url: string; alt: string };
  reverseFlag?: number;
};

export const TextImageCard = ({
  icon,
  title,
  text,
  redirect,
  image,
  reverseFlag,
}: TextImageCardProps) => {
  const xsBreakPoint = useMediaQuery("(min-width:601px)");
  const reverse = reverseFlag % 2 !== 0 ? true : false;
  return xsBreakPoint ? (
    <NormalSizeCard
      icon={icon}
      title={title}
      text={text}
      redirect={redirect}
      image={image}
      reverse={reverse}
    />
  ) : (
    <SmallSizeCard
      icon={icon}
      title={title}
      text={text}
      redirect={redirect}
      image={image}
    />
  );
};
