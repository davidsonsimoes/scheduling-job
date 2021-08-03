import { getJobs } from '../domain/mappers/get-jobs';
import { ExecutionWindow, Payload } from '../domain/models';
import { checkItemsIdByMaxTimeOfDay } from '../domain/utils';
import { getParsedDate } from '../domain/utils';
import { orderBy } from '../domain/utils';

const MAX_TIME_LIMIT = 8;

export const getArrayOfJobs = (payloads: Payload[], executionWindow: ExecutionWindow) => {
  const jobDtos = payloads.map((payloadItem) => getJobs(payloadItem));
  const startAsDate = getParsedDate(executionWindow.start);
  const orderedJobs = orderBy(startAsDate, jobDtos);
  return checkItemsIdByMaxTimeOfDay(MAX_TIME_LIMIT, orderedJobs);
};

(async function run() {
  const payload = [
    {
      'ID': 1,
      'Descrição': 'Importação de arquivos de fundos',
      'Data Máxima de conclusão': '2019-11-10 12:00:00',
      'Tempo estimado': '2 horas',
    },
    {
      'ID': 2,
      'Descrição': 'Importação de dados da Base Legada',
      'Data Máxima de conclusão': '2019-11-11 12:00:00',
      'Tempo estimado': '4 horas',
    },
    {
      'ID': 3,
      'Descrição': 'Importação de dados de integração',
      'Data Máxima de conclusão': '2019-11-11 08:00:00',
      'Tempo estimado': '6 horas',
    },
  ];

  const executionWindow = {
    start: '2019-11-10 09:00:00',
    end: '2019-11-11 12:00:00',
  };

  const result = getArrayOfJobs(payload, executionWindow);

  console.log('O resultado esperado é ✅', result);
})();
