import React from "react";
import Section from "../../components/Section";

function Index() {
  return (
    <article className="flex grow flex-col items-center justify-center">
      <div className="h-[10vh]"></div>
      <div className="max-w-6xl p-12">
        <h1 className="font-serif text-5xl sm:text-8xl uppercase">Cookie-Richtlinie</h1>

        <Section title={"1. Was ist ein Cookie?"}>
          <p>
            Ein Cookie ist eine kleine Datei aus Buchstaben und Zahlen, die auf
            den Computer heruntergeladen wird, wenn Nutzer auf bestimmte
            Websites zugreifen. In der Regel ermöglichen es Cookies einer
            Website, den Computer eines Nutzers zu erkennen. <br /> Das
            Wichtigste, was man über die von Wix platzierten Cookies wissen
            muss, ist, dass sie unsere Website etwas nutzerfreundlicher machen,
            z. B. durch die Speicherung von Website-Präferenzen und
            Spracheinstellungen.
          </p>
        </Section>

        <Section title={"2. Warum verwenden wir Cookies?"}>
          <p>
            Wir können Cookies und ähnliche Technologien für unterschiedliche
            Zwecke verwenden, beispielsweise:
          </p>
          <ol className="ml-12 list-roman">
            <li>
              aus Sicherheitsgründen und zum Schutz vor Betrug sowie um
              Cyber-Angriffe zu erkennen und zu verhindern;
            </li>
            <li>um ausgewählte Dienste zur Verfügung stellen zu können;</li>
            <li>
              um die Performance, den Betrieb und die Wirksamkeit unserer
              Dienste zu überwachen und zu analysieren und
            </li>
            <li>um das Nutzererlebnis zu verbessern.</li>
          </ol>
        </Section>


        <Section title={"3. Optionen"}>
          <p>
            Um mehr über Cookies zu erfahren, u. a. wie man erkennt, welche
            Cookies gesetzt wurden und wie man sie verwaltet, löscht und
            blockiert, empfehlen wir einen Besuch auf{" "}
            <a
              href="https://www.aboutcookies.org"
              target="_blank"
              rel="noreferrer"
            >
              www.aboutcookies.org
            </a>
            <br />
            <br />
            Alternativ ist es auch möglich, dass der Browser Cookies
            grundsätzlich blockiert. Dazu müssen Nutzer die Cookie-Einstellungen
            im Browser entsprechend ändern. Diese Einstellungen befinden sich
            normalerweise im Menü des Browsers unter „Optionen“ oder
            „Präferenzen“. Das Löschen unserer Cookies oder die Deaktivierung
            zukünftiger Cookies oder Tracking-Technologien kann zur Folge haben,
            dass bestimmte Bereiche oder Funktionen unserer Dienste nicht mehr
            zur Verfügung stehen oder das Nutzererlebnis anderweitig
            beeinträchtigt wird. Die folgenden Links können nützlich sein, oder
            alternativ die Option „Hilfe“ im Browser. <br /> <br />
            <ul>
              <li>
                <a
                  href="https://support.mozilla.org/de/kb/cookies-informationen-websites-auf-ihrem-computer#w_cookie-einstellungen"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-primary border-opacity-0 transition duration-300 hover:border-opacity-100"
                >
                  Cookie-Einstellungen in Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-primary border-opacity-0 transition duration-300 hover:border-opacity-100"
                >
                  Cookie-Einstellungen im Internet Explorer
                </a>
              </li>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=DE&co=GENIE.Platform%3DDesktop&oco=1"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-primary border-opacity-0 transition duration-300 hover:border-opacity-100"
                >
                  Cookie-Einstellungen in Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/de-de/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-primary border-opacity-0 transition duration-300 hover:border-opacity-100"
                >
                  Cookie-Einstellungen in Safari (OS X)
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/de-de/HT201265"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-primary border-opacity-0 transition duration-300 hover:border-opacity-100"
                >
                  Cookie-Einstellungen in Safari (iOS)
                </a>
              </li>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=DE&co=GENIE.Platform%3DAndroid&oco=1"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-primary border-opacity-0 transition duration-300 hover:border-opacity-100"
                >
                  Cookie-Einstellungen in Android
                </a>
              </li>
            </ul>
            <br /> <br />
            Um die Verwendung eigener Daten durch Google Analytics auf allen
            Websites abzulehnen und zu verhindern, bestehen die folgenden
            Anweisungen:{" "}
            <a href="https://tools.google.com/dlpage/gaoptout">
              https://tools.google.com/dlpage/gaoptout
            </a>
            . <br />
            <br /> Wir können diese Cookie-Richtlinie aktualisieren. Wir bitten
            Nutzer, diese Seite regelmäßig aufzurufen, um sich über den
            aktuellen Stand in Bezug auf die Verwendung von Cookies auf dem
            Laufenden zu halten.
          </p>
        </Section>
      </div>
    </article>
  );
}

export default Index;
