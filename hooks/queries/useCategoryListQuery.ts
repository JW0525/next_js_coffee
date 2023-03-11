import { firestoreDB } from "../../utils/firebaseApp";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useQuery } from "react-query";
import React from "react";

const useCategoryListQuery = () => {
  const getCategoryList = async () => {
    const q = query(
      collection(firestoreDB, "categories"),
      orderBy("order", "asc")
    );
    return getDocs(q);
  };

  const getCategoryListQuery = useQuery("getCategoryList", getCategoryList);

  return {
    ...getCategoryListQuery,
    data: React.useMemo(() => {
      const list = getCategoryListQuery.data?.docs.map((el) => {
        const category = el.data();
        return {
          id: el.id,
          name: category.name,
          order: category.order,
        };
      });
      return list;
    }, [getCategoryListQuery.data]),
  };
};

export default useCategoryListQuery;
