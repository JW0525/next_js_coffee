import { useEffect, useState } from "react";
import { firestoreDB } from "../../utils/firebaseApp";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

interface Category {
  name: string;
  order: number;
  id: string;
}

const useCategoryList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const getCategoryList = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const q = query(
        collection(firestoreDB, "categories"),
        orderBy("order", "asc")
      );
      const querySnapshot = await getDocs(q);

      const list = querySnapshot.docs.map((el) => {
        const category = el.data();
        return {
          id: el.id,
          name: category.name,
          order: category.order,
        };
      });
      setCategoryList(list);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setCategoryList([]);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return {
    categoryList,
  };
};

export default useCategoryList;