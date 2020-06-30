import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>TextNow</title>
      <link rel="icon" href="/favicon.ico" />

      <meta charset="UTF-8" />

      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        id="viewport"
        name="viewport"
        content="width=device-width, user-scalable=yes"
      />
      <link
        href="//fonts.googleapis.com/css?family=Open+Sans:400,600italic,300italic,300,600,400italic,700,700italic,800,800italic|Montserrat:400,700|Cutive|Roboto:300,400,500,700|Source+Sans+Pro:300,400,600"
        rel="stylesheet"
        type="text/css"
      />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />

      <meta name="format-detection" content="telephone=no" />
      <link
        rel="stylesheet"
        href="//web-static.textnow.com/messaging/prod/assets/css/messaging.cb81c7aa7ee6fe4.css"
        type="text/css"
      />
    </Head>
  );
};

export default Header;
