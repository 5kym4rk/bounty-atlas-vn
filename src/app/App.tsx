import { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useAppStore } from './store';
import { SafetyGate } from '@/components/safety/SafetyGate';
import { DashboardPage } from '@/pages/DashboardPage';
import { OnboardingPage } from '@/pages/OnboardingPage';
import { DiagnosticPage } from '@/pages/DiagnosticPage';
import { AtlasPage } from '@/pages/AtlasPage';
import { DomainListPage } from '@/pages/DomainListPage';
import { DomainDetailPage } from '@/pages/DomainDetailPage';
import { ModuleDetailPage } from '@/pages/ModuleDetailPage';
import { PathsPage } from '@/pages/PathsPage';
import { ResourceLibraryPage } from '@/pages/ResourceLibraryPage';
import { LabHubPage } from '@/pages/LabHubPage';
import { ToolLibraryPage } from '@/pages/ToolLibraryPage';
import { ChecklistWorkspacePage } from '@/pages/ChecklistWorkspacePage';
import { ReportBuilderPage } from '@/pages/ReportBuilderPage';
import { SeverityLabPage } from '@/pages/SeverityLabPage';
import { TriageSimulatorPage } from '@/pages/TriageSimulatorPage';
import { GapAnalysisPage } from '@/pages/GapAnalysisPage';
import { SearchPage } from '@/pages/SearchPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { AboutPage } from '@/pages/AboutPage';

export function App() {
  const initialize = useAppStore((s) => s.initialize);
  const ready = useAppStore((s) => s.ready);

  useEffect(() => {
    void initialize();
  }, [initialize]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center p-6 text-ink-muted">
        Đang mở kho dữ liệu cục bộ…
      </div>
    );
  }

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="onboarding" element={<OnboardingPage />} />
          <Route path="diagnostic" element={<DiagnosticPage />} />
          <Route path="atlas" element={<AtlasPage />} />
          <Route path="domains" element={<DomainListPage />} />
          <Route path="domains/:domainId" element={<DomainDetailPage />} />
          <Route path="modules/:moduleId" element={<ModuleDetailPage />} />
          <Route path="paths" element={<PathsPage />} />
          <Route path="resources" element={<ResourceLibraryPage />} />
          <Route path="tools" element={<ToolLibraryPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="gaps" element={<GapAnalysisPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="about" element={<AboutPage />} />

          <Route
            path="labs"
            element={
              <SafetyGate>
                <LabHubPage />
              </SafetyGate>
            }
          />
          <Route
            path="checklists"
            element={
              <SafetyGate>
                <ChecklistWorkspacePage />
              </SafetyGate>
            }
          />
          <Route
            path="report-builder"
            element={
              <SafetyGate>
                <ReportBuilderPage />
              </SafetyGate>
            }
          />
          <Route
            path="severity"
            element={
              <SafetyGate>
                <SeverityLabPage />
              </SafetyGate>
            }
          />
          <Route
            path="triage"
            element={
              <SafetyGate>
                <TriageSimulatorPage />
              </SafetyGate>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
