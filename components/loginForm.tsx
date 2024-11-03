import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Use SWR Practice</CardTitle>
        <CardDescription>User details are hardcoded</CardDescription>
      </CardHeader>

      <CardFooter>
        <Link href="/dashboard">
          <Button variant="outline">Login</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
