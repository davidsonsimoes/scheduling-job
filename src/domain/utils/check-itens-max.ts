
import { JobsModel } from '../models';

export const checkItemsIdByMaxTimeOfDay = (maxTime: number, jobs: JobsModel[]) => {
  const chunked: any = [];
  let indexChunk = 0;
  let hoursAccumulatorOfDay = 0;

  for (const item of jobs) {
    const { estimatedHoursToFinish = 0 } = item;
    if (hoursAccumulatorOfDay + estimatedHoursToFinish > maxTime) {
      indexChunk += 1;
      hoursAccumulatorOfDay = 0;
    }

    hoursAccumulatorOfDay += estimatedHoursToFinish;
    chunked[indexChunk] = chunked[indexChunk] ? [...chunked[indexChunk], item?.id] : [item?.id];
  }

  return chunked;
};
