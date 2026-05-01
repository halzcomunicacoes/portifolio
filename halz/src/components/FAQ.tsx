import { useState } from "react";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index: any) => {
    setActive(active === index ? null : index);
  };

  const faqs = [
    {
      question: "Como surgiu a Halz?",
      answer: `A Halz surgiu da iniciativa de dois desenvolvedores estagiários em busca de mais experiência prática no mercado de tecnologia.  
Com isso, uniram forças para criar soluções que gerem aprendizado e tragam melhorias reais para empresas e pessoas.`,
    },
    {
      question: "Que tipo de projetos vocês desenvolvem?",
      answer: `Trabalhamos com criação de sites, landing pages, sistemas web simples, automações e aplicações internas para pequenas empresas.`,
    },
    {
      question: "Vocês ajudam com ideias ou só desenvolvem?",
      answer: `Também ajudamos na definição da melhor solução, sugerindo melhorias e ideias com base na sua necessidade.`,
    },
  ];

  return (
    <section className="section faq">
      <h2>Perguntas Frequentes</h2>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="icon">{active === index ? "−" : "+"}</span>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
