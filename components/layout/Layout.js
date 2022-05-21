import { Fragment } from "react";
import Head from "next/head";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

const DivContainer = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
`

const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding: 2%;
  @media (min-width: 576px) {
    padding: 3% 10%;
  }
`;

const Layout = (props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --black: #000000; 
            --white: #ffffff;
            --gray: #767B9D;
            --blue: #3E36E2;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 1.5;
            background-color: var(--black);
            margin: 0;
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
            color: var(--white);
          }
          h1,
          h2 {
            font-family: "arial", serif;
            font-weight: 700;
          }
          h3 {
            font-family: "helvetica", sans-serif;
          }
          p {
            font-family: "helvetica", sans-serif;
            color: var(--white);
          }
          span{
            color: var(--white  );
          }
          label{
            color: var(--white);
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
            color: var(--white);
          }
          img {
            max-width: 100%;
          }
        `}
      ></Global>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="content-language" content="es"></meta>
        <title key="title">Cursos Open</title>
        <meta name="theme-color" content="#461319" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <DivContainer>
        <Main>{props.children}</Main>
      </DivContainer>
    </Fragment>
  );
}

export default Layout;