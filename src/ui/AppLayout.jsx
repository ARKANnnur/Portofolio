import { Outlet, ScrollRestoration } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="overflow-hidden">
      <ScrollRestoration />
      <Outlet />
    </div>
  );
}

export default AppLayout;
