import { ErrorBoundaryFallBack } from "@components/index";
import { Home } from "@pages/index";
import { ErrorBoundary } from "react-error-boundary";
import { HashRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <ErrorBoundary
      fallbackRender={(props) => <ErrorBoundaryFallBack {...props} />}
    >
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </ErrorBoundary>
  );
};
