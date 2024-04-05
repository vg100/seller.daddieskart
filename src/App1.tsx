
import SettingsPanel from './components/settings-panel/SettingsPanel';
import SettingsToggle from './components/settings-panel/SettingsToggle';
import useToggleStyle from './hooks/useToggleStyle';
import { useAppContext } from './providers/AppProvider';
import { useSettingsPanelContext } from './providers/SettingsPanelProvider';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const App1 = () => {

  const { isStylesheetLoaded } = useToggleStyle();
  const { pathname } = useLocation();

  const {
    settingsPanelConfig: { showSettingPanelButton },
    setSettingsPanelConfig
  } = useSettingsPanelContext();

  const {
    config: { theme, isRTL }
  } = useAppContext();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setSettingsPanelConfig({
      openSettingPanel: false
    });
  }, [isRTL]);

  return (
    <>
      {!isStylesheetLoaded ? (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: theme === 'dark' ? '#000' : '#fff'
          }}
        />
      ) : (
        <>
          <Outlet />
          {showSettingPanelButton && (
            <>
              {/* <SettingsToggle />
              <SettingsPanel /> */}
            </>
          )}
        </>
      )}
    </>
  );
};

export default App1;
