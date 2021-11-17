import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/service/prisma.service';
import { Prisma } from '@prisma/client';
import { Contact } from '../types/types'; 


@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) { }

  async findContact(
    contactWhereUniqueInput: Prisma.ContactWhereUniqueInput,
  ): Promise<Contact | null> {
    return new Promise((resolve, reject) => {
      this.prisma.contact
        .findUnique({ where: contactWhereUniqueInput })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async findAll(): Promise<Contact[]> {
    return new Promise((resolve, reject) => {
      this.prisma.contact
        .findMany({
          orderBy: [
            {
              name: 'asc',
            }]
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async findAllContactsFilter(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ContactWhereUniqueInput;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput;
  }): Promise<Contact[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return new Promise((resolve, reject) => {
      this.prisma.contact
        .findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async createContact(data: Prisma.ContactCreateInput): Promise<Contact> {
    return new Promise((resolve, reject) => {
      this.prisma.contact
        .create({ data })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async updateContact(params: {
    where: Prisma.ContactWhereUniqueInput;
    data: Prisma.ContactUpdateInput;
  }): Promise<Contact> {
    const { where, data } = params;
    return new Promise((resolve, reject) => {
      this.prisma.contact
        .update({
          data,
          where,
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async deleteContact(where: Prisma.ContactWhereUniqueInput): Promise<Contact> {
    return new Promise((resolve, reject) => {
      this.prisma.contact
        .delete({
          where,
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
