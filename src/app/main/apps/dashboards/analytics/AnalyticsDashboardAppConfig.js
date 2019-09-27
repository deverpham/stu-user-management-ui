import React from 'react';
import {authRoles} from 'app/auth';
export const AnalyticsDashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.user,
    routes  : [
        {
            path     : '/apps/dashboards/analytics',
            component: React.lazy(() => import('./AnalyticsDashboardApp'))
        }
    ]
};
