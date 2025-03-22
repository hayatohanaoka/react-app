import { Injectable } from '@nestjs/common';
import { DiaryRequest, DiaryResponse } from '../controllers/diary.controller';
import { diaryUsecase } from '../diary/dependencies';

@Injectable()
export class DiaryService {
  create(diaryRequest: DiaryRequest): DiaryResponse | null {
    const diary = diaryUsecase.create(
      diaryRequest.title,
      diaryRequest.content,
      diaryRequest.date,
    );

    return diary === null
      ? null
      : {
          title: diary.title || null,
          content: diary.content || null,
          date: diary.date || null,
        };
  }
}
