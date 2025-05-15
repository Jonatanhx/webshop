export type serializedProduct = {
  name: string;
  id: string;
  isFeatured: boolean;
  isTrending: boolean;
  brand: string;
  images: string[];
  price: number;
};

export type AddressInputs = {
  country: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  postalCode: number;
  city: string;
  contactDetails: {
    email: string;
    phoneNumber: string;
  };
};
