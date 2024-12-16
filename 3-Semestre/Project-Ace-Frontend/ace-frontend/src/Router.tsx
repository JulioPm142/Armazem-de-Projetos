import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginADM from "./pages/login";
import CadADM from "./pages/cadADM";
import CtrADM from "./pages/ctrADM";
import CtrADM2 from "./pages/ctrADM2";
import CtrADM3 from "./pages/ctrADM3";
import CtrFIN from "./pages/ctrFIN";
import CtrFIN2 from "./pages/ctrFIN2";
import CtrFIN3 from "./pages/ctrFIN3";
import CadCLI from "./pages/cadCLI";
import RelatorioMenu from "./pages/relatoriomenu";
import RelatorioPag from "./pages/relatoriomenu/relatoriopag";
import RelatorioCre from "./pages/relatoriomenu/relatoriocre";
import RelatorioVen from "./pages/relatoriomenu/relatorioven";
import RelatorioGeral from "./pages/relatoriomenu/relatorioGeral";
import { ContextProvider } from "./context/useContext";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
              
                {/* ADM */}
                <Route path="/" element={<LoginADM />} />
                <Route path="/cadastroadm" element={<CadADM />} />

                {/* FINANCEIRO */}
                <Route path="/controletitulosfin" element={<CtrFIN />} />
                <Route path="/controletitulosfin2/:idCliente" element={<CtrFIN2 />} />
                <Route path="/controletitulosfin3/:idCliente" element={<CtrFIN3 />} />

                {/* CLIENTE */}
                <Route path="/cadastrocli" element={<CadCLI />} />

                {/* MENUS */}
                <Route path="/relatoriomenu" element={<RelatorioGeral/>} />  {/*RelatorioMenu*/ }
                <Route path="/relatoriopag" element={<RelatorioPag />} />
                <Route path="/relatorioven" element={<RelatorioVen />} />
                <Route path="/relatoriocre" element={<RelatorioCre />} />
              

            </Routes>
        </Router>
    );
}

export default AppRoutes;