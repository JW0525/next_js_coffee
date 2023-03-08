import ContentItem from "../common/contentItem";
import ContentItemTitle from "../common/contentItemTitle";
import { InputNumber } from "antd";

interface IMenuOrderCouponProps {
  max: number;
  useCoupon: number;
  step: number;
  onCouponChange: (value: number | null) => void;
}

export default function MenuOrderCoupon(props: IMenuOrderCouponProps) {
  return (
    <ContentItem>
      <ContentItemTitle>쿠폰사용</ContentItemTitle>
      <InputNumber
        min={0}
        max={props.max}
        value={props.useCoupon}
        step={props.step}
        onChange={props.onCouponChange}
      />
    </ContentItem>
  );
}
