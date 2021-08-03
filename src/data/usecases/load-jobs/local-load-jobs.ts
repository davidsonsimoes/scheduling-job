import { LoadJobs } from '../../../domain/usecases'

export class LocalLoadJobs implements LoadJobs {

  constructor (

  ) {}

  async loadAll (): Promise<Array<LoadJobs.Result>> {
    try {

    } catch (error) {

      return []
    }
  }
}
