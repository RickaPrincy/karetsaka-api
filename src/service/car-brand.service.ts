import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CarBrand} from "src/model";
import {PaginationParams} from "src/controller/decorators";
import {createPagination} from "./utils/create-pagination";

@Injectable()
export class CarBrandService {
  constructor(
    @InjectRepository(CarBrand)
    private readonly repository: Repository<CarBrand>
  ) {}

  async findAll(pagination: PaginationParams): Promise<CarBrand[]> {
    return await this.repository.find(createPagination(pagination));
  }

  async findById(id: string): Promise<CarBrand> {
    return await this.repository.findOneBy({id});
  }

  async saveOrUpdateAll(carBrands: CarBrand[]): Promise<CarBrand[]> {
    return await this.repository.save(carBrands);
  }
}
