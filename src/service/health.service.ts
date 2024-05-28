import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {PaginationParams} from "src/controller/decorators";
import {Dummy} from "src/model/dummy.entity";
import {Repository} from "typeorm";
import {createPagination} from "./utils/create-pagination";

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Dummy) private readonly repository: Repository<Dummy>
  ) {}

  async getDummies(pagination: PaginationParams): Promise<Dummy[]> {
    return this.repository.find(createPagination(pagination));
  }
}
