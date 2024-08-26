export const useModuleStore = defineStore('moduleStore', {
    state: () => ({
      list: [
        {
            name: 'Policy Automation',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            icon: '/images/icon5.webp',
            link: '/policy-automation',
            menus: [
                {
                    name: 'Home',
                    icon: 'ri-home-line',
                    link: '/policy-automation',
                    child: []
                },
                {
                    name: 'Director Approval',
                    icon: 'ri-shield-line',
                    link: '/policy-automation/director-approval',
                    child: []
                },
                {
                    name: 'Doc Template Approval',
                    icon: 'ri-file-add-line',
                    link: '/policy-automation/doc-template-approval',
                    child: []
                },
                {
                    name: 'Form Quotation',
                    icon: 'ri-article-line',
                    link: '/policy-automation/form-quotation',
                    child: []
                },
                {
                    name: 'Batch Import',
                    icon: 'ri-file-upload-line',
                    link: '/policy-automation/batch-import',
                    child: []
                },
                {
                    name: 'List Transaction',
                    icon: 'ri-list-check-2',
                    link: '/policy-automation/list-transaction',
                    child: []
                },
                {
                    name: 'List COI Bordereaux',
                    icon: 'ri-list-check',
                    link: '/policy-automation/list-coi-bordereaux',
                    child: []
                },
                {
                    name: 'Setup Product Scheme',
                    icon: 'ri-file-settings-line',
                    link: '/policy-automation/setup-product-scheme',
                    child: []
                },
                {
                    name: 'Setup Additional Fee',
                    icon: 'ri-file-settings-line',
                    link: '/policy-automation/setup-additional-fee',
                    child: []
                },
                {
                    name: 'Object Info Finder',
                    icon: 'ri-find-replace-line',
                    link: '/policy-automation/object-info-finder',
                    child: []
                },
                {
                    name: 'No Validation Approval',
                    icon: 'ri-checkbox-circle-line',
                    link: '/policy-automation/no-validation-approval',
                    child: []
                },
                {
                    name: 'Settings',
                    icon: 'ri-settings-2-line',
                    link: null,
                    child: [{
                            name: 'Clausul',
                            icon: 'ri-settings-line',
                            link: '/policy-automation/settings/clausul'
                        },
                        {
                            name: 'Wording',
                            icon: 'ri-settings-line',
                            link: '/policy-automation/settings/wording'
                        },
                        {
                            name: 'Product',
                            icon: 'ri-settings-line',
                            link: '/policy-automation/settings/product'
                        },
                        {
                            name: 'Document Control',
                            icon: 'ri-settings-line',
                            link: '/policy-automation/settings/document-control'
                        },
                    ],
                },
                {
                    name: 'Reporting',
                    icon: 'ri-line-chart-line',
                    link: null,
                    child: [{
                            name: 'Quotation',
                            icon: 'ri-bar-chart-line',
                            link: '/policy-automation/reporting/quotation'
                        },
                        {
                            name: 'Transaction History',
                            icon: 'ri-bar-chart-line',
                            link: '/policy-automation/reporting/transaction-history'
                        },
                    ]
                },
                {
                    name: 'Enforce Policy',
                    icon: 'ri-send-plane-2-line',
                    link: '/policy-automation/enforce-policy',
                    child: []
                },
            ]
        },
        {
            name: 'Claims',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            icon: '/images/icon1.webp',
            link: '/claims',
            menus:[
                {
                    name: 'Dashboard',
                    icon: 'ri-dashboard-line',
                    link: '/claims',
                    child: []
                },
                {
                    name: 'New Register',
                    icon: 'ri-home-line',
                    link: '/claims/new-register',
                    child: []
                },
                {
                    name: 'Work Items',
                    icon: 'ri-home-line',
                    link: '/claims/work-items',
                    child: []
                },
                {
                    name: 'Reminder',
                    icon: 'ri-home-line',
                    link: '/claims/reminder',
                    child: []
                },
                {
                    name: 'XOL',
                    icon: 'ri-home-line',
                    link: '/claims/xol',
                    child: []
                },
                {
                    name: 'Approval',
                    icon: 'ri-home-line',
                    link: null,
                    child: [
                        {
                            name: 'Reserve',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/approval/reserve'
                        },
                        {
                            name: 'Settlement',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/approval/settlement'
                        },
                        {
                            name: 'Third Party',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/approval/third-party'
                        },
                    ]
                },
                {
                    name: 'Data Queries',
                    icon: 'ri-home-line',
                    link: '/claims/data-queries',
                    child: []
                },
                {
                    name: 'Report GCM',
                    icon: 'ri-home-line',
                    link: '/claims/report-gcm',
                    child: []
                },
                {
                    name: 'Log Book',
                    icon: 'ri-home-line',
                    link: '/claims/log-book',
                    child: []
                },
                {
                    name: 'Master Data',
                    icon: 'ri-home-line',
                    link: '/claims/log-book',
                    child: [
                        {
                            name: 'Claim History',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/master-data/claim-history'
                        },
                        {
                            name: 'List Movement Type',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/master-data/list-movement-type'
                        },
                        {
                            name: 'Catasthrophe Event Code',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/master-data/catasthrophe-event-code'
                        },
                        {
                            name: 'Cause of Loss',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/master-data/cause-of-loss'
                        },
                        {
                            name: 'Contributing Factor',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/master-data/contributing-factor'
                        },
                        {
                            name: 'Claim Document',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/master-data/claim-document'
                        },
                        {
                            name: 'User Manual',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/master-data/user-manual'
                        },
                        {
                            name: 'Log Activity',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/master-data/log-activity'
                        },
                        {
                            name: 'Enforce Movement',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/master-data/enforce-movement'
                        },
                        {
                            name: 'Envorce 2 Movement',
                            icon: 'ri-bar-chart-line',
                            link: '/claims/master-data/enforce-2-movement'
                        },
                    ]
                },
            ]
        },
        {
            name: 'Reinsurance',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            icon: '/images/icon2.avif',
            link: '/reinsurance',
            menus:[]
        },
        {
            name: 'Master Data & User Management',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            icon: '/images/icon3.jpeg',
            link: '/master-data',
            menus:[]
        },
        {
            name: 'Reports',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            icon: '/images/icon4.webp',
            link: '/reports',
            menus:[]
        },
      ],
    }),
    actions: {}
  })