import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'hello nestJs';
  }

  @Post()
  createUser(): string {
    return 'creating a user';
  }

  @Put()
  replaceUser(): string {
    return 'updating a user';
  }

  @Delete()
  deleteUser(): string {
    return 'deleting a user';
  }
}
