import Head from "next/head";

export default function CanonicalUrl({ url }: { url: string }) {
    return (
        <Head>
            <link rel="canonical" href={url} key="canonical" />
        </Head>
    );
}