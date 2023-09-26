const pageHeaders = {
  client: "Mijoz",
  clients: "Mijozlar",
  addClient: "Yangi mijoz qo'shish",
  equipment: "Jihoz",
  equipments: "Jihozlar",
  addEquipment: "Yangi jihoz qo'shish",
  product: "Mahsulot",
  products: "Mahsulotlar",
  addProduct: "Yangi mahsulot qo'shish",
  teacher: "Ustoz",
  teachers: "Ustozlar",
  addTeacher: "Yangi ustoz qo'shish",
};

export const handlePageHeader = (pathname) => {
  const lastPath = pathname.split("/").reverse()[0];
  console.log(lastPath);
  return lastPath ? pageHeaders[lastPath] : "Dashboard";
};
