export default function ContactTeam() {
  return (
    <section id="contato" className="section contact-team">

  <div className="contact-box">
    <h2>Fale Conosco</h2>

    <button className="btn-contact">Entrar em contato</button>

    <p className="email">halzcomunicacoes@gmail.com</p>
  </div>

  <div className="team-box">
    <h3>Nossa Equipe</h3>

    <div className="team">
      <div className="member">
        <h4>Juliane</h4>
        <div className="links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>

      <div className="member">
        <h4>Vito</h4>
        <div className="links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </div>
  </div>

</section>
  );
}