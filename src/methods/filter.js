const filter = (
  data,
  { filterSort, filterInclude, filterFreeDelivery, filterRating, filtersearch }
) => {
  const res1 = data.filter((val) => {
    if (val.name.toLowerCase().includes(filtersearch)) {
      return 1;
    }
  });
  const res2 = res1.filter((val) => {
    if (!filterFreeDelivery || val.freeDelivery) {
      return 1;
    }
  });

  const res3 = res2.filter((val, ind) => {
    if (!filterInclude || val.inStock) {
      return 1;
    }
  });
  const res4 = res3.sort((obj, ind) => {
    if (filterSort == "lowToHigh") {
      if (obj.price > ind.price) {
        return 1;
      } else {
        return -1;
      }
    }
    if (filterSort == "highToLow") {
      if (obj.price < ind.price) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  const res5 = res4.filter((obj) => {
    if (filterRating <= obj.rating) {
      return 1;
    }
  });

  return res5;
};

export default filter;
