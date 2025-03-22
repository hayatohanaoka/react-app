import { DiaryPort } from '../port/diaryPort';
import { DiaryDriver } from '../driver/diaryDriver';
import { Diary } from '../domain/diary';

export class DiaryGateway implements DiaryPort {
  constructor(private driver: DiaryDriver) {
    this.driver = driver;
  }

  execute(title: string, content: string, date: string): Diary | null {
    const dairyResponse = this.driver.execute(title, content, date);
    return dairyResponse
      ? {
          title: dairyResponse.title || null,
          content: dairyResponse.content || null,
          date: this.convertStringToDate(dairyResponse.date),
        }
      : null;
  }

  private convertStringToDate(dateString: string | null): Date | null {
    return dateString ? new Date(dateString) : null;
  }
}
