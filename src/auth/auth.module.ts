import { Module } from '@nestjs/common';
import { BasicAuthGuard } from './basic-auth.guard';

@Module({
  providers: [BasicAuthGuard],
  exports: [BasicAuthGuard], // Export the guard to make it available to other modules
})
export class AuthModule {}
