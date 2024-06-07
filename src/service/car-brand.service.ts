import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {CarBrand} from "src/model";
import {PaginationParams} from "src/controller/decorators";
import {Criteria, findByCriteria} from "./utils/findByCriteria";

@Injectable()
export class CarBrandService {
  constructor(
    @InjectRepository(CarBrand)
    private readonly repository: Repository<CarBrand>
  ) {}

  async findAll(pagination: PaginationParams, criteria: Criteria) {
    return findByCriteria(this.repository, criteria, pagination);
  }

  async findById(id: string) {
    return this.repository.findOneBy({id});
  }

  async saveOrUpdate(carBrand: CarBrand) {
    return this.repository.save(carBrand);
  }

  async deleteById(id: string) {
    return this.repository.delete({id});
  }
}
