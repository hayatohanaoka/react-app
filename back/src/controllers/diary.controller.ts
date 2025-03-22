import { Body, Controller, Post } from '@nestjs/common';
import { DiaryService } from '../providers/diary.service';

export interface DiaryRequest {
  title: string;
  content: string;
  date: string;
}

export interface DiaryResponse {
  title: string | null;
  content: string | null;
  date: Date | null;
}

@Controller('api/diaries')
export class DiaryController {
  constructor(private diaryService: DiaryService) {}

  @Post()
  create(
    @Body('title') title: string = '',
    @Body('content') content: string = '',
    @Body('date') date: string = '',
  ): DiaryResponse | null {
    const diaryRequest: DiaryRequest = {
      title: title,
      content: content,
      date: date,
    };
    return this.diaryService.create(diaryRequest);
  }
}
