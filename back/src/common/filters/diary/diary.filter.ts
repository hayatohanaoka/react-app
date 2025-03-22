import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class DiaryFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
