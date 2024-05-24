import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Appointment } from 'src/model/appointment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppointmentsService {
    constructor(
        @InjectRepository(Appointment) private readonly repository: Repository<Appointment>
    ) {};

    async findAll(): Promise<Appointment[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<Appointment> {
        return await this.repository.findOneBy({ id: id });
    }

    async saveAppointment(appointment: Appointment): Promise<Appointment> {
        return await this.repository.save(appointment);
    }
}
