import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>{`
            .page {
              height: 100vh;
              width: 100vw;
            }
          `}</style>
        </Head>
        <body>
          <Main className="page h-screen w-screen" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
