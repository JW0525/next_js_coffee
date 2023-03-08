import ContentItem from "../common/contentItem";
import ContentItemTitle from "../common/contentItemTitle";
import { InputNumber } from "antd";

interface IMenuOrderQuantityProps {
  quantity: number;
  onQuantityChange: (value: number | null) => void;
}

export default function MenuOrderQuantity(props: IMenuOrderQuantityProps) {
  return (
    <ContentItem>
      <ContentItemTitle>수량</ContentItemTitle>
      <InputNumber
        min={1}
        defaultValue={props.quantity}
        onChange={props.onQuantityChange}
      />
    </ContentItem>
  );
}
