import Button from "./components/button";
import Image from "next/image";
import van from "./public/images/van.jpg";
export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <section className="flex justify-center font-bold text-7xl">
          <h1 className="w-5/6 text-center my-20">
            Mobilidade Inteligente com VanGo
          </h1>
        </section>

        <section className="flex justify-center flex-wrap mb-40">
          <Button
            label="Visualizar transportes disponíveis"
            href="/find"
            px="px-40"
          />
        </section>
        <hr></hr>
        <section className=" mt-20 gap-5 flex">
          <div className="flex-col basis-9/12">
            <h1 className="font-bold text-5xl mb-6">Sobre nós</h1>
            <p className="text-xl text-gray-500">
              VanGo é uma inovadora plataforma de transporte que busca
              solucionar os desafios enfrentados ao buscar meios de locomoção
              confiáveis, eficientes e acessíveis. Nosso objetivo principal é
              reduzir o tráfego nas estradas, mitigar os impactos ambientais
              relacionados à emissão de poluentes e proporcionar segurança tanto
              para os prestadores de serviços quanto para os passageiros.
            </p>
          </div>
          <div className="">
            <Image
              src={van}
              width={500}
              height={500}
              alt="Picture of the author"
              className="rounded-md"
            />
          </div>
        </section>
      </div>
    </>
  );
}
