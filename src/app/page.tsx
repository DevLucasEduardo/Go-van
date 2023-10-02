import Button from "./components/button";
import Section from "./components/section";

export default function Home() {
  return (
    <>
      <Section content="VanGo é uma inovadora plataforma de transporte que busca solucionar os desafios enfrentados ao buscar meios de locomoção confiáveis, eficientes e acessíveis. Nosso objetivo principal é reduzir o tráfego nas estradas, mitigar os impactos ambientais relacionados à emissão de poluentes e proporcionar segurança tanto para os prestadores de serviços quanto para os passageiros." />

      <section className="flex justify-center flex-wrap max-w-4xl mx-auto pt-28">
        <Button label="Visualizar transportes disponíveis" href="/find" />
      </section>

      <Section
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ullam
          officia modi possimus maiores, ipsam obcaecati laboriosam rerum
          veniam. Optio officia ipsa magnam tempora libero voluptate cumque
          similique cum maxime.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa neque ipsa ab voluptatem! Voluptatum tempora in suscipit ea tenetur repudiandae sint blanditiis ullam. Totam assumenda temporibus praesentium ad quidem."
      />
    </>
  );
}
