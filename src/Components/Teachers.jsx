import Card2 from "./Card2";
function Teachers() {
  return (
    <div className="pad" id="teacher">
      <h1 className="text-center title">TEACHERS</h1>
      <h2 className="text-center sub-title">Meet Our Teachers</h2>
      <div className="flex-container">
        <div className="flex-item">
          <Card2
            img="https://media.licdn.com/dms/image/v2/D4D35AQGBWNAKesNcPw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1725422513522?e=1739880000&v=beta&t=q2kQ5-u1yP8or9C2LLzhWsn_qE3p6tv2mp-l0lMuhqE"
            name="MR Yakubu Adeshola"
          />
        </div>
        <div className="flex-item">
          <Card2
            img="https://i.ibb.co/G3tzDh9B/7a49887a-93a1-45c7-bad7-f93abb959792.jpg"
            name="MR TUNDE"
          />
        </div>
        <div className="flex-item">
          <Card2
            img="https://media.licdn.com/dms/image/v2/D4D03AQHaUvQVvbOg2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668854393551?e=1744848000&v=beta&t=Pf1O09wkWhRPEyvyPcc3t-W9Mw-LhJ_3heWjmCfroao"
            name="MR Rasheed Adeyemo"
          />
        </div>
        <div className="flex-item">
          <Card2
            img="https://i.ibb.co/DHpKbch9/ecf7a280-c597-45a9-bc53-8371de992c20.jpg"
            name="MR Damilola"
          />
        </div>
      </div>
    </div>
  );
}

export default Teachers;
