import React from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Layout from "./components/Layout";
import "./assets/scss/app-dark.scss";
import Pools from './pages/Pools.js'
// import Shares from './pages/Shares'
import AddLiquidity from './pages/AddLiquidity'
import Swap from './pages/Swap'
import CreatePool from './pages/CreatePool'
import Earn from './pages/Earn'
import Bond from './pages/Bond'
import Dao from './pages/DAO'

import PagesStarter from "./pages/Utility/pages-starter";
import PagesFaqs from "./pages/Utility/pages-faqs";
import ScrollToTop from "./components/Common/ScrollToTop"

const Base = () => {

    //const [connectingTokens, setConnectingTokens] = useState(false)
    //const [connectedTokens, setConnectedTokens] = useState(false)
  
    //const [notifyMessage,setNotifyMessage] = useState("")
    //const [notifyType,setNotifyType] = useState("dark")
    
    const changeStates = (props) => {
      //if (props === 'connectingTokens') {setConnectingTokens(true)}
      //if (props === 'notConnectingTokens') {setConnectingTokens(false)}
      //if (props === 'connectedTokens') {setConnectedTokens(true)}
      //if (props === 'notConnectedTokens') {setConnectedTokens(false)}
    }

    const changeNotification = (message, type) => {
        //setNotifyMessage(message)
        //setNotifyType(type)
    }

    const tempDisable = true

    return (
        <>
        <Router>
            <Layout
                changeStates={changeStates}
                changeNotification={changeNotification}
                //connectedTokens={connectedTokens}
                //connectingTokens={connectingTokens}
            />
            {/*}
            <Notification
                type={notifyType}
                message={notifyMessage}
            />
            */}
            <div className="wrapper">
                <ScrollToTop />
                {tempDisable !== true &&
                    <Switch>
                        <Route path="/" exact component={Pools}/>
                        <Route path="/pools"><Pools/></Route>
                        {/* <Route path="/share" exact component={Shares}/>*/}
                        <Route path="/pool/stake" exact component={AddLiquidity}/>
                        <Route path="/pool/swap" exact component={Swap}/>
                        <Route path="/pool/create" exact component={CreatePool}/>
                        <Route path="/earn"><Earn/></Route>
                        <Route path="/bond"><Bond/></Route>
                        <Route path="/dao" exact component={Dao} />

                        {/*Help*/}
                        <Route path="/start" exact component={PagesStarter}/>
                        <Route path="/faq" exact component={PagesFaqs}/>
                    </Switch>
                }
                {tempDisable === true &&
                <>
                    <div className='mt-5'>...</div>
                    <div className='mt-5'>...</div>
                    <h3 className='mt-5 text-center'>DApp temporarily disabled for smart contract upgrades</h3>
                </>
                }
            </div>
        </Router>
        </>
    );
};

export default Base;
