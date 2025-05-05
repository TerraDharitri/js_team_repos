import {DappProvider} from "@terradharitri/sdk-dapp/dist/wrappers";
import {
    NotificationModal,
    SignTransactionsModals,
    TransactionsToastList
} from "@terradharitri/sdk-dapp/dist/UI";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {HomePage} from "pages/HomePage/HomePage";
import {UnlockPage} from "pages/UnlockPage/UnlockPage";
import {CreateOfferPage} from "pages/CreateOfferPage/CreateOfferPage";
import { DeploymentPage } from 'pages/DeploymentPage/DeploymentPage';
import {NavBar} from "components/NavBar";
import {ENVIRONMENT, walletConnectV2ProjectId} from "config";

function App() {

    return (
        <DappProvider
            environment={ENVIRONMENT}
            customNetworkConfig={{
                name: "customConfig",
                walletConnectV2ProjectId
            }}
        >
            <Router>
                <TransactionsToastList  />
                <NotificationModal />
                <SignTransactionsModals />

                <NavBar />
                <div className="bg-neutral-100">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/unlock" element={<UnlockPage />} />
                        <Route path="/create" element={<CreateOfferPage />} />
                        <Route path="/deploy" element={<DeploymentPage />} />
                    </Routes>
                </div>
            </Router>
        </DappProvider>
    )
}

export default App