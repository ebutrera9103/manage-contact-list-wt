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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../prisma/service/prisma.service");
let ContactService = class ContactService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findContact(contactWhereUniqueInput) {
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
    async findAll() {
        return new Promise((resolve, reject) => {
            this.prisma.contact
                .findMany({
                orderBy: [
                    {
                        name: 'asc',
                    }
                ]
            })
                .then((res) => {
                resolve(res);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    async findAllContactsFilter(params) {
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
    async createContact(data) {
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
    async updateContact(params) {
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
    async deleteContact(where) {
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
};
ContactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map