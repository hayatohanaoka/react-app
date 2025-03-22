import { DiaryUsecase } from './usecase/diaryUsecase';
import { DiaryDriver } from './driver/diaryDriver';
import { DiaryGateway } from './gateway/diaryGateway';

export const diaryDriver = new DiaryDriver();
export const diaryGateway = new DiaryGateway(diaryDriver);
export const diaryUsecase = new DiaryUsecase(diaryGateway);
