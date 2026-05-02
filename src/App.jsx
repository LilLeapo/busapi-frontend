import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import ModelsPage from './pages/ModelsPage.jsx';
import ComparePage from './pages/ComparePage.jsx';
import DocsPage from './pages/DocsPage.jsx';
import ErrorsPage from './pages/ErrorsPage.jsx';
import EnterprisePage from './pages/EnterprisePage.jsx';
import StatusPage from './pages/StatusPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import KeysPage from './pages/KeysPage.jsx';
import UsagePage from './pages/UsagePage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import BillingPage from './pages/BillingPage.jsx';
import AuditPage from './pages/AuditPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import PlaygroundPage from './pages/PlaygroundPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/models" element={<ModelsPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/docs/errors" element={<ErrorsPage />} />
      <Route path="/enterprise" element={<EnterprisePage />} />
      <Route path="/status" element={<StatusPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/app/dashboard" element={<DashboardPage />} />
      <Route path="/app/keys" element={<KeysPage />} />
      <Route path="/app/usage" element={<UsagePage />} />
      <Route path="/app/team" element={<TeamPage />} />
      <Route path="/app/billing" element={<BillingPage />} />
      <Route path="/app/audit" element={<AuditPage />} />
      <Route path="/app/settings" element={<SettingsPage />} />
      <Route path="/app/playground" element={<PlaygroundPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
