const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// creo una funzione per creare la card di un solo membro nel DOM
const createMemberCard = (member) => {
  // scrittura in html
  const card = `<div class="col-12 col-md-6 col-lg-4 bg-dark text-white">
                    <div id="member-card" class="row">
                        <div id="picture" class="col-4 p-0">
                            <img src="./${member.img}" class="img-fluid">
                        </div>
                        <div id="info" class="col-8" >
                            <h4 id="name">${member.name}</h4>
                            <div id="role">${member.role}</div>
                            <div id="email" class="text-primary">${member.email}</div>
                        </div>
                    </div>
                </div>`;
  // che inserisco all'interno con .innerHTML
  document.getElementById("members").innerHTML += card;
};

//uso un FOR con la funzione createMemberCard per inserire tutti gli oggetti presenti dentro l'array teamMembers nel DOM
for(let i=0; i<teamMembers.length; i++){
  createMemberCard(teamMembers[i]);
}