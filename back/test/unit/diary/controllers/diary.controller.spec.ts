import { Test, TestingModule } from '@nestjs/testing';
import {
  DiaryController,
  DiaryRequest,
} from '../../../../src/diary/controllers/diary.controller';
import { DiaryService } from '../../../../src/diary/providers/diary.service';

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
    it('diary serviceのcreateメソッドを呼び出す', () => {
      const diaryRequest: DiaryRequest = {
        title: 'test',
        content: 'test',
        date: '2025-03-21',
      };

      diaryServiceMock.mockImplementationOnce((diaryRequest: DiaryRequest) => {
        console.log(
          `mock impl is called by ${diaryRequest.title} ${diaryRequest.content} ${diaryRequest.date}`,
        );
        return 201;
      });

      controller.create(diaryRequest);
      expect(diaryServiceMock).toHaveBeenCalledWith(diaryRequest);
    });
  });
});
