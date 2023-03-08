import ContentItem from "../common/contentItem";
import ContentItemTitle from "../common/contentItemTitle";

interface IMenuOrderPriceProps {
  price: number;
}
export default function MenuOrderPrice(props: IMenuOrderPriceProps) {
  return (
    <ContentItem>
      <ContentItemTitle>가격</ContentItemTitle>
      <p>{props.price}</p>
    </ContentItem>
  );
}
