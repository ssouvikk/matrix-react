import { Link } from 'react-router-dom';
import { useLocation, useNavigate, useParams } from "react-router-dom";

const DashboardView = () => {
    return <h1>dashbaord</h1>
    const { name, profileImg } = this.props.user;
    return (
        <div>
            <h3>Hello User name  </h3>
            <Link to="/profile" > My Profile </Link>
        </div>
    )
}

export default DashboardView