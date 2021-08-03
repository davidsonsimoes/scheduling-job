import { JobsModel } from '@/domain/models'

export interface LoadJobs {
  loadAll: () => Promise<Array<LoadJobs.Result>>
}

export namespace LoadJobs {
  export type Result = JobsModel
}
