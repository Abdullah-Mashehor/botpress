
import Image from "next/image";
import Chatbot from "./Chatbot";

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-screen">


        <div className="flex h-screen">
        <Image
                src="/chat.jpeg"
                alt="UTM"
                layout="fill" // Image fills its parent container
                quality={100} // Image quality adjustment
              />


        <Chatbot />
        </div>
      </main>
    </>
  );
}
