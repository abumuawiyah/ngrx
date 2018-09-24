export interface Dashboard {
    dataShared: any;
}

export function generateMockDashboard(): Dashboard {
    return {
        dataShared: {}
    };
}
