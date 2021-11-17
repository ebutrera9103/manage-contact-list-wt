import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from '../../controller/contact.controller';
import { ContactService } from '../../service/contact.service';
import { PrismaService } from '../../../../../prisma/service/prisma.service'
import { Contact } from '@prisma/client';
import { contactDataBefore, contactId, contactDataAfter, contactDataToUpdate } from '../mocks/mock.data';

describe('ContactController', () => {
  let contactController: ContactController;
  let contactService: ContactService;
  let contactsList: Contact[]

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [ContactService, PrismaService],
    }).compile();

    contactController = app.get<ContactController>(ContactController);
    contactService = app.get<ContactService>(ContactService);
    contactsList = await contactController.getAllContacts();
    contactController.createContact(contactDataBefore)
  });


  afterEach(async () => {
    contactsList = [];
  });

  describe('Integration Controller-Service', () => {
    it('ensure that the getContactById method controller and findContact method service fulfill their contract', async () => {
      const result = 'test';
      jest.spyOn(contactService, 'findContact').mockImplementation((): any => result);
      expect(await contactController.getContactById(contactId)).toBe(result);
    });
  });

  describe('Integration Controller-Service', () => {
    it('ensure that the getAllContacts method controller and findAll method service fulfill their contract', async () => {
      const result = 'test';
      jest.spyOn(contactService, 'findAll').mockImplementation((): any => result);
      expect(await contactController.getAllContacts()).toBe(result);
    });
  });

  describe('Integration Controller-Service', () => {
    it('ensure that the createContact method controller and createContact method service fulfill their contract', async () => {
      const result = 'test';
      jest.spyOn(contactService, 'createContact').mockImplementation((): any => result);
      expect(await contactController.createContact(contactDataBefore)).toBe(result);
    });
  });

  describe('Integration Controller-Service', () => {
    it('ensure that the updateContact method controller and updateContact method service fulfill their contract', async () => {
      const result = 'test';
      jest.spyOn(contactService, 'updateContact').mockImplementation((): any => result);
      expect(await contactController.updateContact(contactId, contactDataBefore)).toBe(result);
    });
  });

  describe('Integration Controller-Service', () => {
    it('ensure that the deleteContact method controller and deleteContact method service fulfill their contract', async () => {
      const result = 'test';
      jest.spyOn(contactService, 'deleteContact').mockImplementation((): any => result);
      expect(await contactController.deleteContact(contactId)).toBe(result);
    });
  });

  describe('Integration Controller-Service', () => {
    it('ensure that the getFilteredContact method controller and findAllContactsFilter method service fulfill their contract', async () => {
      const result = 'test';
      jest.spyOn(contactService, 'findAllContactsFilter').mockImplementation((): any => result);
      expect(await contactController.getFilteredContact(result)).toBe(result);
    });
  });

  //API
  describe('POST Contact', () => {
    it('should return the Contact added', () => {
      expect(
        contactController.createContact(contactDataAfter),
      ).resolves.toMatchObject(contactDataAfter);
    });
  });

  describe('GET Contact by Id', () => {
    it('should return the Contact which matches the id provided', () => {
      expect(
        contactController.getContactById(contactsList[0].id),
      ).resolves.toHaveProperty('id', contactsList[0].id);
    });
  });

  describe('PUT Contact', () => {
    it('should return the Contact updated', () => {
      expect(
        contactController.updateContact(contactsList[0].id, contactDataToUpdate),
      ).resolves.toHaveProperty('phone', '53236460');
    });
  });

  describe('DELETE Contact', () => {
    it('should return the Contact deleted', () => {
      expect(
        contactController.deleteContact(contactsList[0].id),
      ).resolves.toHaveProperty('phone', '53236460');
    });
  });
});
