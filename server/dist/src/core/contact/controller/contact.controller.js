"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const contact_service_1 = require("../service/contact.service");
const search_service_1 = require("../../search/service/search.service");
let ContactController = class ContactController {
    constructor(contactService, searchService) {
        this.contactService = contactService;
        this.searchService = searchService;
    }
    async testingApi() {
        try {
            return `<<<< Welcome :) >>>>`;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllContacts() {
        try {
            return await this.contactService.findAll();
        }
        catch (error) {
            console.log(error);
        }
    }
    async getContactById(id) {
        try {
            return await this.contactService.findContact({ id: Number(id) });
        }
        catch (error) {
            console.log(error);
        }
    }
    async createContact(contactData) {
        const { name, address, phone, email } = contactData;
        try {
            return await this.contactService.createContact({
                name,
                address,
                phone,
                email,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateContact(id, contactData) {
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
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteContact(id) {
        try {
            return await this.contactService.deleteContact({ id: Number(id) });
        }
        catch (error) {
            console.log(error);
        }
    }
    async getFilteredContact(searchString) {
        try {
            let dataSearch = { search: searchString };
            const search = await this.searchService.createSearch(dataSearch);
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
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "testingApi", null);
__decorate([
    (0, common_1.Get)('contacts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getAllContacts", null);
__decorate([
    (0, common_1.Get)('contact/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getContactById", null);
__decorate([
    (0, common_1.Post)('contact'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "createContact", null);
__decorate([
    (0, common_1.Put)('contact/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "updateContact", null);
__decorate([
    (0, common_1.Delete)('contact/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "deleteContact", null);
__decorate([
    (0, common_1.Get)('filtered-contact/:searchString'),
    __param(0, (0, common_1.Param)('searchString')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "getFilteredContact", null);
ContactController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        search_service_1.SearchService])
], ContactController);
exports.ContactController = ContactController;
//# sourceMappingURL=contact.controller.js.map