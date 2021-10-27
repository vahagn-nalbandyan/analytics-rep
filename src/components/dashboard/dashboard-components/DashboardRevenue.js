import React, { useState } from "react";

import AverageMetricsWidget from "../../widgets/AverageMetricsWidget";

const DashboardRevenue = () => {
    const [revenueStatus, setRevenueStatus] = useState(false); //eslint-disable-line 

    return(
        <>
            <AverageMetricsWidget title='Total Revenue' dataAmount='2.314' dataRate='11.2' dataStatus={revenueStatus} />
            <AverageMetricsWidget title='Total Revenue' dataAmount='1.120' dataRate='11.2' dataStatus={revenueStatus} />
            <AverageMetricsWidget title='Total Revenue' dataAmount='2.314' dataRate='11.2' dataStatus={revenueStatus} />
            <AverageMetricsWidget title='Total Revenue' dataAmount='2.314' dataRate='11.2' dataStatus={revenueStatus} />
        </>
    );
}

export default DashboardRevenue;