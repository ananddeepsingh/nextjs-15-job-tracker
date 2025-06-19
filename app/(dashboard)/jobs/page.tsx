"use client";
import { useJobsStore } from "@/stores/jobStore";
import { Job } from "@/types/job";
import Link from "next/link";
import React, { useEffect } from "react";
// import { useJobsStore } from "@/store/jobsStore";

export default function JobsPage() {
  const { jobs, getJobs } = useJobsStore();

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Job Applications</h1>

        {jobs.length === 0 ? (
          <p>No Data</p>
        ) : (
          <ul style={styles.jobList}>
            {jobs?.map((job: Job) => (
              <li key={job.id} style={styles.jobItem}>
                <h2 style={styles.jobTitle}>Title - {job.title}</h2>
                <p style={styles.company}>Company - {job.company}</p>
                <p style={styles.status}>Status - {job.status}</p> <br />
                <Link href={`/jobs/${job.id}`}>Edit Status</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "85vh",
    backgroundColor: "#f5f7fa",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "640px",
    padding: "2rem",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: 700,
    marginBottom: "1.5rem",
  },
  emptyMessage: {
    fontSize: "1rem",
    color: "#777",
  },
  jobList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  jobItem: {
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "1rem",
    marginBottom: "1rem",
    backgroundColor: "#f9f9f9",
  },
  jobTitle: {
    margin: "0 0 0.5rem",
    fontWeight: 600,
    fontSize: "1.1rem",
  },
  company: {
    margin: "0 0 0.25rem",
    color: "#444",
  },
  status: {
    fontStyle: "italic",
    color: "#555",
  },
};
