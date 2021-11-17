import { SearchService } from '../service/search.service';
import { Search } from '../types/types';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    getAllSearch(): Promise<Search[]>;
}
