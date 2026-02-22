/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: bookinginquiries
 * Interface for BookingInquiries
 */
export interface BookingInquiries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  customerName?: string;
  /** @wixFieldType text */
  phoneNumber?: string;
  /** @wixFieldType text */
  email?: string;
  /** @wixFieldType date */
  eventDate?: Date | string;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType text */
  selectedPackage?: string;
  /** @wixFieldType text */
  specialNotes?: string;
}


/**
 * Collection ID: photographyservices
 * Interface for PhotographyServices
 */
export interface PhotographyServices {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  representativeImage?: string;
  /** @wixFieldType text */
  packageDetails?: string;
  /** @wixFieldType text */
  categoryType?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}
