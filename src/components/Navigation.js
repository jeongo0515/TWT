import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => (
<nav>
    <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        {/* home class */}
        <li>  
            <Link to="/" style={{ marginRight: 10 }}>
                <FontAwesomeIcon icon={faUpload} color={"#04AAFF"} size="2x" />
                <div style={{ marginTop: 10, marginRight:18 }}>
            {"게시물"}
          </div>
            </Link>
        </li>

        {/* profile class */}
        <li> 
        <Link
          to="/profile"
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
          <span style={{ marginTop: 15 }}>
            {userObj.displayName
              ? `${userObj.displayName}의 계정설정`
              : "Profile"}
          </span>
        </Link>
        </li>

    </ul>
</nav>
);
export default Navigation;