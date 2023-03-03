export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  type: string;
  
  // extra properties for userType 'lawyer'
  licenseNumber?: string;
  serviceCategory?: string;
  consultationFee?: number;
  almaMater?: string;
  bio?: string;
}
