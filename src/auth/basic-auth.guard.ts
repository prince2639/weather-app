import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import * as basicAuth from 'basic-auth';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const credentials = basicAuth(request);

    // Replace with your actual authentication logic
    return (
      credentials &&
      credentials.name === 'admin' &&
      credentials.pass === 'password'
    );
  }
}
