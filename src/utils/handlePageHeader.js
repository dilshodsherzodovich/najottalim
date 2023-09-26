const pageHeaders = {
  client: "Mijoz",
  clients: "Mijozlar",
  addClients: "Yangi mijoz qo'shish",
  equipment: "Jihoz",
  equipments: "Jihozlar",
  addEquipment: "Yangi jihoz qo'shish",
  product: "Mahsulot",
  products: "Mahsulotlar",
  addProducts: "Yangi mahsulot qo'shish",
};

export const handlePageHeader = (pathname) => {
  const lastPath = pathname.split("/").reverse()[0];
  return lastPath ? pageHeaders[lastPath] : "Dashboard";
};
