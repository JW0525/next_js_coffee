const createList = (data: any) => {
  const recommendedList = [];
  const categoryIdxList = [];

  if (data) {
    const { categoryList } = data[0];

    for (let i in categoryList) {
      const { list } = categoryList[i];
      const recommendMenu = list.filter((e: any) => e.isRecommended === true);
      recommendedList.push(...recommendMenu);

      for (let j in list) {
        const { id } = categoryList[i];
        categoryIdxList.push(id)
      }
    }
  }

  return {
    recommendedList,
    categoryIdxList,
  }
}

export default createList;