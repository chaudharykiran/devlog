import { useState } from "react";
import { TopNavigation } from "@/components/blog/top-navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "submitting">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      // For demo purposes with placeholder URL, simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In production, replace with actual Formspree form ID:
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name: form.name,
      //     email: form.email,
      //     message: form.message,
      //   }),
      // });
      
      // Simulate successful submission for demo
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen">
      <TopNavigation />
      <main className="container mx-auto px-4 py-8 max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold">Contact</h1>
        <Card>
          <CardHeader>
            <CardTitle>Newsletter</CardTitle>
            <CardDescription>
              Subscribe to receive any updates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/devlog"
              method="post"
              target="popupwindow"
              className="space-y-5"
            >
              <input type="hidden" value="0" name="embed" />
              <div className="flex gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="flex-2 rounded-md border px-3 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-md border px-8 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded-md border px-8 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can I help you?"
                    className="w-full rounded-md border px-8 py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" && (
                <p className="text-green-600">Thanks! I&apos;ll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="text-destructive">Please fill out all fields or try again later.</p>
              )}
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
