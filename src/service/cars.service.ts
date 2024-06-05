import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PaginationParams} from "src/controller/decorators";
import {Car} from "src/model";
import {Criteria, findByCriteria} from "./utils/findByCriteria";

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private readonly repository: Repository<Car>
  ) {}

  async findAll(pagination: PaginationParams, criteria: Criteria) {
    return findByCriteria(this.repository, criteria, pagination, true);
  }

  async findById(id: string) {
    return this.repository.findOneBy({id});
  }

  async saveOrUpdate(car: Car) {
    return this.repository.save(car);
  }

  async deleteById(id: string) {
    return this.repository.delete({id: id});
  }
}
