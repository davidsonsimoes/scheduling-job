export type JobsModel = {
  id: number;
  description: string;
  maxDateToFinish: Date;
  estimatedHoursToFinish: number;
}

export type RespJobsModel = {
  id: number;
  description: string;
  maxDateToFinish: Date;
  estimatedHoursToFinish: number;
}

export type ExecutionWindow = {
  start: string;
  end: string;
}

export type Payload = {
  'ID': number;
  'Descrição': string;
  'Data Máxima de conclusão': string;
  'Tempo estimado': string;
}
