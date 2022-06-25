import React from "react";

export default function Quote() {
  return (
    <div id="quote" className="container quote">
      <div className="title">Quote</div>
      <div className="es-grid">
        {data.map((element) => (
          <div key={element.id} id={element.id} className="card">
            <div className="card-image-container">
              <img src={element.src} className="card-image" />
            </div>
            <div className="card-title">{element.title}</div>
            <div className="card-text">{element.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    id: "quote01",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/800px-Nietzsche187a.jpg",
    title: "Nietzsche",
    text: "Wer ein Warum hat, dem ist kein Wie zu schwer.",
  },
  {
    id: "quote02",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kant_gemaelde_3.jpg/250px-Kant_gemaelde_3.jpg",
    title: "Kant",
    text: "Habe Mut, dich deines eigenen Verstandes zu bedienen.",
  },
  {
    id: "quote03",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Heidegger_2_%281960%29.jpg/220px-Heidegger_2_%281960%29.jpg",
    title: "Heidegger",
    text: "Das Bedenklichste in unserer bedenklichen Zeit ist, dass wir noch nicht denken.",
  },
  {
    id: "quote04",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Jacques_derrida_pardonner_limpardonnable_et_limprescriptible_22.jpg/220px-Jacques_derrida_pardonner_limpardonnable_et_limprescriptible_22.jpg",
    title: "Derrida",
    text: "Die Verantwortung beginnt genau dann, wenn man keine Gewissheit mehr hat.",
  },
  {
    id: "quote05",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg/220px-Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg",
    title: "Dostoevsky",
    text: "Wie doch Freude und Glück einen Menschen schön machen!",
  },
  {
    id: "quote06",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Franz_Kafka%2C_1923.jpg/220px-Franz_Kafka%2C_1923.jpg",
    title: "Kafka",
    text: "Alles Reden ist sinnlos, wenn das Vertrauen fehlt.",
  },
];
