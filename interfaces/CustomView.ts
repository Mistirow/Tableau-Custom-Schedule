export interface CustomView {
  name: string;
  display_name: string;
  repository_url: string;
  workbook_url?: string;
  sheet_id?: string;
  workbook_display_name?: string;
  report_display_name?: string;
  workbook_id?: number;
  user_id?: number;
  schedule_id?: number;
  report_name?: string;
  format?: string;
  frequency?: string;
  schedule_datetime?: Date;
  run_id?: number;
}

export type CustomViews = CustomView[];