// src/auth/basic-auth.guard.ts

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    if (!authHeader) return false;

    const [authType, credentials] = authHeader.split(' ');

    if (authType !== 'Basic') return false;

    const [username, password] = Buffer.from(credentials, 'base64')
      .toString()
      .split(':');

    const validUser = this.configService.get('HTTP_ADMIN_USER') === username;
    const validPass = this.configService.get('HTTP_ADMIN_PASS') === password;

    return validUser && validPass;
  }
}
