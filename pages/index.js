import Head from "next/head"
import Feed from "../components/Feed"
import Header from "../components/Header"
import Modal from "../components/Modal"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram 2.0</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  )
}
