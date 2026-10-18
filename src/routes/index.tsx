import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { EVENTOS, GOBIERNOS, TEMAS, type Gobierno, type Tema } from "@/data/eventos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Archivo de Políticas Públicas · Chile 1990–2026" },
      {
        name: "description",
        content:
          "Línea de tiempo de los debates de políticas públicas en Chile desde el retorno a la democracia hasta 2026.",
      },
      { property: "og:title", content: "Archivo de Políticas Públicas · Chile 1990–2026" },
      {
        property: "og:description",
        content: "Hitos legislativos y debates públicos de Chile, por tema y gobierno, con fuentes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const fmt = (f: string) =>
  new Date(f + "T12:00:00").toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

function Index() {
  const [tema, setTema] = useState<Tema | null>(null);
  const [gob, setGob] = useState<Gobierno | null>(null);
  const [q, setQ] = useState("");

  const lista = useMemo(() => {
    const s = q.trim().toLowerCase();
    return [...EVENTOS]
      .sort((a, b) => a.fecha.localeCompare(b.fecha))
      .filter((e) => (!tema || e.tema === tema) && (!gob || e.gobierno === gob))
      .filter((e) => !s || (e.titulo + " " + e.descripcion).toLowerCase().includes(s));
  }, [tema, gob, q]);

  let ultimoAnio = "";

  return (
    <main className="mx-auto max-w-4xl px-5 py-12 md:py-20">
      <header className="border-b-2 border-rule pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Archivo · 1990 — 2026
        </p>
        <h1 className="mt-4 text-5xl font-semibold leading-[0.95] md:text-7xl">
          Chile en debate
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Hitos de la discusión de políticas públicas desde el retorno a la democracia, ordenados
          por fecha, tema y gobierno.
        </p>
      </header>

      <section className="space-y-4 border-b border-border py-6">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar evento…"
          className="w-full border-b border-rule/40 bg-transparent py-2 text-lg outline-none focus:border-primary"
        />
        <div className="flex flex-wrap gap-2">
          {TEMAS.map((t) => (
            <button key={t} onClick={() => setTema(tema === t ? null : t)} className={tema === t ? "chip chip-active" : "chip"}>
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {GOBIERNOS.map((g) => (
            <button key={g.nombre} onClick={() => setGob(gob === g.nombre ? null : g.nombre)} className={gob === g.nombre ? "chip chip-active" : "chip"}>
              {g.nombre} <span className="opacity-60">{g.periodo}</span>
            </button>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {lista.length} {lista.length === 1 ? "evento" : "eventos"}
        </p>
      </section>

      <ol className="mt-4">
        {lista.map((e) => {
          const anio = e.fecha.slice(0, 4);
          const nuevo = anio !== ultimoAnio;
          ultimoAnio = anio;
          return (
            <li key={e.fecha + e.titulo} className="grid grid-cols-[4.5rem_1fr] gap-4 md:grid-cols-[7rem_1fr]">
              <div className="pt-6 font-display text-2xl font-semibold text-primary md:text-4xl">
                {nuevo ? anio : ""}
              </div>
              <article className="border-l border-rule/30 py-6 pl-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <time>{fmt(e.fecha)}</time>
                  <span className="text-primary">{e.tema}</span>
                  <span>Gob. {e.gobierno}</span>
                </div>
                <h2 className="mt-2 text-2xl font-semibold leading-tight">{e.titulo}</h2>
                <p className="mt-2 text-muted-foreground">{e.descripcion}</p>
                {e.fuentes.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {e.fuentes.map((f) => (
                      <li key={f.url}>
                        <a href={f.url} target="_blank" rel="noreferrer" className="underline decoration-primary underline-offset-4 hover:text-primary">
                          {f.titulo} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          );
        })}
      </ol>
      {lista.length === 0 && <p className="py-12 text-center text-muted-foreground">Sin resultados.</p>}

      <footer className="mt-16 border-t-2 border-rule pt-6 font-mono text-xs text-muted-foreground">
        Para agregar eventos, edita <code>src/data/eventos.ts</code> en el repositorio.
      </footer>
    </main>
  );
}
