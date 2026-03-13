export interface Car {
  id: string;
  name: string;
  price: number;
  duration: string; // "24 Jam" atau "Day + Driver"
  imageUrl: string;
}

export interface CompanyInfo {
  name: string;
  email: string;
  whatsapp: string;
  tiktok: string;
  services: string[];
}