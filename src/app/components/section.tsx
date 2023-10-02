import React from "react";

interface Content {
  content: string;
}
const Section = (props: Content) => {
  return (
    <section className="max-w-4xl mx-auto mt-20">
      <p className="text-justify">{props.content}</p>
    </section>
  );
};

export default Section;
