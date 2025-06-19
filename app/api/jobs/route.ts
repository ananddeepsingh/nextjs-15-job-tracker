import { Job } from "@/types/job";
import { NextResponse } from "next/server";

const JOBS: Job[] = [];

export function GET() {
  console.log(JOBS, "JOBS");
  return NextResponse.json(JOBS);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, company, location, status } = body;

  // Debug log to see what you're receiving
  console.log("Received body:", body);

  // Example: Add to DB or memory store
  const newJob = {
    id: Date.now(), // or database-generated
    title,
    company,
    location,
    status,
  };

  JOBS.push(newJob);

  // Return the updated job list (simulate)
  return NextResponse.json(JOBS, {
    status: 201,
  });
}

/* export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body, "body");
  JOBS.push({
    id: JOBS.length + 1,
    title: body.name,
    company: body.price,
    location: body.location,
    status: body.status,
  });

  return NextResponse.json(JOBS, {
    status: 201,
  });
} */

/* 
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/route";
// import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const jobs = await prisma.job.findMany({
    where: { userId: session.user.id },
  });

  return new Response(JSON.stringify(jobs), { status: 200 });
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { title, company, status } = await req.json();

  if (!title || !company || !status) {
    return new Response("Missing fields", { status: 400 });
  }

  const job = await prisma.job.create({
    data: {
      title,
      company,
      status,
      userId: session.user.id,
    },
  });

  return new Response(JSON.stringify(job), { status: 201 });
}

 */
