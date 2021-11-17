import { Module } from '@nestjs/common';
import { ContactController } from './core/contact/controller/contact.controller';
import { SearchController } from './core/search/controller/search.controller';
import { ContactService } from './core/contact/service/contact.service';
import { SearchService } from './core/search/service/search.service';

import { PrismaService } from '../prisma/service/prisma.service';

@Module({
  imports: [],
  controllers: [ContactController, SearchController],
  providers: [ContactService, SearchService, PrismaService],
})
export class AppModule { }
