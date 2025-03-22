import { DiaryPort } from '../../../../src/diary/port/diaryPort';
import { Diary } from '../../../../src/diary/domain/diary';
import { DiaryUsecase } from '../../../../src/diary/usecase/diaryUsecase';

describe('diaryUsecase', () => {
  const diaryPortMock: DiaryPort = {
    execute: jest.fn(),
  };

  const usecase = new DiaryUsecase(diaryPortMock);

  describe('create', () => {
    it('diaryPortのexecuteメソッドが引数付きで呼ばれる', () => {
      diaryPortMock.execute = jest
        .fn()
        .mockImplementation(
          (title: string, content: string, date: string): Diary => {
            return {
              title,
              content,
              date: new Date(date),
            };
          },
        );

      usecase.create('test', 'test', '2025-03-21');

      expect(diaryPortMock.execute).toHaveBeenCalledWith(
        'test',
        'test',
        '2025-03-21',
      );
    });
  });
});
