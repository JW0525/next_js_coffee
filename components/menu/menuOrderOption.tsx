import ContentItem from "../common/contentItem";
import ContentItemTitle from "../common/contentItemTitle";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

interface IMenuOrderOptionProps {
  hotColdOption: number;
  hotAvailable: boolean;
  coldAvailable: boolean;
  onOptionChange: (e: RadioChangeEvent) => void;
}

export default function MenuOrderOptoin(props: IMenuOrderOptionProps) {
  return (
    <ContentItem>
      <ContentItemTitle>옵션</ContentItemTitle>
      <Radio.Group onChange={props.onOptionChange} value={props.hotColdOption}>
        {props.hotAvailable && <Radio value={1}>hot</Radio>}
        {props.coldAvailable && <Radio value={2}>cold</Radio>}
      </Radio.Group>
    </ContentItem>
  );
}
