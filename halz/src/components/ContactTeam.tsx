export default function ContactTeam() {
  return (
    <section id="contato" className="section contact-team">
      {/* CONTATO */}
      <div className="contact-box">
        <h2>Fale Conosco</h2>

        <p className="contact-desc">
          Vamos transformar sua ideia em uma solução digital.
        </p>

        <div className="email-icon">📧</div>

        <a href="mailto:halzcomunicacoes@gmail.com" className="btn-contact">
          Entrar em contato
        </a>

        <p className="email">halzcomunicacoes@gmail.com</p>
      </div>

      {/* EQUIPE */}
      <div className="team-box">
        <h3>Nossa Equipe</h3>

        <div className="team">
          {/* JULIANE */}
          <div className="member">
            <h4>Juliane</h4>

            <div className="social-buttons">
              <a href="https://linkedin.com" target="_blank">
                <div className="social linkedin">💼</div>
              </a>

              <a href="https://github.com" target="_blank">
                <div className="social github">🐙</div>
              </a>
            </div>
          </div>

          {/* VITO */}
          <div className="member">
            <h4>Vito</h4>

            <div className="social-buttons">
              <a href="https://linkedin.com" target="_blank">
                <div className="social linkedin">💼</div>
              </a>

              <a href="https://github.com" target="_blank">
                <div className="social github">🐙</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
