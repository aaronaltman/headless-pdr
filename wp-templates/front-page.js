import { gql } from "@apollo/client";
import Header from "../components/header";
import HomePage from "../thefront-main/nextjs/src/pages/home";
import Contact from "../thefront-main/nextjs/src/views/Agency/components/Contact/Contact.js";
export default function Component() {

  return (
    <>
 <HomePage />
   <Contact />
    </>
  );
}

Component.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;
