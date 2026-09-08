import Image from "next/image";

const items = [
  ["/play/play-01.svg", "Paper study", "Typography"], ["/play/play-02.svg", "Light / shadow", "Photography"],
  ["/play/play-03.svg", "Shape notes", "Sketchbook"], ["/play/play-04.svg", "Modular forms", "Prototype"],
  ["/play/play-05.svg", "Daily arrangement", "Objects"], ["/play/play-06.svg", "Type fragment", "Experiment"]
];
export default function PlayPage() {
  return <div className="page-shell play-page"><header className="page-title"><p className="eyebrow">Studies, scraps + side paths</p><h1>PLAY</h1><p className="intro">A loose collection of things made while looking, testing and learning.</p></header>
    <section className="play-grid">{items.map(([src, title, category], i) => <figure key={src} className={`play-item play-${i + 1}`}><div><Image src={src} alt={title} fill sizes="(max-width: 700px) 100vw, 40vw"/></div><figcaption>{title}<span>{category}</span></figcaption></figure>)}</section>
  </div>;
}
