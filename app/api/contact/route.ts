import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, requirement, honeypot } = body;

    // Silent fail for spam bots triggering honeypot
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Request received" });
    }

    if (!name || !phone || !requirement) {
      return NextResponse.json(
        { success: false, error: "Name, phone number, and requirement are required." },
        { status: 400 }
      );
    }

    // Log the lead data server-side
    console.log("=== NEW INDUSTRIAL CONSULTANCY LEAD RECEIVED ===");
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email || "Not provided"}`);
    console.log(`Requirement: ${requirement}`);
    console.log("================================================");

    return NextResponse.json({
      success: true,
      message: "Thank you! Your requirement has been submitted successfully. We will contact you shortly.",
      lead: { name, phone, email, requirement },
    });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit request. Please call us directly." },
      { status: 500 }
    );
  }
}
