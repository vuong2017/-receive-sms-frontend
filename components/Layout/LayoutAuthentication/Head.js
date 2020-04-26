import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>Login</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
      <link
        rel="stylesheet"
        type="text/css"
        href="vendor/bootstrap/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="fonts/iconic/css/material-design-iconic-font.min.css"
      />
      <link rel="stylesheet" type="text/css" href="css/util.css" />
      <link rel="stylesheet" type="text/css" href="css/main.css" />
    </Head>
  );
};

export default Header;
