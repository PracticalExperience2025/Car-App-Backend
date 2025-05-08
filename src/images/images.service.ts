import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { ConfigService }  from '@nestjs/config';

@Injectable()
export class ImagesService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
    });
  }
  async uploadImage(imageBuffer: Buffer, imageType: string): Promise<string> {
    try {
      const uploadedImage = await cloudinary.uploader.upload_stream(
        { upload_preset: 'my_preset' },
        (error, result) => {
          if (error) {
            throw new Error(`Cloudinary upload error: ${error.message}`);
          }
          return result?.secure_url;
        }
      );

      // Use a writable stream to upload the image directly
      const stream = cloudinary.uploader.upload_stream(
        { upload_preset: 'my_preset' },
        (error, result) => {
          if (error) {
            throw new Error(`Cloudinary upload error: ${error.message}`);
          }
          return result?.secure_url;
        },
      );

      // Write the image buffer to the Cloudinary stream
      stream.end(imageBuffer);

      return new Promise((resolve, reject) => {
        stream.on('data', (data) => resolve(data));
        stream.on('error', (err) => reject(err));
      });
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw new Error('Error uploading image to Cloudinary');
    }
  }
}
