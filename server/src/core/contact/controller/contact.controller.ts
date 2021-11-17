import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { ContactService } from '../service/contact.service';
import { SearchService } from '../../search/service/search.service';
import { Contact } from '../types/types';


@Controller()
export class ContactController {
  constructor(
    private readonly contactService: ContactService,
    private readonly searchService: SearchService) { }

  @Get('/')
  async testingApi(): Promise<string> {
    try {
      return `<<<< Welcome :) >>>>`;
    } catch (error) {
      console.log(error);
    }
  }

  @Get('contacts')
  async getAllContacts(): Promise<Contact[]> {
    try {
      return await this.contactService.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  @Get('contact/:id')
  async getContactById(@Param('id') id: number): Promise<Contact> {
    try {
      return await this.contactService.findContact({ id: Number(id) });
    } catch (error) {
      console.log(error);
    }
  }

  @Post('contact')
  async createContact(
    @Body()
    contactData: {
      name: string;
      address: string;
      phone: string;
      email: string;
    },
  ): Promise<Contact> {
    const { name, address, phone, email } = contactData;
    try {
      return await this.contactService.createContact({
        name,
        address,
        phone,
        email,
      });
    } catch (error) {
      console.log(error);
    }
  }

  @Put('contact/:id')
  async updateContact(
    @Param('id') id: number,
    @Body()
    contactData: {
      name: string;
      address?: string;
      phone: string;
      email: string;
    },
  ): Promise<Contact> {
    const { name, address, phone, email } = contactData;
    try {
      return await this.contactService.updateContact({
        where: { id: Number(id) || undefined },
        data: {
          name: name,
          address: address,
          phone: phone,
          email: email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('contact/:id')
  async deleteContact(@Param('id') id: number): Promise<Contact> {
    try {
      return await this.contactService.deleteContact({ id: Number(id) });
    } catch (error) {
      console.log(error);
    }
  }

  @Get('filtered-contact/:searchString')
  async getFilteredContact(
    @Param('searchString') searchString: string,
  ): Promise<Contact[]> {
    try {
      let dataSearch = { search: searchString }
      const search = await this.searchService.createSearch(dataSearch)
      return await this.contactService.findAllContactsFilter({
        where: {
          OR: [
            {
              name: { contains: searchString },
            },
            {
              address: { contains: searchString },
            },
            {
              email: { contains: searchString },
            },
            {
              phone: { contains: searchString }
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}
