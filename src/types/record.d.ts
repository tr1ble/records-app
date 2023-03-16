interface IRecord {
  id: number,
  description: string
  date: string,
}

interface IRecordUpdate {
  record: IRecord,
  number: number,
}

type RecordState = {
  records: Record[],
}

