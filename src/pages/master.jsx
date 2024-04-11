import React from "react";

export default function Master() {
  return (
    <div className="master">
      <p>No Cierres esta ventana hasta terminar la Master Class</p>
      <h2>3 Claves para ser un Trader Rentable con OTM Trading</h2>
      <h4>
        Aprende la importancia de encontrar una ventaja en los mercados para
        tener éxito en tu operativa de Trading.
      </h4>
      <div className="master--video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/286nPKwDavE"
          title="Embedded Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="master--buttons">
        <button>
          <a href="https://bit.ly/CALENDARIOREUNION" target="_blank">
            AGENDA REUNIÓN
          </a>
        </button>
        <button>
          <a href="https://www.otmtrading.com" target="_blank">
            ADQUIERE OTM
          </a>
        </button>
      </div>
    </div>
  );
}
