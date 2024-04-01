import EditProject from "../sections/EditProject";
import NoProject from "../sections/NoProject";
import ViewProject from "../sections/ViewProject";

export default function Main() {
  return (
    <main>

      <NoProject />

      <ViewProject />

      <EditProject />

    </main>
  );
}