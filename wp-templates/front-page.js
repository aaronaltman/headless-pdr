import { gql } from "@apollo/client";
import Header from "../components/header";
export default function Component() {

  return (
    <>

    </>
  );
}

Component.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;
