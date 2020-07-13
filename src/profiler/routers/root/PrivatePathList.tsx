import DashboardPage from "../../screens/profiler/dashboard/DashboardPage";

const PrivatePathList: RouterPathIF[] = [
    {
        component: DashboardPage,
        exact: true,
        path: "/profiler",
    },
];

export default PrivatePathList;
