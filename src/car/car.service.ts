import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.car.create({ data });
  }

  findAll() {
    return this.prisma.car.findMany();
  }

  findOne(id: string) {
    return this.prisma.car.findUnique({ where: { id } });
  }

  findByUser(ownerId: string) {
    return this.prisma.car.findMany({ where: {
      ownerId
    }})
  }

  update(id: string, data: any) {
    return this.prisma.car.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.car.delete({ where: { id } });
  }
}
