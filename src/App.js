import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { USER_TYPES } from './Configs/Constants';
import { AdminLayout, AuthLayout, EmployeeLayout } from './Layouts';
import { connect } from 'react-redux';

function App(props) {

  return (
    <div>
      <Router>
        <Routes>
          {!props.isAuthenticated && <Route path="/*" element={<AuthLayout {...props} />} />}
          {props.isAuthenticated && (
            <>
              {props.user.type === USER_TYPES.ADMIN ? (
                <Route path="/*" element={<AdminLayout {...props} />} />
              ) : (
                <Route path="/*" element={<EmployeeLayout {...props} />} />
              )}
            </>
          )}
        </Routes>
      </Router>

    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
    isExpired: state.Auth.isExpired,
    user: state.Auth.user
  };
};

export default connect(mapStateToProps)(App);