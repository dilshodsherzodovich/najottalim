const pageHeaders = {
  "/client": "Mijoz",
  "/clients": "Mijozlar",
  "/clients/add": "Yangi mijoz qo'shish",
  "/equipment": "Jihoz",
  "/equipments": "Jihozlar",
  "/equipments/add": "Yangi jihoz qo'shish",
  "/equipments/info": "Jihoz",
  "/product": "Mahsulot",
  "/products": "Mahsulotlar",
  "/products/add": "Yangi mahsulot qo'shish",
  "/products/info": "Maxsulot",
  "/teacher": "Ustoz",
  "/teachers": "Ustozlar",
  "/teachers/add": "Yangi ustoz qo'shish",
  "/teachers/info": "Ustoz",
  "/orders": "Buyurtmalar",
  "/client-orders": "Buyurtmalar",
  "/cart": "Savat",
};

export const handlePageHeader = (pathname) => {
  return pathname !== "/" ? pageHeaders[pathname] : "Dashboard";
};
