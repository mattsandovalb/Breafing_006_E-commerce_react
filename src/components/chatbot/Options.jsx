const Options = (props) => {
  const options = [
    {
      text: "Hacer Pedido",
      handler: () => {
        window.location = "https://categories.com";
      },
      id: 1,
    },
    {
      text: "Atención al cliente",
      handler: () => {
        console.log("Clicked CLIENTE");
      },
      id: 2,
    },
    {
      text: "Ayuda",
      handler: () => {
        console.log("Clicked AYUDA");
      },
      id: 3,
    },
  ];

  const ButtonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container"> {ButtonsMarkup} </div>;
};

export default Options;
