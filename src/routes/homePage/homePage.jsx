import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores
            impedit veritatis corrupti dignissimos laudantium nam delectus rerum
            incidunt velit ipsam, atque repellat molestias optio, error
            voluptas! Eos, velit voluptas!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of Expreience</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
            </div><div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
