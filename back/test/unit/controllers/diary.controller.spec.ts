import { Test, TestingModule } from '@nestjs/testing';
import {
  DiaryController,
  DiaryRequest,
  DiaryResponse,
} from '../../../src/controllers/diary.controller';
import { DiaryService } from '../../../src/providers/diary.service';

describe('DiaryController', () => {
  let controller: DiaryController;
  const diaryServiceMock = jest.spyOn(DiaryService.prototype, 'create');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiaryController],
      providers: [DiaryService],
    }).compile();

    controller = module.get<DiaryController>(DiaryController);
  });

  describe('POST /api/diaries', () => {
    it('diaryRequestを引数に diary service の create を呼ぶ', () => {
      const expected: DiaryResponse = {
        title: 'test',
        content: 'test',
        date: new Date('2025-03-21'),
      };

      const diaryRequest: DiaryRequest = {
        title: 'test',
        content: 'test',
        date: '2025-03-21',
      };

      diaryServiceMock.mockImplementationOnce(
        (diaryRequest: DiaryRequest): DiaryResponse | null => {
          return {
            title: diaryRequest.title,
            content: diaryRequest.content,
            date: new Date(diaryRequest.date),
          };
        },
      );

      const actual = controller.create('test', 'test', '2025-03-21');

      expect(diaryServiceMock).toHaveBeenCalledWith(diaryRequest);
      expect(actual).toEqual(expected);
    });
  });
});
