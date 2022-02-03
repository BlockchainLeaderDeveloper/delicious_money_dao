import { ReactComponent as ForumIcon } from "../../assets/icons/forum.svg";
import { ReactComponent as GovIcon } from "../../assets/icons/governance.svg";
import { ReactComponent as DocsIcon } from "../../assets/icons/docs.svg";
import { ReactComponent as PancakeSwapIcon } from "../../assets/icons/pancakeswap.svg";
import { ReactComponent as FeedbackIcon } from "../../assets/icons/feedback.svg";
import { SvgIcon } from "@material-ui/core";
import { AccountBalanceOutlined, MonetizationOnOutlined } from "@material-ui/icons";

const externalUrls = [
  {
    title: "Buy on Pancakeswap",
    url: "https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xAf6e4fdB1e87FBd39ac5F78489B229D205B337a6",
    icon: <SvgIcon viewBox="0 0 161 161" color="primary" component={PancakeSwapIcon} />,
  },
  // {
  //   title: "Governance",
  //   url: "https://snapshot.org/#/sapphire.finance",
  //   icon: <SvgIcon color="primary" component={GovIcon} />,
  // },
  // {
  //   title: "Docs",
  //   url: "https://docs.sapphiredao.finance",
  //   icon: <SvgIcon color="primary" component={DocsIcon} />,
  // },
];

export default externalUrls;
