import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function UserMenu(props) {
  return (
    <>
      <Menu
        anchorEl={props.anchorElUser}
        id="account-menu"
        open={Boolean(props.anchorElUser)}
        onClose={props.handleCloseUserMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            // filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="User-Menu">
          {[
            <div
              key={"umenu1"}
              className="First-Menu-Item d-flex justify-content-between "
            >
              <h5>Account</h5>
              <Link
                onClick={() => props.handleCloseUserMenu("Logout")}
                to="/"
                className="btn btn-primary text-light py-2 px-3"
              >
                Logout
              </Link>
            </div>,
            <MenuItem
              key="menu2"
              onClick={props.handleCloseUserMenu}
              className="text-primary"
              component={Link}
              to={"/my-bank-accounts"}
            >
              <p className="UserMenu-Item-Text">Account Summary</p>
            </MenuItem>,
            <MenuItem
              key="menu3"
              onClick={props.handleCloseUserMenu}
              className="text-primary"
              component={Link}
              to={"/profile"}
            >
              <p className="UserMenu-Item-Text">My Profile</p>
            </MenuItem>,
            <MenuItem
              key="menu4"
              onClick={props.handleCloseUserMenu}
              className="text-primary"
              component={Link}
              to={"/change-password"}
            >
              <p className="UserMenu-Item-Text">Change Password</p>
            </MenuItem>,
            <MenuItem
              key="menu6"
              onClick={props.handleCloseUserMenu}
              className="text-primary"
              component={Link}
              to={"/my-recipient"}
            >
              <p className="UserMenu-Item-Text">My Receivers</p>
            </MenuItem>,
            <MenuItem
              key="menu7"
              onClick={props.handleCloseUserMenu}
              className="text-primary"
              component={Link}
              to={"/my-transaction"}
            >
              <p className="UserMenu-Item-Text">Transaction Summary</p>
            </MenuItem>,
            <MenuItem
              key="menu9"
              onClick={props.handleCloseUserMenu}
              className="text-primary"
              component={Link}
              to={"/kyc"}
            >
              <p className="UserMenu-Item-Text">Kyc Update</p>
            </MenuItem>,
            // <MenuItem
            //   key="menu8"
            //   onClick={props.handleCloseUserMenu}
            //   className="text-primary"
            //   component={Link}
            //   to={"/feedback"}
            // >
            //   <p className="UserMenu-Item-Text">Feedback</p>
            // </MenuItem>,
            // <MenuItem
            //   key="menu9"
            //   onClick={props.handleCloseUserMenu}
            //   className="text-primary"
            //   component={Link}
            //   to={"/refer"}
            // >
            //   <p className="UserMenu-Item-Text">Refer</p>
            // </MenuItem>,
          ]}
        </div>
      </Menu>
    </>
  );
}
