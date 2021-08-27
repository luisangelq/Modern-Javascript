const calculateTotals = (quantity, deadLine) => {
  //Quantities
  //0 - 1000 = 25%
  //1001 - 5000 = 20%
  //5001 - 10000 = 15%
  //+10000 = 10%

  let totalQuantity = 0;
  let totalDeadLine = 0;
  if (quantity < 1000) {
    totalQuantity = quantity * 0.25;
  } else if (quantity > 1000 && quantity <= 5000) {
    totalQuantity = quantity * 0.2;
  } else if (quantity > 5000 && quantity <= 10000) {
    totalQuantity = quantity * 0.15;
  } else {
    totalQuantity = quantity * 0.1;
  }

  //Calculate deadline
  //3 = 5%
  //6 = 10%
  //12 = 15%
  //24 = 20%

  switch (deadLine) {
    case 3:
      totalDeadLine = quantity * 0.05;
      break;
    case 6:
      totalDeadLine = quantity * 0.1;
      break;
    case 12:
      totalDeadLine = quantity * 0.15;
      break;
    case 24:
      totalDeadLine = quantity * 0.2;
      break;
    default:
      break;
  }
  
  return totalQuantity + totalDeadLine + quantity;
};

export { calculateTotals };
