import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.js';
import Account from './pages/account/account.js';
import Savings from './pages/savings/savings.js';
import Invest from './pages/invest/invest.js';
import Sidebar from "./components/sidebar/sidebar";
import CreateTarget from "./pages/savings/popups/createtargets/createtarget";
import ViewTarget from "./pages/savings/popups/viewtargets/viewtargets";
import ViewInvestment from "./pages/invest/popup/view_investment";
import Rates from "./pages/account/modals/Rates";
import Contact from "./pages/account/modals/Contact";
import AccountSettings from './pages/account/modals/Accounts_settings';
import Story from './pages/account/modals/Story';
// import Activities from './pages/savings/popups/viewtargets/config_view/Activities';
import ActivitiesModal from './components/Activities/Activitiesmodal';
import Info from "./components/info/info";
import Withdraw from './components/withdraw/withdraw';
import NullTransaction from './components/nulltransaction/null_transaction';
import Creditcard from './components/creditCard/creditCard';
import ViewExploreTarget from './pages/savings/popups/viewtargets/exploreViewtargets';
import ViewExploreInvestment from './pages/invest/popup/exploreInvestments';

function AppMain() {

  const [sidebar, setSidebar] = useState(true);
  
  
  return (
    <div className='app_wrapper'>
        <div className='app_contain'>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
            <div className={sidebar ? "app_content" : "app_content_full"}>
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/savings/*" element={<Savings />} />
                <Route path="/investify/*" element={<Invest />} />
                <Route path="/account/*" element={<Account />} />
              </Routes>
            </div>
        </div>
          {/* <CreateTarget /> */}
          {/* <ViewTarget /> */}
        <Routes>
            <Route path="/savings/target/create_target/*" element={<CreateTarget />} />
            <Route path="/savings/target/view_target/:id/*" element={<ViewTarget />} />
            <Route path="/savings/target/info" element={<Info type={"target"} />} />
            <Route path="/savings/flexnaira/info" element={<Info type={"flexnaira"} />} />
            <Route path="/savings/target/completed/view_target/:id/*" element={<ViewTarget />} />
            <Route path="/savings/target/explore/view_target/:id/*" element={<ViewExploreTarget />} />
            <Route path="/savings/piggybank/withdraw" element={<Withdraw />} />
            <Route path="/savings/piggybank/transactions" element={<NullTransaction />} />
<Route path="/savings/flexnaira/transactions" element={<NullTransaction />} />

            <Route path="/investify/view_investment/:id/*" element={<ViewInvestment />} />
            <Route path="/investify/explore/view_investment/:id/*" element={<ViewExploreInvestment />} />
            {/* <Route path="/investify/explore/view_investment/:id/*" element={<ViewInvestment />} /> */}
            <Route path="/investify/completed/view_investment/:id/*" element={<ViewInvestment />} />
            <Route path="/investify/info" element={<Info type={"investify"} />} />

            <Route path="/account/rates" element={<Rates />} />
            <Route path="/account/contact" element={<Contact />} />
            <Route path="/account/account_settings" element={<AccountSettings />} />
            <Route path="/account/story" element={<Story />} />
            <Route path="/account/card" element={<Creditcard bg={"rgba(27,27,27,0.75)"} />} />
            <Route path="/account/activities" element={<ActivitiesModal />} />
            <Route path="/activities" element={<ActivitiesModal />} />
        </Routes>
    </div>
  );
}

export default AppMain;
