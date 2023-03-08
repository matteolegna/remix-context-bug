import { useContext } from "react";
import { myContext } from "~/root";

export default function Index() {
  const context = useContext(myContext);
  return <h1>{context.message}</h1>;
}
