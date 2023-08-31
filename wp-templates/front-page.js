import { gql } from "@apollo/client";
import Header from "../components/header";
import HomePage from "../thefront-main/nextjs/src/pages/home";

export default function Component() {

  return (
    <>
 <HomePage />
    </>
  );
}

Component.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;
