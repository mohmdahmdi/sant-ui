export type SVGComp = ({
  className,
}: {
  className?: string;
}) => React.JSX.Element;

export type Business = {
  id: string;
  owner_id: string;
  name: string;
  description: string | null;
  logo: string | null;
  cover_image: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  instagram: string | null;
  whatsapp: string | null;
  rating: string | null;
  is_verified: boolean;
  is_active: boolean;
  available_from: string | null;
  available_to: string | null;
  created_at: string;
  location_id: string | null;
  location: {
    id: string;
    country: string;
    city: string;
    district: string;
    address: string | null;
    latitude: string;
    longitude: string;
    geom: {
      type: string;
      coordinates: [number, number];
    };
  };
  businessType: {
    id: string;
    name: string;
    description: string;
  };
};
