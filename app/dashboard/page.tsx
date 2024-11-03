import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <main className="flex flex-col min-h-[100vh] p-[5rem]">
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle className="text-7xl">Welcome back Sean</CardTitle>
          <CardDescription className="text-3xl">
            Your tasks for today, 3rd November 2024
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div>Task list</div>
        </CardContent>
      </Card>
    </main>
  );
}
