const DashboardView = ({ user }) => {
    return <>
        <h1>dashbaord</h1>
        <h3>Hello {user.name}  </h3>
        <h3>User type : {user.type}  </h3>
    </>
    
}

export default DashboardView