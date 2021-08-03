import * as respPayload from '../../payload/payload.json';
import { getJobs } from '../../../domain/mappers/get-jobs'

describe('Data to Job', () => {
  test('check if the return is valid', () => {
    const items = respPayload.map((item: any) => getJobs(item));
    expect(items).toBeTruthy();
    expect(items).toStrictEqual([
      {
        description: 'Importação de arquivos de fundos',
        estimatedHoursToFinish: 2,
        id: 1,
        maxDateToFinish: new Date('2019-11-10T15:00:00.000Z'),
      },
      {
        description: 'Importação de dados da Base Legada',
        estimatedHoursToFinish: 4,
        id: 2,
        maxDateToFinish: new Date('2019-11-11T15:00:00.000Z'),
      },
      {
        description: 'Importação de dados de integração',
        estimatedHoursToFinish: 6,
        id: 3,
        maxDateToFinish: new Date('2019-11-11T11:00:00.000Z'),
      },
    ]);
  });
});
