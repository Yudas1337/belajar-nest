import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorResponse } from '../../shared/responses/error.response';

@Injectable()
export class ValidationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof BadRequestException) {
          const response = err.getResponse();
          if (response['message'] && Array.isArray(response['message'])) {
            const errors = response['message'].reduce((result, errorMsg) => {
              const field = this.extractFieldName(errorMsg);
              if (field) {
                result[field] = result[field] || [];
                result[field].push(errorMsg);
              }
              return result;
            }, {});

            return throwError(
              ErrorResponse.throw(
                'Form Validation Errors',
                HttpStatus.UNPROCESSABLE_ENTITY,
                errors,
              ),
            );
          }
        }

        return throwError(err);
      }),
    );
  }

  private extractFieldName(errorMessage: string): string | null {
    const match = errorMessage.match(/(\w+)\s/);
    return match ? match[1] : null;
  }
}
