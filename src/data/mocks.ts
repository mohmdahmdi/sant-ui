// mock datas

export const getPopularServiceCategories_data = [
  {
    id: "fa09405d-fc5b-4897-8521-c55d3034d185",
    name: "Haircut",
    total_services: "2",
  },
  {
    id: "16ca5bbc-9510-41a2-a798-6916f932e595",
    name: "Beard Grooming",
    total_services: "1",
  },
  {
    id: "aab1be4c-c9bc-459d-b8bc-b03a6bbc539b",
    name: "Facial",
    total_services: "1",
  },
  {
    id: "cc417d23-df13-4834-8b51-7e96972af4b5",
    name: "Pedicure",
    total_services: "1",
  },
  {
    id: "26740bbf-9879-4071-9d87-650162c2b727",
    name: "Makeup",
    total_services: "1",
  },
];

export const getMapLocations_data = [
  {
    id: "f224e83e-e8d3-4650-b43b-bf59e62799a6",
    name: "سالن آرایش مو",
    city: "تبریز",
    district: "راه آهن",
    address: "خیابان شریعتی، پلاک ۴۵",
    latitude: "38.096200",
    longitude: "46.273800",
    distance_m: 6336675.19838977,
  },
  {
    id: "16306df6-7318-4655-a7d0-fe28124ccdaf",
    name: "آرایشگر حرفه‌ای",
    city: "شیراز",
    district: "سعدی",
    address: "خیابان لطفعلی خان، پلاک ۲۳",
    latitude: "29.623600",
    longitude: "52.533000",
    distance_m: 6456464.08392986,
  },
  {
    id: "31cee161-183c-4e12-8dbf-fc6e18861551",
    name: "آرایشگاه مردانه",
    city: "اصفهان",
    district: "سی و سه پل",
    address: "خیابان چهارباغ عباسی، پلاک ۵۶",
    latitude: "32.653900",
    longitude: "51.672500",
    distance_m: 6504838.80444441,
  },
  {
    id: "374cc8f7-3aa8-4dc7-b480-f2393a7daea7",
    name: "استودیو ناخن",
    city: "مشهد",
    district: "رضا",
    address: "بلوار وکیل‌آباد، پلاک ۷۸",
    latitude: "36.298800",
    longitude: "59.604200",
    distance_m: 7329624.60502826,
  },
];

export const getKpis_data = {
  total_customers: "294",
  total_businesses: "18",
  total_beauticians: "46",
  totalActiveAppointments: "1237",
};

export const getTopBusinesses_data = [
  {
    id: "16306df6-7318-4655-a7d0-fe28124ccdaf",
    name: "آرایشگر حرفه‌ای",
    logo: "logo3.png",
    cover_image: "cover3.jpg",
    city: "شیراز",
    district: "سعدی",
    total_appointments: "1",
  },
  {
    id: "f224e83e-e8d3-4650-b43b-bf59e62799a6",
    name: "سالن آرایش مو",
    logo: "logo1.png",
    cover_image: "cover1.jpg",
    city: "تبریز",
    district: "راه آهن",
    total_appointments: "1",
  },
  {
    id: "374cc8f7-3aa8-4dc7-b480-f2393a7daea7",
    name: "استودیو ناخن",
    logo: "logo2.png",
    cover_image: "cover2.jpg",
    city: "مشهد",
    district: "رضا",
    total_appointments: "1",
  },
  {
    id: "f224e83e-e8d3-4650-b43b-bf59e62799a6",
    name: "سالن آرایش مو",
    logo: "logo1.png",
    cover_image: "cover1.jpg",
    city: "تبریز",
    district: "راه آهن",
    total_appointments: "1",
  },
  {
    id: "374cc8f7-3aa8-4dc7-b480-f2393a7daea7",
    name: "استودیو ناخن",
    logo: "logo2.png",
    cover_image: "cover2.jpg",
    city: "مشهد",
    district: "رضا",
    total_appointments: "1",
  },
];

export const getBeauticanInfo_data = {
  id: "09fd5796-5d7d-4933-a96a-a9739cfe1e81",
  user_id: "57e63a79-f4ed-4009-a133-607adb409407",
  business_id: "16306df6-7318-4655-a7d0-fe28124ccdaf",
  bio: "Experienced professional makeup artist for weddings, photo shoots, and events.",
  experience_years: 8,
  specialties: ["Makeup", "Bridal", "Event Styling"],
  is_freelancer: false,
  rating: "4.9",
};

export const getBusinessInfo_data = {
  id: "f224e83e-e8d3-4650-b43b-bf59e62799a6",
  owner_id: "057dc2bf-8b68-4706-8cb1-d3f16d5ac200",
  name: "سالن آرایش مو",
  description: "خدمات مربوط به کوتاهی، آرایش و مراقبت مو.",
  logo: "logo1.png",
  cover_image: "cover1.jpg",
  location_id: "09760e48-2a35-465d-8b58-93b0d6999892",
  business_type_id: "0eba2db0-d524-4afe-b171-a1e865252a4f",
  phone: "041-12345678",
  email: "hair_salon@example.com",
  website: "http://hair-salon.example.com",
  instagram: "@hairsalon",
  whatsapp: "09121234565",
  rating: "4.5",
  is_verified: true,
  is_active: true,
  created_at: "2025-08-24T13:33:59.406Z",
};

export const getServiceInfo_data = {
  id: "ad06ff3d-491f-48de-ae6a-72ff932ddb3c",
  business_id: "16306df6-7318-4655-a7d0-fe28124ccdaf",
  category_id: "788f0b0c-d00f-4c3e-be73-50e167e6de76",
  title: "Bridal Makeup & Hair",
  description: "Complete bridal look with hair and makeup services.",
  price: "800000.00",
  duration_minutes: 180,
  image: "bridal1.jpg",
  gender_target: "female",
  is_active: true,
  rating: "0.0",
};
