import { DiaryMiddleware } from '../../../../../src/common/middleware/diary/diary.middleware';

describe('DiaryMiddleware', () => {
  it('should be defined', () => {
    expect(new DiaryMiddleware()).toBeDefined();
  });
});
