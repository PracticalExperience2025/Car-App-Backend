import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from './images.service';
import { BadRequestException } from '@nestjs/common';

@Controller('image')
export class ImagesController {
  constructor(private readonly imageUploadService: ImagesService) {}
 
  @Post('upload')
    @UseInterceptors(FileInterceptor('image'))
    async uploadImage(@UploadedFile() file: Express.Multer.File) {
        if (!file) throw new BadRequestException('No file uploaded');
        const imageUrl = await this.imageUploadService.uploadImage(file.buffer, file.mimetype);
        return { imageUrl };
    }
}