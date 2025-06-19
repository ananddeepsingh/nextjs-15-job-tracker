"use client";
import React from "react";
import { useJobsStore } from "@/stores/jobStore";
import { useParams, useRouter } from "next/navigation";

export default function UpdateJobButton() {
  const { id } = useParams();
  const router = useRouter();
  const idParam = id;

  const updatedJob = useJobsStore((state) => state.updatedJob);

  const handleClick = () => {
    if (!idParam || Array.isArray(idParam)) {
      console.error("Invalid job ID in URL");
      return;
    }

    updatedJob(parseInt(idParam), { status: "Rejected" });
    router.push("/jobs");
  };

  return <button onClick={handleClick}>Update Job #{id}</button>;
}
