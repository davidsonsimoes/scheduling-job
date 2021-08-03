import { differenceInHours } from 'date-fns';

import { JobsModel, RespJobsModel } from '../models';

export const orderBy = (start: Date, jobs: RespJobsModel[]) => {
  return jobs.sort((aJob: RespJobsModel, bJob: RespJobsModel) => {
    const maxHoursToFinishJobA = differenceInHours(aJob.maxDateToFinish, start);
    const maxHoursToFinishJobB = differenceInHours(bJob.maxDateToFinish, start);
    return maxHoursToFinishJobA < maxHoursToFinishJobB ? -1 : 1;
  });
};
