import Image from "next/image";

export default function AboutPage() {
  return <div className="page-shell about-page"><header className="page-title"><p className="eyebrow">Hello, it’s nice to meet you</p><h1>ABOUT<br/>AILEY</h1></header>
    <section className="about-grid"><div className="portrait"><Image src="/about/portrait-placeholder.svg" alt="Portrait placeholder for Ailey Weng" fill sizes="(max-width: 700px) 100vw, 42vw"/></div>
      <div className="bio"><p>I’m Ailey, a design student at Carnegie Mellon University interested in how thoughtful form can make complex ideas feel clear, tangible and human.</p><p>My practice moves between objects, graphics, interactions and systems. I enjoy close observation, making with my hands and finding the unexpected connection that gives a project its character.</p><p className="note">This biography and portrait are ready to be replaced with your own.</p></div>
    </section>
    <section className="about-info"><dl><div><dt>Studying</dt><dd>Design at Carnegie Mellon University</dd></div><div><dt>Based</dt><dd>Pittsburgh</dd></div><div><dt>Exploring</dt><dd>Objects, graphics, interactions and systems</dd></div></dl>
      <div className="contact"><a href="mailto:hello@aileyweng.com">Email ↗</a><a href="https://instagram.com" target="_blank">Instagram ↗</a><a href="https://linkedin.com" target="_blank">LinkedIn ↗</a></div></section>
  </div>;
}
