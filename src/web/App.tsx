import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "@pages/index";
import { ErrorBoundaryFallBack } from "@components/index";
import { ErrorBoundary } from "react-error-boundary";

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
