import { HttpException } from '@nestjs/common';

interface Meta {
  code: number;
  status: 'error';
  message: string | null;
}

interface ApiResponse {
  meta: Meta;
  data: any;
}

export class ErrorResponse {
  /**
   * Format error response.
   * @param message - Error message for the response.
   * @param code - HTTP status code (default: 400).
   * @param data - Optional additional data.
   * @throws HttpException with the formatted error response.
   */
  static throw(
    message: string | null = 'An error occurred.',
    code?: number,
    data: any = null,
  ): never {
    const response: ApiResponse = {
      meta: {
        code,
        status: 'error',
        message,
      },
      data,
    };

    throw new HttpException(response, code);
  }
}
