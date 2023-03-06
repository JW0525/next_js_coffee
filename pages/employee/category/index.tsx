import List from "@/components/common/list";
import ListItem from "@/components/common/listItem";
import useCategoryList from "hooks/api/useCategoryList";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom } from "store/atoms";

export default function EmployeeCateogryPage() {
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);
  const { categoryList } = useCategoryList();
  const router = useRouter();

  useEffect(() => {
    setHeaderTitle("메뉴");
  }, []);

  const onClickCategory =
    (categoryIdx: number) => (_: MouseEvent<HTMLButtonElement>) => {
      const category = categoryList[categoryIdx];
      router.push(`/employee/menu/${category.id}`);
    };

  return (
    <List>
      {categoryList.map((el, idx) => {
        return (
          <ListItem key={idx} onclick={onClickCategory(idx)}>
            {el.name}
          </ListItem>
        );
      })}
    </List>
  );
}
