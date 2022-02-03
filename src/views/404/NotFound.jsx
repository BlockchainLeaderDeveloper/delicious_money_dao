import SapIcon from "../../assets/icons/sap-nav-header.svg";
import "./notfound.scss";

export default function NotFound() {
  return (
    <div id="not-found">
      <div className="not-found-header">
        <a href="/" target="_blank">
          <img className="branding-header-icon" src={SapIcon} alt="DMDAO" />
        </a>

        <h2 style={{ textAlign: "center" }}>Page not found</h2>
      </div>
    </div>
  );
}
