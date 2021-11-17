import { PrismaService } from '../../../../prisma/service/prisma.service';
import { Prisma } from '@prisma/client';
import { Contact } from '../types/types';
export declare class ContactService {
    private prisma;
    constructor(prisma: PrismaService);
    findContact(contactWhereUniqueInput: Prisma.ContactWhereUniqueInput): Promise<Contact | null>;
    findAll(): Promise<Contact[]>;
    findAllContactsFilter(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ContactWhereUniqueInput;
        where?: Prisma.ContactWhereInput;
        orderBy?: Prisma.ContactOrderByWithRelationInput;
    }): Promise<Contact[]>;
    createContact(data: Prisma.ContactCreateInput): Promise<Contact>;
    updateContact(params: {
        where: Prisma.ContactWhereUniqueInput;
        data: Prisma.ContactUpdateInput;
    }): Promise<Contact>;
    deleteContact(where: Prisma.ContactWhereUniqueInput): Promise<Contact>;
}
