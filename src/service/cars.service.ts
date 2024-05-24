import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/model/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(Car) private readonly repository: Repository<Car>
    ) {};

    async findAll(): Promise<Car[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<Car> {
        return await this.repository.findOneBy({ id: id });
    }

    async saveCar(car: Car): Promise<Car> {
        return await this.repository.save(car);
    }
}
