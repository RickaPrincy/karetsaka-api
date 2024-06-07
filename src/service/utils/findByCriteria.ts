import {PaginationParams} from "src/controller/decorators";
import {Repository} from "typeorm";
import {createPagination} from "./create-pagination";

export type Criteria = Record<string, any>;

export const findByCriteria = async <T>(
  repository: Repository<T>,
  criteria: Criteria,
  pagination: PaginationParams,
  relation?: string
) => {
  const queryBuilder = repository.createQueryBuilder();
  const {skip, take} = createPagination(pagination);
  
  if (relation == "brand") {
    queryBuilder.leftJoinAndSelect("Car.brand", relation);
  }
  if (relation == "car") {
    queryBuilder.leftJoinAndSelect("Appointment.car", relation);
  }

  Object.entries(criteria).forEach(([key, value]) => {
    if (!value) return;
    queryBuilder.andWhere(`${key} ilike '%${value}%'`);
  });
  return queryBuilder.skip(skip).take(take).getMany();
};
