import { Module } from '@nestjs/common';
import { DiaryController } from '../controllers/diary.controller';
import { DiaryService } from '../providers/diary.service';

@Module({
  imports: [],
  controllers: [DiaryController],
  providers: [DiaryService],
})
export class AppModule {}
