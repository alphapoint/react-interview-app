import {connect} from "react-redux";
import UserFormComponent from '../components/user-form-component';
import {updateUserForm} from '../actions/user-form-action';


const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  updateUserForm
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormComponent);
