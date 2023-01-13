const artisteData = [
  {
    name: "Wizkid (Big wiz)",
    proffesionalism: "Nigerian male artiste",
    img: "images/wizkid img.jpg",
    description:
      "Wizkid being the most famous musician in Nigeria  didn't just woke up and became famous, he started  from the scratch and now popularly known as BigWiz  worldwide.",
  },
  {
    name: " Davido ",
    proffesionalism: "Nigerian male artiste",
    img: "images/davido img.jpg",
    description:
      " Davido born with a silver spoon but still decided to make his own money through his music career. Having a great vocals and friendly acts made his fans love him so much.",
  },
  {
    name: "Ayra Starr",
    proffesionalism: "Nigerian female artiste",
    img: "images/ayra img.jpg",
    description:
      "A rising star who began her music career at age 19 is now known worldwide and has sang with famous musicians worldwide. Her vocals are just too good.",
  },
  {
    name: "Omah Lay",
    proffesionalism: "Nigerian male artiste",
    img: "images/omah img.jpg",
    description:
      "Omah lay a young artiste who drops good lyrics for his fans but just doesn't sing regularly yet loved by his fans.",
  },
  {
    name: "Simi",
    proffesionalism: "Nigerian female artiste",
    img: "images/simi stage.jpg",
    description:
      "Simi a well-talented young lady sings with passion whenever she's on stage and makes sure her fans got loads of fun.",
  },
  {
    name: "Burna Boy",
    proffesionalism: "Nigerian male artiste",
    img: "images/Burna-Boy.jpg",
    description:
      " Burna boy popularly known as African Giant sings with  more than enough energy and makes sure there is no room for boredom.",
  },
];
function allArtistesCards(artiste) {
  const container = document.querySelector("#desktop_artistes");
  const artistesCards = container.querySelectorAll(".col-6");

  for (let i = 0; i < artiste.length; i++) {
    const artisteData = artiste[i];
    const artisteCard = artistesCards[i];
    const img = artisteCard.querySelector("img");
    img.src = artisteData.img;
    img.alt = artisteData.name;
    const content = artisteCard.querySelector("p");
    content.innerHTML = `
        <span class="name">${artisteData.name}</span>
        <br>
        <span class="proffesionalism">${artisteData.proffesionalism}</span>
        <br> ${artisteData.description}
      `;
  }
}

allArtistesCards(artisteData);
