import { redirect } from "next/navigation";

export default function RootPage() {
  // Sitio solo en inglés.
  redirect("/en");
}
