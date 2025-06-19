"use client";
import { useJobsStore } from "@/stores/jobStore";
import { JobStatus, NewJob } from "@/types/job";
import { useRouter } from "next/navigation";
import React from "react";

const AddJobPage = () => {
  const addJob = useJobsStore((state) => state.addJob);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values: NewJob = {
      title: formData.get("title") as string,
      company: formData.get("company") as string,
      location: formData.get("location") as string,
      status: formData.get("jobstatus") as JobStatus,
    };

    console.log("Form submitted with values:", values);

    addJob(values);
    router.push("/jobs");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.field}>
          <label htmlFor="title" style={styles.label}>
            Title
          </label>
          <input type="text" id="title" name="title" style={styles.input} />
        </div>

        <div style={styles.field}>
          <label htmlFor="company" style={styles.label}>
            Company
          </label>
          <input type="text" id="company" name="company" style={styles.input} />
        </div>

        <div style={styles.field}>
          <label htmlFor="location" style={styles.label}>
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            style={styles.input}
          />
        </div>

        <div style={styles.field} id="jobstatus">
          <label htmlFor="jobstatus" style={styles.label}>
            Job Status
          </label>
          <select style={styles.input} name="jobstatus">
            <option value={"fullTime"}>Full Time</option>
            <option value={"remote"}>Remote</option>
            <option value={"thirdParty"}>Third Party</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>
          Create Job
        </button>
      </form>
    </div>
  );
};

export default AddJobPage;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "85vh",
    backgroundColor: "#f5f7fa",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  label: {
    marginBottom: "8px",
    fontWeight: "500",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    padding: "10px 12px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    backgroundColor: "#0070f3",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },
};
