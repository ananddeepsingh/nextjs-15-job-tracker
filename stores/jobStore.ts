import { Job, NewJob } from "@/types/job";
import { create } from "zustand";

interface JobStoreState {
  jobs: Job[];
  loading: boolean;
  getJobs: () => Promise<void>;
  addJob: (job: NewJob) => Promise<void>;
  updatedJob: (id: number, updates: Partial<Pick<Job, "status">>) => void;
}

export const useJobsStore = create<JobStoreState>((set, get) => ({
  jobs: [],
  loading: false,
  addJob: async (value: NewJob) => {
    try {
      const res = await fetch("http://localhost:3000/api/jobs", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data: Job[] = await res.json();
      set({ jobs: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
      set({ loading: false });
    }
  },
  getJobs: async () => {
    const { jobs } = get();
    // if (jobs.length > 0) return;

    set({ loading: true });

    try {
      const res = await fetch("http://localhost:3000/api/jobs", {
        cache: "no-store", // Optional: disables caching
      });

      const data: Job[] = await res.json();
      console.log(data, "data from getJobs api");
      set({ jobs: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch jobs:", error);

      set({ loading: false });
    }
  },
  // addJob: (job: Job) => {
  //   const { jobs } = get();

  //   set({ jobs: [...jobs, job] });
  // },
  updatedJob: (id, updates) => {
    set((state) => {
      return {
        jobs: state.jobs.map((job) =>
          job.id === id ? { ...job, ...updates } : job
        ),
      };
    });
  },
}));
