import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/service/prisma.service';
import { Prisma } from '@prisma/client';
import { Search } from '../types/types';


@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) { }

  async findAll(): Promise<Search[]> {
    return new Promise((resolve, reject) => {
      this.prisma.search
        .findMany({
          orderBy: [
            {
              search: 'asc',
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

  async createSearch(data: Prisma.SearchCreateInput): Promise<Search> {
    return new Promise((resolve, reject) => {
      this.prisma.search
        .create({ data })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
