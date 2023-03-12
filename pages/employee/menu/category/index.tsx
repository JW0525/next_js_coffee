import List from "@/components/common/list";
import ListItem from "@/components/common/listItem";
import { Loading } from "@/components/common/loading";
import useCategoryListQuery from "hooks/queries/useCategoryListQuery";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { headerTitleAtom } from "store/atoms";

export default function EmployeeCateogryPage() {
  const [_, setHeaderTitle] = useRecoilState(headerTitleAtom);
  const { data: categoryListData, isLoading } = useCategoryListQuery();
  const router = useRouter();

  useEffect(() => {
    setHeaderTitle("메뉴");
  }, []);

  const onClickCategory =
    (categoryIdx: number) => (_: MouseEvent<HTMLButtonElement>) => {
      const category = categoryListData[categoryIdx];
      router.push(`/employee/menu/${category.id}`);
    };

  if (isLoading) return <Loading />;

  return (
    <List>
      {categoryListData.map((el, idx) => {
        return (
          <ListItem key={idx} onclick={onClickCategory(idx)} isclickable={true}>
            {el.name}
          </ListItem>
        );
      })}
    </List>
  );
}
