export type Company = {
  companyName: string;
  companySector: string;
  companyWebsite: string;
  companySize: string;
  companyDescription: string;
  companyAddress: string;
};

export const exampleCompany: Company = {
  companyName: "Vettingo",
  companySector: "Teknoloji",
  companyWebsite: "https://vettingo.com",
  companySize: "51-200 çalışan",
  companyDescription:
    "Vettingo, şirketlerin doğru adaylarla buluşmasını sağlayan bir işe alım platformudur. Aday değerlendirme, mülakat ve işe alım süreçlerini tek bir yerde bir araya getirir.",
  companyAddress: "Maslak, Sarıyer / İstanbul",
};
