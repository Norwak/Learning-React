import EditProject from "../sections/EditProject";
import NoProject from "../sections/NoProject";
import ViewProject from "../sections/ViewProject";

export default function Main({mode = 'no', changeModeEvent}) {
  return (
    <main>

      {mode === 'no' && <NoProject changeModeEvent={changeModeEvent} />}

      {mode === 'view' && <ViewProject />}

      {mode === 'edit' && <EditProject />}

    </main>
  );
}