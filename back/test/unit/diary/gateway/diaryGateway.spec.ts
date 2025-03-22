import { DiaryGateway } from '../../../../src/diary/gateway/diaryGateway';
import { DiaryDriver } from '../../../../src/diary/driver/diaryDriver';
import { Diary } from 'src/diary/domain/diary';

describe('DiaryGateway', () => {
  const driverMock: DiaryDriver = {
    execute: jest.fn(),
  };

  const gateway = new DiaryGateway(driverMock);

  describe('execute', () => {
    it('driverのsaveメソッドを引数付きで呼ぶ', () => {
      driverMock.execute = jest
        .fn()
        .mockImplementation((title: string, content: string, date: string) => {
          return {
            title,
            content,
            date,
          };
        });

      gateway.execute('test', 'test', '2025-03-21');

      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(driverMock.execute).toHaveBeenCalledWith(
        'test',
        'test',
        '2025-03-21',
      );
    });

    describe('正常系', () => {
      it('作成に使用したデータが返る', () => {
        const expected: Diary = {
          title: 'test',
          content: 'test',
          date: new Date('2025-03-21'),
        };

        driverMock.execute = jest
          .fn()
          .mockImplementation(
            (title: string, content: string, date: string) => {
              return {
                title: title,
                content: content,
                date: date,
              };
            },
          );

        const actual = gateway.execute('test', 'test', '2025-03-21');

        expect(actual).toEqual(expected);
      });
    });

    describe('正常系', () => {
      describe('title, content, dateが全て揃っている場合', () => {
        it('全てのフィールドに値が入ったDiaryが返る', () => {
          const expected: Diary = {
            title: 'test',
            content: 'test',
            date: new Date('2025-03-21'),
          };

          driverMock.execute = jest
            .fn()
            .mockImplementation(
              (title: string, content: string, date: string) => {
                return {
                  title: title,
                  content: content,
                  date: date,
                };
              },
            );

          const actual = gateway.execute('test', 'test', '2025-03-21');

          expect(actual).toEqual(expected);
        });
      });

      describe('title, content, dateのいづれかが欠落している場合', () => {
        it('欠落したフィールドはnullが入り、それ以外は値の入ったDiaryが返る', () => {
          const expected: Diary = {
            title: 'test',
            content: null,
            date: new Date('2025-03-21'),
          };

          driverMock.execute = jest
            .fn()
            .mockImplementation(
              (title: string, content: string, date: string) => {
                return {
                  title: title,
                  content: null,
                  date: date,
                };
              },
            );

          const actual = gateway.execute('test', 'test', '2025-03-21');

          expect(actual).toEqual(expected);
        });
      });
    });

    describe('異常系', () => {
      it('処理が失敗した場合は、nullが返る', () => {
        const expected = null;

        driverMock.execute = jest.fn().mockImplementation(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (title: string, content: string, date: string) => {
            return null;
          },
        );
        const actual = gateway.execute('test', 'test', '2025-03-21');
        expect(actual).toEqual(expected);
      });
    });
  });
});
