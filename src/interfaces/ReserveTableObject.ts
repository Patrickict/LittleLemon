import dayjs, { Dayjs } from 'dayjs';

interface ReserveTableObject {
  DateTime: Dayjs | null,
  NumberOfPeople : number,
  FirstName : string,
  LastName : string,
  Email : string,
  PhoneNumber : string
  }

  export default ReserveTableObject;