export type JobStatus = "Pending" | "Rejected" | "Selected";

export const JOB_STATUS: JobStatus[] = ["Pending", "Rejected", "Selected"];

export interface Job {
  id: number;
  company: string;
  location: string;
  status: JobStatus;
  title: string;
}

export type NewJob = Omit<Job, "id">;
