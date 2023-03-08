import ContentItem from "../common/contentItem";
import ContentItemTitle from "../common/contentItemTitle";

interface IMenuOrderFinalPriceProps {
  finalPrice: number;
}
export default function MenuOrderFinalPrice(props: IMenuOrderFinalPriceProps) {
  return (
    <ContentItem>
      <ContentItemTitle>최종금액</ContentItemTitle>
      <strong>{props.finalPrice}원</strong>
    </ContentItem>
  );
}
