import { Decimal } from "@prisma/client/runtime/binary";

export type product = {
  name: string;
  id: string;
  brand: string;
  isFeatured: boolean;
  isTrending: boolean;
  images: string[];
  price: Decimal;
};

export type serializedProduct = {
  name: string;
  id: string;
  isFeatured: boolean;
  isTrending: boolean;
  brand: string;
  images: string[];
  price: number;
};

export type serializedProductWithQuantity = serializedProduct & {
  quantity: number;
};

export type AddressInputs = {
  country: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  postalCode: string;
  city: string;
  contactDetails: ContactDetails;
};

export type RegisterInputs = {
  firstName: string;
  lastName: string;
  email: string;
};

export type ContactDetails = {
  email: string;
  phoneNumber: string;
};

export type selectedPaymentMethod = {
  selectedMethod: string;
};

export type SortOrder = "asc" | "desc";

export type faqQA = {
  question: string;
  answer: string;
};
