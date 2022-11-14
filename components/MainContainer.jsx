import A from "./A";
import Head from "next/head";

const MainContainer = ({ children }) => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/users"} text="Пользователи" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
