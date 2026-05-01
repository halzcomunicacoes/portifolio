import { Monitor, Workflow, Database, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Desenvolvimento Web",
      desc: "Criação de sites modernos, responsivos e adaptados para diferentes dispositivos, com foco em performance e boa experiência do usuário.",
      icon: <Monitor />,
    },
    {
      number: "02",
      title: "Soluções e Integrações Microsoft",
      desc: "Desenvolvimento de aplicações internas utilizando ferramentas como Microsoft Power Apps e automações com Microsoft Power Automate, integrando processos e otimizando rotinas.",
      icon: <Workflow />,
    },
    {
      number: "03",
      title: "Sistemas de Gestão Simples",
      desc: "Desenvolvimento de sistemas personalizados para controle de clientes, finanças e processos internos de pequenos negócios.",
      icon: <Database />,
    },
    {
      number: "04",
      title: "Automações de Processos",
      desc: "Criação de soluções para automatizar tarefas repetitivas, aumentando a produtividade e reduzindo erros operacionais.",
      icon: <Zap />,
    },
  ];

  return (
    <section id="servicos" className="section">
      <h2>O que fazemos</h2>

      <div className="cards">
        {services.map((item, i) => (
          <div key={i} className="custom-card">
            <div className="circle">
              <span>{item.number}</span>
            </div>

            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
