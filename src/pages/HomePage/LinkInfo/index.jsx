import { StyleLinkInfo } from "./style";
import githubIcon from "../../../assets/githubIcon.png";

export const LinkInfo = ({ iconName, link, title, iconType="default"  }) => {
  var Icon = <span className="material-icons icon">{iconName}</span>

  if (iconType !== "default") {
    Icon = <img src={githubIcon} alt="GitHub" className="icon" />
  }

  return (
    <a href={link}>
      <StyleLinkInfo>
        {Icon}
        <p>{title}</p>
      </StyleLinkInfo>
    </a>
  );
};