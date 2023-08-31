import { gql } from "@apollo/client";
import Header from "../components/header";
export default function Component() {

  return (
    <>
<p>we are testing this shit son</p>
    </>
  );
}

Component.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;
