import { useState, useEffect } from "react";
import { addresses, TOKEN_DECIMALS } from "../../constants";
import { Link, SvgIcon, Popper, Button, Paper, Typography, Divider, Box, Fade, Slide } from "@material-ui/core";
import { ReactComponent as InfoIcon } from "../../assets/icons/info-fill.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrow-up.svg";

import { ReactComponent as delTokenImg } from "../../assets/tokens/DM.svg";
import { ReactComponent as sdelTokenImg } from "../../assets/tokens/sDM.svg";

import "./delmenu.scss";
import { busd } from "src/helpers/AllBonds";
import { useWeb3Context } from "../../hooks/web3Context";

import DelImg from "src/assets/tokens/DM1.svg";
import SDelImg from "src/assets/tokens/SDM1.svg";

const addTokenToWallet = (tokenSymbol, tokenAddress) => async () => {
  if (window.ethereum) {
    const host = window.location.origin;
    // NOTE (appleseed): 33T token defaults to sDM logo since we don't have a 33T logo yet
    let tokenPath;
    // if (tokenSymbol === "DM") {

    // } ? SapImg : SSapImg;
    switch (tokenSymbol) {
      case "DM":
        tokenPath = DelImg;
        break;
      default:
        tokenPath = SDelImg;
    }
    const imageURL = `${host}/${tokenPath}`;

    try {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: TOKEN_DECIMALS,
            image: imageURL,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

function DelMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isEthereumAPIAvailable = window.ethereum;
  const { chainID } = useWeb3Context();

  const networkID = chainID;

  const SDM_ADDRESS = addresses[networkID].SDM_ADDRESS;
  const DM_ADDRESS = addresses[networkID].DM_ADDRESS;


  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = "del-popper";
  const busdAddress = busd.getAddressForReserve(networkID);
  return (
    <Box
      component="div"
      onMouseEnter={e => handleClick(e)}
      onMouseLeave={e => handleClick(e)}
      id="del-menu-button-hover"
    >
      <Button id="del-menu-button" size="large" variant="contained" color="secondary" title="DM" aria-describedby={id}>
        <SvgIcon component={InfoIcon} color="primary" />
        <Typography>DM</Typography>
      </Button>

      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start" transition>
        {({ TransitionProps }) => {
          return (
            <Fade {...TransitionProps} timeout={100}>
              <Paper className="del-menu" elevation={1}>
                <Box component="div" className="buy-tokens">
                  <Link
                    href={`https://pancakeswap.finance/swap?inputCurrency=${busdAddress}&outputCurrency=${DM_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="large" variant="contained" color="secondary" fullWidth>
                      <Typography align="left">
                        Buy on PancakeSwap <SvgIcon component={ArrowUpIcon} htmlColor="#A3A3A3" />
                      </Typography>
                    </Button>
                  </Link>
                </Box>

                {isEthereumAPIAvailable ? (
                  <Box className="add-tokens">
                    <Divider color="secondary" />
                    <p>ADD TOKEN TO WALLET</p>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                      <Button variant="contained" color="secondary" onClick={addTokenToWallet("DM", DM_ADDRESS)}>
                        <SvgIcon
                          component={delTokenImg}
                          viewBox="0 0 150 150"
                          style={{ height: "25px", width: "25px" }}
                        />
                        <Typography variant="body1">DM</Typography>
                      </Button>
                      <Button variant="contained" color="secondary" onClick={addTokenToWallet("sDM", SDM_ADDRESS)}>
                        <SvgIcon
                          component={sdelTokenImg}
                          viewBox="0 0 150 150"
                          style={{ height: "25px", width: "25px" }}
                        />
                        <Typography variant="body1">sDM</Typography>
                      </Button>
                    </Box>
                  </Box>
                ) : null}
              </Paper>
            </Fade>
          );
        }}
      </Popper>
    </Box>
  );
}

export default DelMenu;
