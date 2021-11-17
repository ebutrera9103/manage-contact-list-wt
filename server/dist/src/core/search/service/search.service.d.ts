import { PrismaService } from '../../../../prisma/service/prisma.service';
import { Prisma } from '@prisma/client';
import { Search } from '../types/types';
export declare class SearchService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Search[]>;
    createSearch(data: Prisma.SearchCreateInput): Promise<Search>;
}
