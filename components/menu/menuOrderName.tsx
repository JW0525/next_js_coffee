import ContentItem from "../common/contentItem";
import ContentItemTitle from "../common/contentItemTitle";

interface IMenuOrderNameProps {
  body: string;
}
export default function MenuOrderName(props: IMenuOrderNameProps) {
  return (
    <ContentItem>
      <ContentItemTitle>메뉴</ContentItemTitle>
      <strong>{props.body}</strong>
    </ContentItem>
  );
}
