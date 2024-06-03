import {Repository} from "typeorm";
import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Appointment} from "src/model";
import { PaginationParams } from "src/controller/decorators";
import { Criteria, findByCriteria } from "./utils/findByCriteria";

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly repository: Repository<Appointment>
  ) {}

  async findAll(pagination: PaginationParams, criteria: Criteria){
    return findByCriteria(this.repository, criteria, pagination);
  }

  async findById(id: string) {
    return this.repository.findOneBy({id: id});
  }

  async saveOrUpdate(appointment: Appointment) {
    return this.repository.save(appointment);
  }
}
