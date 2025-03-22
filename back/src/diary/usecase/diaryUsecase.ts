import { Diary } from '../domain/diary';
import { DiaryPort } from '../port/diaryPort';

export class DiaryUsecase {
  constructor(private diaryPort: DiaryPort) {}

  create(title: string, content: string, date: string): Diary | null {
    return this.diaryPort.execute(title, content, date);
  }
}
