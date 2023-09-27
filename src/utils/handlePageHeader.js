const pageHeaders = {
  "/client": "Mijoz",
  "/clients": "Mijozlar",
  "/clients/add": "Yangi mijoz qo'shish",
  "/equipment": "Jihoz",
  "/equipments": "Jihozlar",
  "/equipments/add": "Yangi jihoz qo'shish",
  "/product": "Mahsulot",
  "/products": "Mahsulotlar",
  "/products/add": "Yangi mahsulot qo'shish",
  "/teacher": "Ustoz",
  "/teachers": "Ustozlar",
  "/teachers/add": "Yangi ustoz qo'shish",
};

export const handlePageHeader = (pathname) => {
  return pathname !== "/" ? pageHeaders[pathname] : "Dashboard";
};
