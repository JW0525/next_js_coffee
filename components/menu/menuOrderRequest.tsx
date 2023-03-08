import ContentItem from "../common/contentItem";
import ContentItemTitle from "../common/contentItemTitle";
import { Input } from "antd";

interface IMenuOrderRequestProps {
  onRequestChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function MenuOrderRequest(props: IMenuOrderRequestProps) {
  return (
    <ContentItem>
      <ContentItemTitle>요청사항</ContentItemTitle>
      <Input
        style={{ width: "70%" }}
        showCount
        maxLength={30}
        onChange={props.onRequestChange}
      />
    </ContentItem>
  );
}
