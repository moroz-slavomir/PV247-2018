import { connect } from 'react-redux';
import { HeadInHelmet} from '../../components/navigation/HeadInHelmet.jsx';

const mapStateToProps = (state) => ({
    route: state.router.location.pathname,
});

const enhancer = connect(mapStateToProps);
const connectedComponent = enhancer(HeadInHelmet);

export { connectedComponent as HeadInHelmet };
