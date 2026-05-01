const services = [
  {
    title: "Desenvolvimento Web",
    desc: "Criação de sites modernos, responsivos e adaptados para diferentes dispositivos, com foco em performance e boa experiência do usuário."
  },
  {
    title: "Soluções e Integrações Microsoft",
    desc: "Desenvolvimento de aplicações internas utilizando ferramentas como Microsoft Power Apps e automações com Microsoft Power Automate, integrando processos e otimizando rotinas."
  },
  {
    title: "Sistemas de Gestão Simples",
    desc: "Desenvolvimento de sistemas personalizados para controle de clientes, finanças e processos internos de pequenos negócios."
  },
  {
    title: "Automações de Processos",
    desc: "Criação de soluções para automatizar tarefas repetitivas, aumentando a produtividade e reduzindo erros operacionais."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="section">
      <h2>O que fazemos</h2>

      <div className="cards">
        {services.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}