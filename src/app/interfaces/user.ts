export interface User {
  id: number;
  name: string;
  email: string;
  dob: string;
  address: Address;
}

interface Address {
  street_name: string;
  complement: string;
  number: number;
  city: string;
  zip_code: string;
}
