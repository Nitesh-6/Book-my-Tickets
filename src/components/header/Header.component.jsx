import "./header.style.css";
import Login from "../login/Login.component";
const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              BookMyTickets
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span>Welcome {props.user}</span>
              </a>
            </li>
            <li>
              <a href={<Login/>}>
                <span className="glyphicon glyphicon-log-in"></span> Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <img
                src={props.movies[0].BannerImage}
                alt={props.movies[0].Title}
                style={{width:"100%", height:"75vh"}}
              />
              <div className="carousel-caption">
                <h3>{props.movies[0].Title}</h3>
                <p>{props.movies[0].Director}</p>
              </div>
            </div>

            <div className="item">
            <img
                src={props.movies[1].BannerImage}
                alt={props.movies[1].Title}
                style={{width:"100%", height:"75vh"}}
              />
              <div className="carousel-caption">
                <h3>{props.movies[1].Title}</h3>
                <p>{props.movies[1].Director}</p>
              </div>
            </div>

            <div className="item">
            <img
                src={props.movies[2].BannerImage}
                alt={props.movies[2].Title}
                style={{width:"100%", height:"75vh"}}
              />
              <div className="carousel-caption">
                <h3>{props.movies[2].Title}</h3>
                <p>{props.movies[2].Director}</p>
              </div>
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
