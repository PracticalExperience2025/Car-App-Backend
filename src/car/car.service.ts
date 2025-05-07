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

  update(id: string, data: Partial<CreateCarDto>) {
    return this.prisma.car.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.car.delete({ where: { id } });
  }
}
