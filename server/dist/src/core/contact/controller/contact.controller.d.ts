import { ContactService } from '../service/contact.service';
import { SearchService } from '../../search/service/search.service';
import { Contact } from '../types/types';
export declare class ContactController {
    private readonly contactService;
    private readonly searchService;
    constructor(contactService: ContactService, searchService: SearchService);
    testingApi(): Promise<string>;
    getAllContacts(): Promise<Contact[]>;
    getContactById(id: number): Promise<Contact>;
    createContact(contactData: {
        name: string;
        address: string;
        phone: string;
        email: string;
    }): Promise<Contact>;
    updateContact(id: number, contactData: {
        name: string;
        address?: string;
        phone: string;
        email: string;
    }): Promise<Contact>;
    deleteContact(id: number): Promise<Contact>;
    getFilteredContact(searchString: string): Promise<Contact[]>;
}
