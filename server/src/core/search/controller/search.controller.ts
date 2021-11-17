import {
  Controller,
  Get,
} from '@nestjs/common';
import { SearchService } from '../service/search.service';
import { Search } from '../types/types';


@Controller()
export class SearchController {
  constructor(private readonly searchService: SearchService) { }


  @Get('search')
  async getAllSearch(): Promise<Search[]> {
    try {
      return await this.searchService.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}
