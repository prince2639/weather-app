// src/auth/auth.guard.ts
import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.headers['user'];
    const pass = request.headers['pass'];
    const validUser = this.configService.get('HTTP_ADMIN_USER');
    const validPass = this.configService.get('HTTP_ADMIN_PASS');

    return user === validUser && pass === validPass;
  }
}
