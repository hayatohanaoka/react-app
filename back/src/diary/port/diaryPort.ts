import { Diary } from '../domain/diary';

export class DiaryPort {
  execute: (title: string, content: string, date: string) => Diary | null;
}
