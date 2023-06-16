import { Suspense, lazy } from "react";
import { Route } from "wouter"

import Header from "./components/Header"
import LoadingFallback from "./components/LoadingFallback";

const Countries = lazy(() => import("./pages/Countries"))
const CountryDetail = lazy(() => import("./pages/CountryDetail"))

function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<div className="h-[75vh] flex items-center justify-center overflow-hidden"> <LoadingFallback /> </div>}>
        <Route path="/" component={Countries} />
        <Route path="/country/:country" component={CountryDetail} />
      </Suspense>
    </>
  )
}

export default App