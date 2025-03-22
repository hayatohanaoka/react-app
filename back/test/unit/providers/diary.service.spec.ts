import { Test, TestingModule } from '@nestjs/testing';
import { DiaryService } from '../../../src/providers/diary.service';
import { DiaryUsecase } from '../../../src/diary/usecase/diaryUsecase';
import { Diary } from 'src/diary/domain/diary';

describe('DiaryService', () => {
  let service: DiaryService;
  const diaryUsecase = jest.spyOn(DiaryUsecase.prototype, 'create');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiaryService],
    }).compile();

    service = module.get<DiaryService>(DiaryService);
  });

  describe('create', () => {
    it('DiaryUsecase の create メソッドを、diaryRequest.title diaryRequest.content diaryRequest.date を引数にして呼ぶ', () => {
      const diaryRequest = {
        title: 'test',
        content: 'test',
        date: '2025-03-21',
      };

      diaryUsecase.mockImplementationOnce(
        (title: string, content: string, date: string): Diary => {
          return {
            title: title,
            content: content,
            date: new Date(date),
          };
        },
      );

      service.create(diaryRequest);

      expect(diaryUsecase).toHaveBeenCalledWith(
        diaryRequest.title,
        diaryRequest.content,
        diaryRequest.date,
      );
    });

    describe('正常系', () => {
      it('usecase から返ったデータを DiaryResponse として返す', () => {
        const diaryRequest = {
          title: 'test',
          content: 'test',
          date: '2025-03-21',
        };

        diaryUsecase.mockImplementationOnce(
          (title: string, content: string, date: string): Diary => {
            return {
              title: title,
              content: content,
              date: new Date(date),
            };
          },
        );
        const expected = {
          title: 'test',
          content: 'test',
          date: new Date('2025-03-21'),
        };

        const actual = service.create(diaryRequest);
        expect(actual).toEqual(expected);
      });
    });

    describe('異常系', () => {
      it('nullを返す', () => {
        const diaryRequest = {
          title: 'test',
          content: 'test',
          date: '2025-03-21',
        };

        diaryUsecase.mockImplementationOnce(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (title: string, content: string, date: string) => {
            return null;
          },
        );
        const expected = null;
        const actual = service.create(diaryRequest);

        expect(actual).toEqual(expected);
      });
    });
  });
});
