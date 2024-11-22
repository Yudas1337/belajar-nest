interface Meta {
  code: number;
  status: 'success';
  message: string | null;
  pagination?: any;
}

interface ApiResponse {
  meta: Meta;
  data: any;
}

export class SuccessResponse {
  /**
   * Format success response.
   * @param data - Data to be returned.
   * @param message - Message for the response.
   * @param code - HTTP status code (default: 200).
   * @param pagination - Pagination details if applicable.
   * @returns Formatted success response.
   */
  static build(
    data: any = null,
    message: string | null = 'Request successful.',
    code: number = 200,
    pagination: any = null,
  ): ApiResponse {
    return {
      meta: {
        code,
        status: 'success',
        message,
        ...(pagination ? { pagination } : {}),
      },
      data,
    };
  }
}
