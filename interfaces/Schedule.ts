export interface Schedule {
  workbook_display_name: string;
  report_display_name: string;
  workbook_id: number;
  user_id: number;
  send_email: string;
  start_date: Date;
  schedule_id?: number;
  report_name?: string;
  format?: string;
  frequency?: string;
  schedule_datetime?: Date;
  run_id?: number;
}

export type Schedules = Schedule[];