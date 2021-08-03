import { Payload, RespJobsModel } from '../models'
import { getParsedDate } from '../utils'

export const getJobs = (payload: Payload): RespJobsModel => {
  return {
    description: payload['Descrição'],
    estimatedHoursToFinish: parseInt(payload['Tempo estimado'].split(' ')[0]),
    id: payload['ID'],
    maxDateToFinish: getParsedDate(payload['Data Máxima de conclusão']),
  };
};
