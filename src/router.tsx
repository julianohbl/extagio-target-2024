import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Exercicio01 } from "./pages/Exercicio01";
import { Exercicio02 } from "./pages/Exercicio02";
import { Exercicio03 } from "./pages/Exercicio03";
import { Exercicio04 } from "./pages/Exercicio04";
import { Exercicio05 } from "./pages/Exercicio05";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ex-01" element={<Exercicio01 />} />
        <Route path="/ex-02" element={<Exercicio02 />} />
        <Route path="/ex-03" element={<Exercicio03 />} />
        <Route path="/ex-04" element={<Exercicio04 />} />
        <Route path="/ex-05" element={<Exercicio05 />} />
      </Route>
    </Routes>
  )
}