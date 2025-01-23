import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'hello nestJs';
  }

  @Get(':id')
  getUserById(@Param('id') id: number): string {
    return `User ID is: ${id}`;
  }

  @Get(':id')
  replaceUser(@Param('id') id: string): string {
    return `updating a user of ${id}`;
  }

  @Post()
  createUser(@Body() body: { name: string }): string {
    return `create a user with name ${body.name}`;
  }

  @Delete()
  deleteUser(): string {
    return 'deleting a user';
  }
}
